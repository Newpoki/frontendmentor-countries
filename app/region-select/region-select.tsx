'use client';

import Chevron from '@/public/assets/chevron.svg';
import { RegionSelectItem } from './region-select-item';
import { useCallback, useState } from 'react';
import { CountryRegionOption } from '../types';
import { twMerge } from 'tailwind-merge';

const REGIONS_OPTIONS = [
    { label: 'Africa', value: 'africa' },
    { label: 'America', value: 'america' },
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'Oceania', value: 'oceania' },
] as const;

export const RegionSelect = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleIsOpen = useCallback(() => {
        setIsOpen((currentValue) => !currentValue);
    }, []);

    const handleCloseMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleChangeOption = useCallback((selectedOption: CountryRegionOption) => {
        // TODO: Should add countryRegion search parameters in url
        // So we can check url to determine which value is selected
        console.log(selectedOption);
    }, []);

    return (
        <div className="relative w-[200px]">
            <button
                className="flex w-full items-center justify-between rounded-[5px] bg-white py-[14px] pl-6 pr-[19px] shadow-md dark:bg-slate500"
                onClick={handleToggleIsOpen}
                onBlur={handleCloseMenu}
            >
                <span className="text-[12px] font-[400] leading-[20px]">Filter by Region</span>
                <Chevron
                    className={twMerge(
                        'w-[10px] text-black transition-transform dark:text-white',
                        isOpen && 'rotate-180'
                    )}
                />
            </button>

            <menu
                className={twMerge(
                    'absolute w-full translate-y-1 scale-0 rounded-[5px] bg-white pb-3 pt-4 shadow-md transition-transform dark:bg-slate500',
                    isOpen && 'block scale-100'
                )}
            >
                {REGIONS_OPTIONS.map((regionOption) => {
                    return (
                        <RegionSelectItem
                            key={regionOption.value}
                            option={regionOption}
                            onClick={handleChangeOption}
                        />
                    );
                })}
            </menu>
        </div>
    );
};
