import QuarterMoon from '@/public/assets/quarter-moon.svg';

export const Header = () => {
    return (
        <header className="flex items-center justify-between px-4 py-[30px] shadow-sm">
            <h1 className="font-extra-bold text-[14px] leading-[20px] desktop:text-[20px] desktop:leading-none">
                Where in the world
            </h1>
            <button className="flex items-center gap-2">
                <QuarterMoon className="h-4 w-4 text-black desktop:h-5 desktop:w-5" />
                <span className="text-[12px] font-semibold leading-none desktop:text-[16px]">
                    Dark Mode
                </span>
            </button>
        </header>
    );
};
