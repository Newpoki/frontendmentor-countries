'use client';

import { twMerge } from 'tailwind-merge';
import { CountryRegionOption } from '../types';
import Link from 'next/link';

type Props = {
    isSelected?: boolean;
    option: CountryRegionOption;
};

export const RegionSelectItem = ({ isSelected = false, option }: Props) => {
    return (
        <li className="w-full">
            <Link
                className={twMerge(
                    'flex px-6 py-1 text-[12px] font-[400] leading-[16px] hover:cursor-pointer hover:bg-grey500/30',
                    isSelected && 'bg-grey500/50 hover:bg-grey500/50'
                )}
                href={{ query: { region: option.value } }}
            >
                {option.label}
            </Link>
        </li>
    );
};
