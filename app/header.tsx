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
        <header className="flex items-center justify-between bg-white px-4 py-[30px] shadow-sm dark:bg-slate500">
            <Link href="/">
                <h1 className="tablet:text-[20px] tablet:leading-none text-[14px] font-extra-bold leading-[20px]">
                    Where in the world?
                </h1>
            </Link>
            <button className="flex items-center gap-2" onClick={handleToggleTheme}>
                <QuarterMoon className="tablet:h-5 tablet:w-5 h-4 w-4 text-black dark:text-white" />
                <span className="tablet:text-[16px] text-[12px] font-semibold leading-none">
                    Dark Mode
                </span>
            </button>
        </header>
    );
};
