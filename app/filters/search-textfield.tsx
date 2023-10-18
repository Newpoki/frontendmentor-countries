'use client';

import Search from '@/public/assets/search.svg';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import debounce from 'lodash.debounce';

type Props = {
    className?: string;
};

export const SearchTextField = ({ className }: Props) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const initialSearch = searchParams.get('search') ?? '';

    const handleUpdateSearchParam = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const params = new URLSearchParams(searchParams);

            const { value } = event.target;

            if (value === '') {
                params.delete('search');
            } else {
                params.set('search', event.target.value);
            }

            router.push(`${pathname}?${params}`);
        },
        [pathname, router, searchParams]
    );

    const debounceUpdateSearchParam = debounce(handleUpdateSearchParam, 300);

    return (
        <label
            className={twMerge(
                'flex cursor-text items-center gap-[26px] rounded-[5px] bg-white px-8 py-[14px] shadow-md  dark:bg-slate500 desktop:gap-[24px] desktop:py-[19px]',
                className
            )}
        >
            <Search className="w-4 text-grey700 dark:text-white desktop:w-[18px]" />
            <input
                placeholder="Search for a country"
                className="dark:placeholder-text-white bg-transparent text-[12px] font-[400] leading-[20px] outline-none placeholder:text-grey500 dark:text-white desktop:text-[14px]"
                onChange={debounceUpdateSearchParam}
                defaultValue={initialSearch}
            />
        </label>
    );
};
