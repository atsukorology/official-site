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
        <div>
            {/* タイトル */}
            <h2 className="text-lg font-semibold mb-1 pt-2">{title}</h2>
            <div className={`flex items-center justify-between pb-4 rounded-md bg-${backgroundColor}`}>
                {/* テキストコンテンツ */}
                <div className="flex-grow">
                    {/* コンテンツ */}
                    <div className="text-gray-500 font-normal">
                        {content}
                    </div>
                </div>

                {/* アイコン */}
                <div className="ml-8 flex-shrink-0">
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default InfoPanel;