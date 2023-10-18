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
                'flex items-center justify-center gap-2 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.29)] desktop:rounded-[6px] desktop:px-[8] desktop:py-[10px] desktop:text-base',
                className
            )}
            onClick={handleClick}
        >
            <Arrow className="w-[18px]" />
            <span>Back</span>
        </CountryButton>
    );
};
