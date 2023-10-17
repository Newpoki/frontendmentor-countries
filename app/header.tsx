'use client';

import QuarterMoon from '@/public/assets/quarter-moon.svg';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export const Header = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const handleToggleTheme = useCallback(() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }, [setTheme, resolvedTheme]);

    return (
        <header className="flex items-center justify-between bg-white px-4 py-[30px] shadow-sm dark:bg-slate500">
            <h1 className="font-extra-bold text-[14px] leading-[20px] desktop:text-[20px] desktop:leading-none">
                Where in the world?
            </h1>
            <button className="flex items-center gap-2" onClick={handleToggleTheme}>
                <QuarterMoon className="h-4 w-4 text-black dark:text-white desktop:h-5 desktop:w-5" />
                <span className="text-[12px] font-semibold leading-none desktop:text-[16px]">
                    Dark Mode
                </span>
            </button>
        </header>
    );
};
