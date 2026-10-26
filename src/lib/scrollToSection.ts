const CLEARANCE = 16;
const MAX_WATCH_MS = 5000;

const scroller = () => document.scrollingElement ?? document.documentElement;

const headerHeight = () => document.querySelector('nav')?.getBoundingClientRect().height ?? 0;

/** transform / translate の Y 成分。出現アニメーション中のずれを除くために使う */
const translateY = (element: HTMLElement) => {
    const style = getComputedStyle(element);
    const transform = style.transform;
    if (transform && transform !== 'none') {
        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            const ty = Number(matrix[1].split(',')[5]);
            return Number.isFinite(ty) ? ty : 0;
        }
        const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
        if (matrix3d) {
            const ty = Number(matrix3d[1].split(',')[13]);
            return Number.isFinite(ty) ? ty : 0;
        }
    }
    const declaredTranslate = (style as CSSStyleDeclaration & { translate?: string }).translate;
    if (declaredTranslate && declaredTranslate !== 'none') {
        const parts = declaredTranslate.split(' ');
        const y = parts.length === 1 ? parts[0] : parts[1];
        const ty = parseFloat(y);
        return Number.isFinite(ty) ? ty : 0;
    }
    return 0;
};

/** アニメーションが終わったあとの、文書上の上端 */
const restingDocumentTop = (element: HTMLElement) => {
    let offset = 0;
    let node: HTMLElement | null = element;
    while (node) {
        offset += translateY(node);
        node = node.parentElement;
    }
    return element.getBoundingClientRect().top + scroller().scrollTop - offset;
};

const targetScrollTop = (element: HTMLElement) =>
    Math.max(0, restingDocumentTop(element) - headerHeight() - CLEARANCE);

export const scrollToSection = (sectionId: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.getElementById(sectionId);
    if (!element) return false;
    scroller().scrollTo({ top: targetScrollTop(element), behavior });
    return true;
};

/**
 * セクション指定の着地用。画像や予定の読み込みで高さが変わっても、
 * 上部バーの下に揃うまで位置を合わせ直す。利用者が自分でスクロールしたら止める。
 */
export const watchScrollToSection = (sectionId: string) => {
    let stopped = false;
    let aligning = false;
    let expectedTop: number | null = null;
    let hardTimer = 0;

    const stop = () => {
        if (stopped) return;
        stopped = true;
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('load', align);
        window.clearTimeout(hardTimer);
    };

    const align = () => {
        if (stopped) return;
        const element = document.getElementById(sectionId);
        if (!element) return;
        const top = targetScrollTop(element);
        expectedTop = top;
        if (Math.abs(scroller().scrollTop - top) <= 2) return;
        aligning = true;
        scroller().scrollTo({ top, behavior: 'auto' });
        requestAnimationFrame(() => {
            aligning = false;
        });
    };

    const onScroll = () => {
        if (aligning || expectedTop === null) return;
        // アドレスバーの出し入れ程度では止めない。明らかに自分で動かしたときだけ追従をやめる
        if (Math.abs(scroller().scrollTop - expectedTop) > 120) stop();
    };

    const observer = new ResizeObserver(() => align());

    align();
    hardTimer = window.setTimeout(stop, MAX_WATCH_MS);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', align);
    const root = document.getElementById('root');
    if (root) observer.observe(root);

    return stop;
};
