import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    MarcheEvent,
    addDays,
    fetchMarcheEvents,
    isCalendarConfigured,
    isDemoMode,
    todayKey,
} from '../lib/googleCalendar';

const MONTHS_AHEAD = 12;
const UPCOMING_LIMIT = 4;
const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];
const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

type LoadState = 'loading' | 'ready' | 'error';

interface YearMonth {
    year: number;
    month: number; // 1-12
}

const shiftMonth = ({ year, month }: YearMonth, diff: number): YearMonth => {
    const index = year * 12 + (month - 1) + diff;
    return { year: Math.floor(index / 12), month: (index % 12) + 1 };
};

const monthKey = ({ year, month }: YearMonth) => `${year}-${String(month).padStart(2, '0')}`;

const weekdayOf = (key: string) => {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
};

const jstMidnight = (ym: YearMonth) => new Date(`${monthKey(ym)}-01T00:00:00+09:00`);

const buildMonthGrid = (ym: YearMonth) => {
    const first = `${monthKey(ym)}-01`;
    const gridStart = addDays(first, -weekdayOf(first));
    const daysInMonth = new Date(Date.UTC(ym.year, ym.month, 0)).getUTCDate();
    const cellCount = Math.ceil((weekdayOf(first) + daysInMonth) / 7) * 7;
    return Array.from({ length: cellCount }, (_, i) => addDays(gridStart, i));
};

const formatDateLabel = (key: string) => {
    const [, m, d] = key.split('-').map(Number);
    return `${m}月${d}日（${WEEKDAYS[weekdayOf(key)]}）`;
};

const createDemoEvents = (): MarcheEvent[] => {
    const today = todayKey();
    const demo = (offset: number, length: number, title: string, time: string | null, location: string, description: string | null): MarcheEvent => ({
        id: `demo-${offset}`,
        title,
        startDate: addDays(today, offset),
        endDate: addDays(today, offset + length - 1),
        timeLabel: time,
        location,
        description,
        url: null,
    });
    return [
        demo(3, 1, '星降るマルシェ', '10:00 – 16:00', '代々木公園 イベント広場', 'タロット 15分 ¥1,500〜'),
        demo(10, 2, 'ヒーリング＆クラフトフェス', null, '横浜赤レンガ倉庫', '西洋占星術ミニ鑑定'),
        demo(18, 1, 'ファーマーズマーケット', '09:00 – 14:00', '国連大学前広場', null),
        demo(31, 1, '満月のナイトマルシェ', '17:00 – 21:00', '二子玉川ライズ ガレリア', 'ホロスコープ簡易リーディング'),
    ];
};

const ChevronIcon: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
);

const PinIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
    </svg>
);

const ClockIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
);

const EventItem: React.FC<{ event: MarcheEvent }> = ({ event }) => {
    const [, m, d] = event.startDate.split('-').map(Number);
    const weekday = weekdayOf(event.startDate);
    const isMultiDay = event.endDate !== event.startDate;

    return (
        <motion.li
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="group relative flex gap-4 rounded-xl border border-slate-700/40 bg-slate-900/40 p-4 transition-colors duration-300 hover:border-blue-400/40 hover:bg-slate-800/40"
        >
            <div className="flex h-fit w-14 flex-shrink-0 flex-col items-center justify-center self-start rounded-lg border border-blue-300/20 bg-gradient-to-b from-blue-500/15 to-indigo-500/5 py-2">
                <span className="text-[0.65rem] tracking-[0.2em] text-blue-200/70">{m}月</span>
                <span className="text-2xl font-light leading-none text-white">{d}</span>
                <span className={`mt-1 text-[0.65rem] ${weekday === 0 ? 'text-rose-300/80' : weekday === 6 ? 'text-sky-300/80' : 'text-slate-400'}`}>
                    {WEEKDAYS[weekday]}
                </span>
            </div>

            <div className="min-w-0 flex-grow space-y-1.5">
                <p className="text-base md:text-lg font-light tracking-wide text-white">{event.title}</p>
                {isMultiDay && (
                    <p className="text-xs text-blue-200/70 tracking-wider">〜 {formatDateLabel(event.endDate)}</p>
                )}
                {event.timeLabel && (
                    <p className="flex items-start gap-1.5 text-xs md:text-sm text-slate-400">
                        <ClockIcon />
                        {event.timeLabel}
                    </p>
                )}
                {event.location && (
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-1.5 text-xs md:text-sm text-slate-400 transition-colors hover:text-blue-200"
                    >
                        <PinIcon />
                        <span className="underline decoration-slate-600 underline-offset-4">{event.location}</span>
                    </a>
                )}
                {event.description && (
                    <p className="whitespace-pre-line text-xs md:text-sm leading-relaxed text-slate-400 line-clamp-3">{event.description}</p>
                )}
                {event.url && (
                    <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block pt-1 text-xs tracking-[0.2em] text-blue-300 transition-colors hover:text-white"
                    >
                        DETAIL →
                    </a>
                )}
            </div>
        </motion.li>
    );
};

const MarcheCalendar: React.FC = () => {
    const today = todayKey();
    const [baseMonth] = useState<YearMonth>(() => {
        const [y, m] = today.split('-').map(Number);
        return { year: y, month: m };
    });
    const [viewMonth, setViewMonth] = useState<YearMonth>(baseMonth);
    const [monthDirection, setMonthDirection] = useState(1);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [events, setEvents] = useState<MarcheEvent[]>([]);
    const [loadState, setLoadState] = useState<LoadState>('loading');

    useEffect(() => {
        if (isDemoMode) {
            setEvents(createDemoEvents());
            setLoadState('ready');
            return;
        }
        if (!isCalendarConfigured) return;

        const controller = new AbortController();
        fetchMarcheEvents(jstMidnight(baseMonth), jstMidnight(shiftMonth(baseMonth, MONTHS_AHEAD)), controller.signal)
            .then((items) => {
                setEvents(items);
                setLoadState('ready');
            })
            .catch((error) => {
                if (controller.signal.aborted) return;
                console.error(error);
                setLoadState('error');
            });
        return () => controller.abort();
    }, [baseMonth]);

    const eventsByDate = useMemo(() => {
        const map = new Map<string, MarcheEvent[]>();
        events.forEach((event) => {
            let key = event.startDate;
            for (let i = 0; key <= event.endDate && i < 62; i++, key = addDays(key, 1)) {
                map.set(key, [...(map.get(key) ?? []), event]);
            }
        });
        return map;
    }, [events]);

    const upcomingEvents = useMemo(
        () => events.filter((event) => event.endDate >= today).slice(0, UPCOMING_LIMIT),
        [events, today],
    );

    if (!isCalendarConfigured && !isDemoMode) return null;

    const grid = buildMonthGrid(viewMonth);
    const canGoPrev = monthKey(viewMonth) > monthKey(baseMonth);
    const canGoNext = monthKey(viewMonth) < monthKey(shiftMonth(baseMonth, MONTHS_AHEAD - 1));
    const listedEvents = selectedDate ? eventsByDate.get(selectedDate) ?? [] : upcomingEvents;

    const changeMonth = (diff: number) => {
        setMonthDirection(diff);
        setViewMonth((current) => shiftMonth(current, diff));
    };

    const handleSelectDate = (key: string) => {
        setSelectedDate((current) => (current === key ? null : key));
    };

    return (
        <section id="schedule" className="scroll-mt-24">
            <div className="text-center mb-10 md:mb-14">
                <p className="text-xs md:text-sm tracking-[0.5em] text-blue-200/70 pl-[0.5em]">SCHEDULE</p>
                <h2 className="font-noto mt-4 text-2xl md:text-4xl font-light tracking-[0.3em] text-white pl-[0.3em]">
                    マルシェ出店予定
                </h2>
                <p className="mt-4 text-xs md:text-base font-light tracking-wider text-slate-400">
                    対面でお会いできる日のご案内です
                </p>
                {isDemoMode && (
                    <p className="mt-4 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-xs text-amber-200/90">
                        サンプル表示中（.env.local を設定すると実際の予定に切り替わります）
                    </p>
                )}
            </div>

            <div className="relative">
                <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent blur-2xl" />

                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-8 lg:gap-10 rounded-3xl border border-slate-700/50 bg-slate-900/50 p-5 md:p-8 shadow-2xl backdrop-blur-md">
                    {/* 月カレンダー */}
                    <div className="md:col-span-3">
                        <div className="mb-6 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => changeMonth(-1)}
                                disabled={!canGoPrev}
                                aria-label="前の月"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-all hover:border-blue-400/60 hover:text-white disabled:pointer-events-none disabled:opacity-20"
                            >
                                <ChevronIcon direction="left" />
                            </button>
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-extralight tracking-[0.15em] text-white">
                                    {viewMonth.year}.{String(viewMonth.month).padStart(2, '0')}
                                </p>
                                <p className="text-[0.65rem] md:text-xs tracking-[0.4em] text-blue-200/60 pl-[0.4em]">
                                    {MONTH_NAMES[viewMonth.month - 1].toUpperCase()}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => changeMonth(1)}
                                disabled={!canGoNext}
                                aria-label="次の月"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-all hover:border-blue-400/60 hover:text-white disabled:pointer-events-none disabled:opacity-20"
                            >
                                <ChevronIcon direction="right" />
                            </button>
                        </div>

                        <div className="grid grid-cols-7 mb-2">
                            {WEEKDAYS.map((label, i) => (
                                <div
                                    key={label}
                                    className={`py-2 text-center text-xs tracking-widest ${i === 0 ? 'text-rose-300/70' : i === 6 ? 'text-sky-300/70' : 'text-slate-500'}`}
                                >
                                    {label}
                                </div>
                            ))}
                        </div>

                        <div className="relative overflow-hidden">
                            <AnimatePresence mode="wait" initial={false} custom={monthDirection}>
                                <motion.div
                                    key={monthKey(viewMonth)}
                                    custom={monthDirection}
                                    initial={{ opacity: 0, x: monthDirection * 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: monthDirection * -24 }}
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                    className="grid grid-cols-7 gap-1 md:gap-1.5"
                                >
                                    {grid.map((key) => {
                                        const inMonth = key.startsWith(monthKey(viewMonth));
                                        const hasEvent = eventsByDate.has(key);
                                        const isToday = key === today;
                                        const isPast = key < today;
                                        const isSelected = key === selectedDate;
                                        const day = Number(key.slice(8));

                                        return (
                                            <button
                                                key={key}
                                                type="button"
                                                disabled={!hasEvent}
                                                onClick={() => handleSelectDate(key)}
                                                aria-label={hasEvent ? `${formatDateLabel(key)}の出店予定を見る` : undefined}
                                                aria-pressed={hasEvent ? isSelected : undefined}
                                                aria-current={isToday ? 'date' : undefined}
                                                className={[
                                                    'relative flex h-11 md:h-12 lg:h-14 flex-col items-center justify-center rounded-xl text-sm md:text-base font-light transition-all duration-300',
                                                    !inMonth && 'opacity-25',
                                                    hasEvent
                                                        ? 'cursor-pointer border border-blue-300/30 bg-gradient-to-br from-blue-500/25 to-indigo-500/10 text-white shadow-[0_0_18px_rgba(59,130,246,0.25)] hover:from-blue-500/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]'
                                                        : isPast ? 'text-slate-600' : 'text-slate-400',
                                                    isSelected && 'ring-2 ring-blue-300/80 ring-offset-2 ring-offset-slate-900',
                                                    isToday && !hasEvent && 'border border-blue-200/40 text-blue-100',
                                                ].filter(Boolean).join(' ')}
                                            >
                                                <span>{day}</span>
                                                {hasEvent && (
                                                    <span className="absolute bottom-1.5 md:bottom-2 h-1 w-1 rounded-full bg-blue-200 shadow-[0_0_6px_2px_rgba(191,219,254,0.8)]" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* 予定リスト */}
                    <div className="md:col-span-2 md:border-l md:border-slate-700/50 md:pl-8 lg:pl-10">
                        <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-slate-700/50 pb-3">
                            <h3 className="text-sm md:text-base font-light tracking-[0.2em] text-blue-100">
                                {selectedDate ? formatDateLabel(selectedDate) : 'これからの出店'}
                            </h3>
                            {selectedDate && (
                                <button
                                    type="button"
                                    onClick={() => setSelectedDate(null)}
                                    className="text-xs tracking-wider text-slate-400 transition-colors hover:text-white"
                                >
                                    一覧に戻る
                                </button>
                            )}
                        </div>

                        {loadState === 'loading' && (
                            <ul className="space-y-3">
                                {[0, 1, 2].map((i) => (
                                    <li key={i} className="h-24 animate-pulse rounded-xl bg-slate-800/40" />
                                ))}
                            </ul>
                        )}

                        {loadState === 'error' && (
                            <p className="py-10 text-center text-sm leading-relaxed text-slate-400">
                                スケジュールを読み込めませんでした。
                                <br />
                                時間をおいて再度お試しください。
                            </p>
                        )}

                        {loadState === 'ready' && listedEvents.length === 0 && (
                            <p className="py-10 text-center text-sm leading-relaxed text-slate-400">
                                現在予定されている出店はありません。
                                <br />
                                決まり次第こちらでお知らせします。
                            </p>
                        )}

                        {loadState === 'ready' && listedEvents.length > 0 && (
                            <ul className="space-y-3">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    {listedEvents.map((event) => (
                                        <EventItem key={`${selectedDate ?? 'upcoming'}-${event.id}`} event={event} />
                                    ))}
                                </AnimatePresence>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarcheCalendar;
