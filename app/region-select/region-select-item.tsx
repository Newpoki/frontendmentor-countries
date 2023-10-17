'use client';

import { twMerge } from 'tailwind-merge';
import { CountryRegionOption } from '../types';
import { useCallback } from 'react';

type Props = {
    isSelected?: boolean;
    option: CountryRegionOption;
    onClick: (option: CountryRegionOption) => void;
};

export const RegionSelectItem = ({ isSelected = false, option, onClick }: Props) => {
    const handleClick = useCallback(() => {
        onClick(option);
    }, [onClick, option]);

    return (
        <li
            className={twMerge(
                'px-6 py-1 text-[12px] font-[400] leading-[16px] hover:cursor-pointer hover:bg-grey500/30',
                isSelected && 'bg-grey500/50 hover:bg-grey500/50'
            )}
            // Using onMouseDown instead of onClick because we're closing menu while listening to onBlur
            onMouseDown={handleClick}
        >
            {option.label}
        </li>
    );
};
