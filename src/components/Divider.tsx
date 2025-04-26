import React from 'react';

interface DividerProps {
    color?: string;
    thickness?: string;
    marginVertical?: number;
    marginHorizontal?: number;
}

const Divider: React.FC<DividerProps> = ({
    color = 'white',
    thickness = '1px',
    marginVertical = 10,
    marginHorizontal = 10
}) => {
    return (
        <div className={`h-${thickness} bg-${color} mt-${marginVertical} mb-${marginVertical} ml-${marginHorizontal} mr-${marginHorizontal}`} style={{ height: thickness, backgroundColor: color }}></div>
    );
};

export default Divider;