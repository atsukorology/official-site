import React from 'react';

interface ImageWithTextProps {
    imageUrl: string;
    text: string;
    textColor?: string;
    shadowColor?: string;
    fontSize?: string;
    letterSpacing?: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({
    imageUrl,
    text,
    textColor = 'white',
    shadowColor = 'black',
    fontSize = '4rem',
    letterSpacing = '0.5em',
}) => {
    return (
        <div className="relative w-full h-full">
            {/* 画像 */}
            <img
                src={imageUrl}
                alt="背景画像"
                className="w-full h-full object-cover"
            />

            {/* テキスト */}
            <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-0.5em text-center w-full">
                <h1 className="font-noto"
                    style={{
                        fontSize: fontSize,
                        fontWeight: 'regular',
                        color: textColor,
                        letterSpacing: letterSpacing,
                        textShadow: `2px 2px 4px ${shadowColor}`,
                        paddingLeft: letterSpacing,
                    }}
                >
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default ImageWithText;