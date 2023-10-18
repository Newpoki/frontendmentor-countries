'use client';

import Arrow from '@/public/assets/arrow.svg';
import { CountryButton } from './country-button';
import { twMerge } from 'tailwind-merge';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

type Props = React.HTMLAttributes<HTMLButtonElement>;

export const CountryBackButton = ({ className }: Props) => {
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <CountryButton
            className={twMerge(
                'tablet:rounded-[6px] tablet:px-[8] tablet:py-[10px] tablet:text-base flex items-center justify-center gap-2 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.29)]',
                className
            )}
            onClick={handleClick}
        >
            <Arrow className="w-[18px]" />
            <span>Back</span>
        </CountryButton>
    );
};
