'use client';

import QuarterMoon from '@/public/assets/quarter-moon.svg';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useCallback } from 'react';

export const Header = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const handleToggleTheme = useCallback(() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }, [setTheme, resolvedTheme]);

    return (
        <header className="sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-[30px] shadow-sm dark:bg-slate500 desktop:px-20 desktop:py-[26px]">
            <Link href="/">
                <h1 className="text-[14px] font-extra-bold leading-[20px] tablet:text-[24px] tablet:leading-none">
                    Where in the world?
                </h1>
            </Link>
            <button className="flex items-center gap-2" onClick={handleToggleTheme}>
                <QuarterMoon className="h-4 w-4 text-black dark:text-white tablet:h-5 tablet:w-5" />
                <span className="text-[12px] font-semibold leading-none tablet:text-[16px]">
                    Dark Mode
                </span>
            </button>
        </header>
    );
};
