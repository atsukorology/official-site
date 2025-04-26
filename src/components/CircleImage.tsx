import React from 'react';

interface CircleImageProps {
    imageUrl: string;
    size?: string; // サイズ指定を Tailwind CSS のクラス名で指定
    alt?: string;
}

const CircleImage: React.FC<CircleImageProps> = ({
    imageUrl,
    size = 'w-32 h-32', // デフォルトのサイズ (幅と高さ)
    alt = '円形画像',
}) => {
    return (
        <div className={`overflow-hidden rounded-full ${size}`}>
            <img
                src={imageUrl}
                alt={alt}
                className="object-cover w-full h-full"
            />
        </div>
    );
};

export default CircleImage;