import Search from '@/public/assets/search.svg';

export const SearchTextField = () => {
    return (
        <label className="flex items-center gap-[26px] rounded-[5px] bg-white px-8 py-[14px] shadow-md dark:bg-slate500 desktop:gap-[24px] desktop:py-[19px]">
            <Search className="w-4 text-grey700 dark:text-white desktop:w-[18px]" />
            <input
                placeholder="Search for a country"
                className="dark:placeholder-text-white bg-transparent text-[12px] font-[400] leading-[20px] outline-none placeholder:text-grey500 dark:text-white desktop:text-[14px]"
            />
        </label>
    );
};
