import Image from 'next/image';
import { CountriesListItem as ICountriesListItem } from '../types';
import { CountriesListItemDataItem } from './countries-list-item-data-item';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

type Props = {
    className?: string;
    country: ICountriesListItem;
    index: number;
};

export const CountriesListItem = ({ className, country, index }: Props) => {
    return (
        <li
            key={country.cca3}
            className={twMerge(
                'rounded-[5px] bg-white shadow-shadow transition-opacity hover:opacity-50 dark:bg-slate500',
                className
            )}
        >
            <Link href={`/${country.cca3.toLocaleLowerCase()}`}>
                <div className="relative flex h-auto min-h-[160px] w-[267px]">
                    <Image
                        src={country.flags.svg}
                        fill
                        priority={index === 0}
                        style={{ objectFit: 'cover' }}
                        alt={country.flags.alt ?? `${country.name.official} flag`}
                    />
                </div>

                <section className="p-6 desktop:px-6 desktop:pb-[46px] desktop:pt-6">
                    <h3 className="mb-4 text-[18px] font-extra-bold leading-[26px]">
                        {country.name.common}
                    </h3>

                    <ul className="flex flex-col gap-2">
                        <CountriesListItemDataItem label="Population" value={country.population} />
                        <CountriesListItemDataItem label="Region" value={country.region} />
                        <CountriesListItemDataItem label="Capital" value={country.capital} />
                    </ul>
                </section>
            </Link>
        </li>
    );
};
