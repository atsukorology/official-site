import * as React from "react";

// デフォルト値を設定
const DEFAULT_SIZE = "5em"; // フォントサイズに連動させる
const DEFAULT_STROKE_WIDTH = 1.5; // 元の0.1は非常に細いため、一般的な値に変更 (調整可能)

// SVGProps<SVGElement> を拡張して、独自のpropsを定義することも可能ですが、
// ここでは既存のSVG属性 + strokeWidth を扱えるようにします。
// React.SVGProps<SVGElement> は width, height, className, style など多くの属性を含みます。
interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    strokeWidth?: string | number;
}

/**
 * SVG アイコンコンポーネント (TypeScriptバージョン)
 * CSSの color プロパティで線の色を、fontSize でおおよそのサイズを制御できます。
 *
 * @param {SvgIconProps} props - コンポーネントのプロパティ
 * @param {string|number} [props.width=DEFAULT_SIZE] - アイコンの幅
 * @param {string|number} [props.height=DEFAULT_SIZE] - アイコンの高さ
 * @param {string|number} [props.strokeWidth=DEFAULT_STROKE_WIDTH] - 線の太さ
 * @param {string} [props.className] - アイコンに適用するCSSクラス名
 * @param {object} [props.style] - アイコンに適用するインラインスタイル
 * @param {any} [props.rest] - その他のSVG属性 (aria-label, roleなど)
 */
const BrandIcon: React.FC<SvgIconProps> = ({
    width = DEFAULT_SIZE,
    height = DEFAULT_SIZE,
    strokeWidth = DEFAULT_STROKE_WIDTH,
    className,
    style,
    ...rest // {...props} から strokeWidth を除いた残りのprops
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        // id="svg5" // Reactコンポーネント内では通常不要
        width={width}
        height={height}
        version="1.1"
        viewBox="0 0 42.382 26.013" // 新しいSVGのviewBox
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth} // propsで受け取ったstrokeWidthを使用
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        className={className}
        style={style}
        {...rest} // role, aria-label など他のSVG属性を適用
    >
        {/* 元の transform は viewBox の基点調整やアイコン自体の位置調整として機能 */}
        <g id="layer1" transform="translate(-3.81 -11.994)">
            {/* 内側の g 要素のスタイルはルートで指定するため削除 */}
            <g
                id="g8454"
                // fill, stroke, strokeWidthなどのスタイル指定は削除
                transform="translate(-73.588 -18.538)" // この transform はアイコンの描画位置に関するものなので維持
            >
                {/* === path要素 (変更なし) === */}
                <path
                    id="path869"
                    d="M87.304 46.524s-1.41.057-2.089-.105a11.3 11.3 0 0 1-3.655-1.618c-.802-.54-1.205-1.618-2.088-2.01-.4-.178-.914.1-1.306-.092-.34-.167-.806-.33-.705-.692.173-.618 2.241-.726 3.394-.679 1.515.062 2.858 1.31 4.373 1.253.754-.028 2.164.01 2.123-.783-.249-4.725 1.115-10.862 9.69-9.862.903-.943 1.562-.775 2.01-.386.812-.886 1.417-1.076 2.433-.439.626-.981 1.916-.386 2.504.082.59-.472 1.005-.088 1.407.23 8.545-.883 9.682 4.971 10.914 7.843 1.192.102 2.134-.17 2.879-.477.494.149.648.664.47 1.084-3.641 1.698-5.956 2.72-9.269 3.309-1.508.12-3.635-.653-3.635-.653"
                ></path>
                <path
                    id="path4875"
                    d="M87.304 46.524c1.769-.438 2.59-.903 3.26-1.42"
                ></path>
                <path
                    id="path5366"
                    d="m90.283 46.632.282-1.529c1.231-4.343 3.763-7.14 7.221-8.84.686.408 1.439.579 2.402 0 .6.437 1.16.963 2.35.118.58.148.92.672 2.062-.065 2.786-1.263 4.843-.997 5.287 2.65-4.833-1.188-7.665-.022-7.835 2.774-.288 4.488 8.185 6.588 10.78 2.345.682-1.215-1.217-1.122-2.443-.903"
                ></path>
                <path
                    id="path6256"
                    d="M90.283 46.632c-3.248 1.682-4.465 3.65-4.92 5.723-.262 1.125.587 2.126 1.421 2.695 3.12 1.85 6.876 2.398 9.582-1.255 4.292.486 9.698-1.085 11.704-7.366"
                ></path>
                <path
                    id="path6728"
                    d="M87.45 39.045c.793 1.05 1.587 2.117 2.768 2.344"
                ></path>
                <path
                    id="path6730"
                    d="M90.329 33.303c.314 1.917.938 3.446 2.234 4.136"
                ></path>
                <path
                    id="path6732"
                    d="M93.966 31.882c.5 4.544 2.412 3.923 2.437 3.914"
                ></path>
                <path
                    id="path6734"
                    d="M109.694 31.66c-.806.607-1.592 1.243-1.532 3.102"
                ></path>
                <path
                    id="path6736"
                    d="M113.331 33.71c-1.904.222-2.733.997-2.917 2.104"
                ></path>
                <path
                    id="path6738"
                    d="M115.602 37.457c-1.525-.546-3.078-.462-4.652.074"
                ></path>
                <path
                    id="path6740"
                    d="M116.31 39.266c-3.622.393-4.755-.043-6.423-.3.119 1.19-.115 2.272-.783 3.217"
                ></path>
                <path
                    id="path6742"
                    d="M112.279 39.377c.405 1.344.076 1.898-.13 2.585"
                ></path>
                <path
                    id="path6744"
                    d="M114.974 39.377c.32.67.343 1.207.222 1.68"
                ></path>
                <path id="path6746" d="M87.338 52.429c.454.062.884.187 1.2.628"></path>
                <path
                    id="path6748"
                    d="M89.867 53.167c-.07-.143.98-.571 1.182-.369"
                ></path>
                <path
                    id="path7562"
                    d="M98.152 46.432c.063-1.051.876-2.192 2.01-1.644-.38 2.015-1.562 1.882-2.01 1.644"
                ></path>
            </g>
        </g>
    </svg>
);

export default BrandIcon;