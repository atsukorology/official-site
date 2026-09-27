const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY;
const CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;
const TIME_ZONE = 'Asia/Tokyo';

export const isCalendarConfigured = Boolean(API_KEY && CALENDAR_ID);

/** 未設定のまま開発サーバーで動かしているときはサンプルデータで表示する */
export const isDemoMode = !isCalendarConfigured && process.env.NODE_ENV === 'development';

export interface MarcheEvent {
    id: string;
    title: string;
    /** YYYY-MM-DD（開催初日） */
    startDate: string;
    /** YYYY-MM-DD（最終日。1日だけの予定なら startDate と同じ） */
    endDate: string;
    /** "10:00 – 16:00" のような表示用文字列。終日予定なら null */
    timeLabel: string | null;
    location: string | null;
    description: string | null;
    url: string | null;
}

interface GoogleCalendarEvent {
    id: string;
    status?: string;
    summary?: string;
    description?: string;
    location?: string;
    start: { date?: string; dateTime?: string };
    end: { date?: string; dateTime?: string };
}

const dateKeyFormatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
});

const timeFormatter = new Intl.DateTimeFormat('ja-JP', {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
});

export const toDateKey = (date: Date) => dateKeyFormatter.format(date);

export const todayKey = () => toDateKey(new Date());

/** YYYY-MM-DD に日数を足す（タイムゾーンの影響を受けないよう UTC で計算） */
export const addDays = (key: string, days: number) => {
    const [y, m, d] = key.split('-').map(Number);
    const date = new Date(Date.UTC(y, m - 1, d + days));
    return date.toISOString().slice(0, 10);
};

/** Google カレンダーの説明欄は HTML になることがあるため、プレーンテキストに変換する */
const htmlToText = (html: string) => {
    const withBreaks = html.replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>/gi, '\n');
    const doc = new DOMParser().parseFromString(withBreaks, 'text/html');
    return (doc.body.textContent ?? '').trim();
};

const URL_PATTERN = /https?:\/\/[^\s<>"'）)]+/;

const parseEvent = (event: GoogleCalendarEvent): MarcheEvent | null => {
    const { start, end } = event;
    let startDate: string;
    let endDate: string;
    let timeLabel: string | null = null;

    if (start.date && end.date) {
        startDate = start.date;
        // 終日予定の end.date は「翌日」を指すため 1 日戻す
        endDate = addDays(end.date, -1);
    } else if (start.dateTime && end.dateTime) {
        const startAt = new Date(start.dateTime);
        const endAt = new Date(end.dateTime);
        startDate = toDateKey(startAt);
        endDate = toDateKey(endAt);
        timeLabel = `${timeFormatter.format(startAt)} – ${timeFormatter.format(endAt)}`;
    } else {
        return null;
    }

    const description = event.description ? htmlToText(event.description) : null;
    const url = description?.match(URL_PATTERN)?.[0] ?? null;

    return {
        id: event.id,
        title: event.summary?.trim() || '出店予定',
        startDate,
        endDate: endDate < startDate ? startDate : endDate,
        timeLabel,
        location: event.location?.trim() || null,
        description: description ? description.replace(URL_PATTERN, '').trim() || null : null,
        url,
    };
};

/** 指定期間（timeMin 以上 timeMax 未満）の予定を取得する */
export const fetchMarcheEvents = async (
    timeMin: Date,
    timeMax: Date,
    signal?: AbortSignal,
): Promise<MarcheEvent[]> => {
    if (!API_KEY || !CALENDAR_ID) {
        throw new Error('Google カレンダーの API キーまたはカレンダー ID が設定されていません。');
    }

    const params = new URLSearchParams({
        key: API_KEY,
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        singleEvents: 'true',
        orderBy: 'startTime',
        maxResults: '250',
        timeZone: TIME_ZONE,
    });
    const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?${params}`;

    const response = await fetch(endpoint, { signal });
    if (!response.ok) {
        throw new Error(`Google Calendar API error: ${response.status}`);
    }

    const data: { items?: GoogleCalendarEvent[] } = await response.json();
    return (data.items ?? [])
        .filter((event) => event.status !== 'cancelled')
        .map(parseEvent)
        .filter((event): event is MarcheEvent => event !== null);
};
