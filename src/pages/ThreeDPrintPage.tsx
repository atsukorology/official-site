import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';

import workLamp from '../assets/works/1784533866566.png';
import workClockStyled from '../assets/works/1784533754832.png';
import workClockDay from '../assets/works/20251211_115913.jpg';
import workCelestialKeys from '../assets/works/1784421556785.png';
import workPrecious from '../assets/works/Image_20260719_093712_342.webp';
import workCoasters from '../assets/works/7132CA6A-472F-4A42-826A-59C04BA4C380_L0_001-2026_7_18 15_41_54.png';
import workEarrings from '../assets/works/B06FACAE-869E-452F-A4D6-24B8EAA3E3E4_L0_001-2026_7_18 14_15_15.png';
import workStand from '../assets/works/178D4A64-3B42-47E5-9B3D-C0BA58BD2C02_L0_001-2026_7_18 14_35_42.png';
import workZodiacEarrings from '../assets/works/84689686-F3E3-4B3E-9DAA-0A8E4711E9F5_L0_001-2026_7_18 14_14_32.jpg';
import workPhoneStand from '../assets/works/1087E569-FD73-47C7-ADB4-17997691FC95_L0_001-2026_7_18 14_16_05.jpg';

type Work = {
    id: string;
    src: string;
    title: string;
    subtitle: string;
    span: 'tall' | 'square' | 'wide';
};

const WORKS: Work[] = [
    {
        id: 'lamp',
        src: workLamp,
        title: 'Hexagonal Lamp',
        subtitle: 'Wood-texture filament · Ambient light',
        span: 'tall',
    },
    {
        id: 'clock-day',
        src: workClockDay,
        title: 'Zodiac Clock',
        subtitle: 'Astrological wall clock',
        span: 'square',
    },
    {
        id: 'celestial-keys',
        src: workCelestialKeys,
        title: '天体コレクション',
        subtitle: 'Celestial key charms',
        span: 'square',
    },
    {
        id: 'coasters',
        src: workCoasters,
        title: 'Zodiac Coasters',
        subtitle: 'Sun & moon trays',
        span: 'tall',
    },
    {
        id: 'earrings',
        src: workEarrings,
        title: '星屑のイヤリング',
        subtitle: 'Star dust earrings',
        span: 'tall',
    },
    {
        id: 'stand',
        src: workStand,
        title: 'ピアススタンド',
        subtitle: 'Celestial earring organizer',
        span: 'tall',
    },
    {
        id: 'precious',
        src: workPrecious,
        title: 'Precious Charms',
        subtitle: 'Resin keychains',
        span: 'tall',
    },
    {
        id: 'phone',
        src: workPhoneStand,
        title: 'Phone Stand',
        subtitle: 'Lattice · Moon emblem',
        span: 'square',
    },
    {
        id: 'clock-styled',
        src: workClockStyled,
        title: 'Zodiac Clock',
        subtitle: 'Styled lifestyle shot',
        span: 'tall',
    },
    {
        id: 'zodiac-earrings',
        src: workZodiacEarrings,
        title: 'Zodiac Earrings',
        subtitle: 'Wear your universe',
        span: 'tall',
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

function GalleryItem({
    work,
    index,
    onOpen,
}: {
    work: Work;
    index: number;
    onOpen: (index: number) => void;
}) {
    const [hovered, setHovered] = useState(false);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
        stiffness: 200,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
        stiffness: 200,
        damping: 20,
    });

    const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        mx.set(0);
        my.set(0);
        setHovered(false);
    };

    const aspect =
        work.span === 'square'
            ? 'aspect-square'
            : work.span === 'wide'
              ? 'aspect-[4/3]'
              : 'aspect-[3/4]';

    return (
        <motion.button
            type="button"
            onClick={() => onOpen(index)}
            onMouseEnter={() => setHovered(true)}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease }}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 900,
            }}
            className={`group relative w-full overflow-hidden bg-neutral-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 ${aspect}`}
            aria-label={`${work.title} を拡大表示`}
        >
            <motion.img
                src={work.src}
                alt={work.title}
                loading="lazy"
                animate={{ scale: hovered ? 1.06 : 1 }}
                transition={{ duration: 0.7, ease }}
                className="h-full w-full object-cover"
            />

            <motion.div
                initial={false}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-neutral-950/10 to-transparent"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                <motion.div
                    initial={false}
                    animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease }}
                >
                    <p className="font-['Montserrat'] text-[10px] tracking-[0.35em] uppercase text-white/70">
                        {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 font-['Montserrat'] text-lg md:text-xl font-medium tracking-tight text-white">
                        {work.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/75 tracking-wide">
                        {work.subtitle}
                    </p>
                </motion.div>
            </div>

            <motion.span
                initial={false}
                animate={{
                    opacity: hovered ? 1 : 0,
                    scale: hovered ? 1 : 0.85,
                }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm"
                aria-hidden
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                        d="M7 1v12M1 7h12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                    />
                </svg>
            </motion.span>
        </motion.button>
    );
}

function Lightbox({
    works,
    index,
    onClose,
    onPrev,
    onNext,
}: {
    works: Work[];
    index: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    const work = works[index];

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext]);

    return (
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={work.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col bg-white"
        >
            <div className="flex items-center justify-between px-6 py-5 md:px-10">
                <div>
                    <p className="font-['Montserrat'] text-[10px] tracking-[0.35em] uppercase text-neutral-400">
                        {String(index + 1).padStart(2, '0')} /{' '}
                        {String(works.length).padStart(2, '0')}
                    </p>
                    <h2 className="mt-1 font-['Montserrat'] text-lg md:text-xl tracking-tight text-neutral-900">
                        {work.title}
                    </h2>
                </div>
                <button
                    type="button"
                    onClick={onClose}
                    className="group flex h-11 w-11 items-center justify-center text-neutral-500 transition-colors hover:text-neutral-900"
                    aria-label="閉じる"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M4 4l12 12M16 4L4 16"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            className="transition-transform group-hover:scale-110"
                        />
                    </svg>
                </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-4 pb-8 md:px-16">
                <button
                    type="button"
                    onClick={onPrev}
                    className="absolute left-2 z-10 hidden h-12 w-12 items-center justify-center text-neutral-400 transition-colors hover:text-neutral-900 md:flex md:left-6"
                    aria-label="前の作品"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M15 5L8 12l7 7"
                            stroke="currentColor"
                            strokeWidth="1.2"
                        />
                    </svg>
                </button>

                <AnimatePresence mode="wait">
                    <motion.img
                        key={work.id}
                        src={work.src}
                        alt={work.title}
                        initial={{ opacity: 0, scale: 0.96, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -12 }}
                        transition={{ duration: 0.45, ease }}
                        className="max-h-[78vh] max-w-full object-contain"
                    />
                </AnimatePresence>

                <button
                    type="button"
                    onClick={onNext}
                    className="absolute right-2 z-10 hidden h-12 w-12 items-center justify-center text-neutral-400 transition-colors hover:text-neutral-900 md:flex md:right-6"
                    aria-label="次の作品"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9 5l7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="1.2"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex items-center justify-between border-t border-neutral-100 px-6 py-4 md:px-10">
                <p className="text-sm text-neutral-500">{work.subtitle}</p>
                <div className="flex gap-3 md:hidden">
                    <button
                        type="button"
                        onClick={onPrev}
                        className="text-xs tracking-[0.2em] uppercase text-neutral-500"
                    >
                        Prev
                    </button>
                    <button
                        type="button"
                        onClick={onNext}
                        className="text-xs tracking-[0.2em] uppercase text-neutral-900"
                    >
                        Next
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

function ThreeDPrintPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const open = useCallback((i: number) => setActiveIndex(i), []);
    const close = useCallback(() => setActiveIndex(null), []);
    const prev = useCallback(
        () =>
            setActiveIndex((i) =>
                i === null ? null : (i - 1 + WORKS.length) % WORKS.length
            ),
        []
    );
    const next = useCallback(
        () =>
            setActiveIndex((i) =>
                i === null ? null : (i + 1) % WORKS.length
            ),
        []
    );

    return (
        <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-200 selection:text-neutral-900">
            {/* soft atmospheric wash — not flat white */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 -z-10"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 50% at 10% -10%, #f5f5f4 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 90% 0%, #fafaf9 0%, transparent 50%), linear-gradient(180deg, #ffffff 0%, #fafafa 100%)',
                }}
            />

            <header className="relative px-6 pt-8 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease }}
                >
                    <Link
                        to="/portal"
                        className="inline-flex items-center gap-2 font-['Montserrat'] text-[11px] tracking-[0.28em] uppercase text-neutral-400 transition-colors hover:text-neutral-900"
                    >
                        <span aria-hidden>←</span>
                        Home
                    </Link>
                </motion.div>
            </header>

            {/* Hero — one composition: brand signal + line + sentence + featured visual */}
            <section className="relative px-6 pb-16 pt-14 md:px-12 md:pb-24 md:pt-20 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                        className="font-['Montserrat'] text-[11px] tracking-[0.4em] uppercase text-neutral-400"
                    >
                        The Sheep Company
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease }}
                        className="mt-4 font-['Montserrat'] text-5xl font-bold leading-[0.92] tracking-tight text-neutral-900 md:text-7xl lg:text-8xl"
                    >
                        3D Print
                        <br />
                        Works
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.4, ease }}
                        className="mt-6 max-w-md text-sm leading-relaxed text-neutral-500 md:text-base"
                    >
                        Original objects shaped layer by layer — clocks, charms,
                        and quiet tools for everyday ritual.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, clipPath: 'inset(12% 8% 12% 8%)' }}
                    animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                    transition={{ duration: 1.35, delay: 0.45, ease }}
                    className="relative mx-auto mt-14 max-w-6xl overflow-hidden md:mt-20"
                >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 md:aspect-[21/9]">
                        <motion.img
                            src={workLamp}
                            alt="Hexagonal Lamp"
                            initial={{ scale: 1.12 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.6, delay: 0.5, ease }}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className="absolute bottom-4 left-4 md:bottom-6 md:left-6"
                    >
                        <p className="font-['Montserrat'] text-[10px] tracking-[0.3em] uppercase text-white/80 drop-shadow">
                            Featured · Hexagonal Lamp
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Gallery */}
            <section className="px-6 pb-24 md:px-12 md:pb-32 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease }}
                        className="mb-10 flex items-end justify-between border-b border-neutral-200 pb-4 md:mb-14"
                    >
                        <h2 className="font-['Montserrat'] text-sm tracking-[0.3em] uppercase text-neutral-900">
                            Gallery
                        </h2>
                        <p className="font-['Montserrat'] text-[11px] tracking-[0.25em] text-neutral-400">
                            {WORKS.length} pieces
                        </p>
                    </motion.div>

                    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
                        {WORKS.map((work, index) => (
                            <div key={work.id} className="mb-5 break-inside-avoid lg:mb-6">
                                <GalleryItem
                                    work={work}
                                    index={index}
                                    onOpen={open}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="border-t border-neutral-100 px-6 py-10 text-center md:px-12">
                <p className="font-['Montserrat'] text-[10px] tracking-[0.3em] uppercase text-neutral-400">
                    © {new Date().getFullYear()} The Sheep Company
                </p>
            </footer>

            <AnimatePresence>
                {activeIndex !== null && (
                    <Lightbox
                        works={WORKS}
                        index={activeIndex}
                        onClose={close}
                        onPrev={prev}
                        onNext={next}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

export default ThreeDPrintPage;
