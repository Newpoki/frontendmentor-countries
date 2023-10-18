'use client';

import Chevron from '@/public/assets/chevron.svg';
import Close from '@/public/assets/close.svg';
import { RegionSelectItem } from './region-select-item';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { RegionName } from '@/app/types';
import { REGIONS_OPTIONS } from '@/app/constants';
import { useRouter } from 'next/navigation';

type Props = {
    className?: string;
    value: RegionName | undefined;
};

export const RegionSelect = ({ className, value }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const rootRef = useRef<HTMLDivElement>(null);

    const selectedOption = useMemo(() => {
        return REGIONS_OPTIONS.find((option) => option.value === value);
    }, [value]);

    const handleToggleIsOpen = useCallback(() => {
        setIsOpen((currentValue) => !currentValue);
    }, []);

    const handleDeleteSelectedOption = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            // Stopping propagation, otherwise it also click on the main button
            // and call the toggle is open callback
            event.stopPropagation();

            setIsOpen(false);

            router.push('/');
        },
        [router]
    );

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (rootRef.current == null || rootRef.current.contains(event.target as Node)) {
            return;
        }

        setIsOpen(false);
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className={twMerge('relative', className)} ref={rootRef}>
            <button
                className="flex w-full items-center justify-between rounded-[5px] bg-white py-[14px] pl-6 pr-[19px] shadow-md dark:bg-slate500 desktop:py-[18px] desktop:text-[14px]"
                onClick={handleToggleIsOpen}
            >
                <span className="text-[12px] font-[400] leading-[20px]">
                    {selectedOption?.label ?? 'Filter by Region'}
                </span>

                <div className="flex items-center gap-1.5">
                    {selectedOption != null && (
                        <Close
                            className="w-[10px] desktop:w-[12px]"
                            onClick={handleDeleteSelectedOption}
                        />
                    )}

                    <Chevron
                        className={twMerge(
                            'w-[10px] transition-transform desktop:w-[12px]',
                            isOpen && 'rotate-180'
                        )}
                    />
                </div>
            </button>

            <menu
                className={twMerge(
                    'absolute z-10 w-full translate-y-1 scale-0 rounded-[5px] bg-white pb-3 pt-4 shadow-md transition-transform dark:bg-slate500',
                    isOpen && 'block scale-100'
                )}
                onClick={handleToggleIsOpen}
            >
                {REGIONS_OPTIONS.map((regionOption) => {
                    return (
                        <RegionSelectItem
                            key={regionOption.value}
                            option={regionOption}
                            isSelected={selectedOption?.value === regionOption.value}
                        />
                    );
                })}
            </menu>
        </div>
    );
};
