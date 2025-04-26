import React from 'react';

interface InfoPanelProps {
    icon: React.ReactNode; // アイコンは ReactNode として渡す
    title: string;
    content: React.ReactNode;
    borderColor?: string;
    backgroundColor?: string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({
    icon,
    title,
    content,
    backgroundColor = 'white',
}) => {
    return (
        <div className={`flex items-center p-4 rounded-md bg-${backgroundColor}`}>
            {/* アイコン */}
            <div className="mr-10 flex-shrink-0">
                {icon}
            </div>

            {/* テキストコンテンツ */}
            <div>
                {/* タイトル */}
                <h2 className="text-lg font-semibold mb-1">{title}</h2>
                {/* コンテンツ */}
                <div className="text-gray-500 font-normal">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default InfoPanel;