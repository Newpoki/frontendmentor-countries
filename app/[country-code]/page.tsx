import { CountryDataItem } from './country-data-item';
import { CountryBordersButton } from './country-borders-button';
import { fetchCountryData } from './tools/fetch-country-data';
import { Metadata } from 'next';
import { COUNTRY_FIELDS } from './country-constants';
import { API_BASE_URL } from '../constants';
import { APIResponse } from '../types';

type Props = {
    params: {
        'country-code': string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const country = await fetchCountryData(params['country-code']);

    const displayedCountryName = country.name.common;

    return {
        title: displayedCountryName,
        description: `Learn more about ${displayedCountryName}!`,
    };
}

export async function generateStaticParams(): Promise<Props['params'][]> {
    const fieldsSuffix = `&fields=${COUNTRY_FIELDS.CCA3}`;

    const response = await fetch(`${API_BASE_URL}/all${fieldsSuffix}`);
    const data: APIResponse<{ cca3: string }[]> = await response.json();

    // If there is anything else than data, we return an empty array
    if (!Array.isArray(data)) {
        return [];
    }

    return data.map(({ cca3 }) => {
        return { 'country-code': cca3 };
    });
}

export default async function Country({ params }: Props) {
    const country = await fetchCountryData(params['country-code']);

    const displayedNativeName = Object.values(country.name.nativeName)?.[0].common ?? undefined;
    const displayedCurrencies = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(', ');
    const displayedLanguages = Object.values(country.languages).join(', ');

    return (
        <main className="tablet:gap-15 relative flex w-full flex-col desktop:grid desktop:grid-cols-2 desktop:items-center desktop:gap-[144px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="mb-10 rounded-[6px] desktop:mb-0"
                src={country.flags.svg}
                alt={country.flags.alt ?? `${country.name.official} flag`}
            />

            <section className="flex flex-col gap-8">
                <h1 className="tablet:text-[32px] mb-4 text-[22px] font-extra-bold leading-none">
                    {country.name.common}
                </h1>

                <div className="tablet:flex-row tablet:justify-between flex flex-col gap-8">
                    <ul>
                        {displayedNativeName != null && (
                            <CountryDataItem label="Native Name" value={displayedNativeName} />
                        )}

                        <CountryDataItem label="Population" value={country.population} />
                        <CountryDataItem label="Region" value={country.region} />
                        <CountryDataItem label="Sub Region" value={country.subregion} />
                        <CountryDataItem label="Capital" value={country.capital.join(', ')} />
                    </ul>

                    <ul>
                        <CountryDataItem label="Top Level Domain" value={country.tld.join(', ')} />
                        <CountryDataItem label="Currencies" value={displayedCurrencies} />
                        <CountryDataItem label="Languages" value={displayedLanguages} />
                    </ul>
                </div>

                <nav className="tablet:flex-row tablet:items-baseline flex flex-col gap-4">
                    <h3 className="whitespace-nowrap text-base font-semibold">Border Countries:</h3>

                    <ul className="flex flex-wrap gap-[10px]">
                        {country.borders.map((borderCountryCode) => {
                            return (
                                <CountryBordersButton
                                    key={borderCountryCode}
                                    borderCountryCode={borderCountryCode}
                                />
                            );
                        })}
                    </ul>
                </nav>
            </section>
        </main>
    );
}
