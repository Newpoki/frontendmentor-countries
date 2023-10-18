import { notFound } from 'next/navigation';
import { API_BASE_URL } from '../constants';
import { APIResponse } from '../types';
import { COUNTRY_FIELDS } from './country-constants';
import { Country as ICountry } from './country-types';
import { CountryDataItem } from './country-data-item';
import { CountryButton } from './country-button';
import { CountryBackButton } from './country-back-button';

type Props = {
    params: {
        'country-code': string;
    };
};

const fetchCountryData = async (countryCode: string) => {
    const fields = Object.values(COUNTRY_FIELDS).join(',');
    const fieldsSuffix = `&fields=${fields}`;

    const response = await fetch(`${API_BASE_URL}/alpha?codes=${countryCode}${fieldsSuffix}`);
    const data: APIResponse<ICountry[]> = await response.json();

    // If there is anything else than data, we return an empty array
    if (!Array.isArray(data) || data.length === 0) {
        notFound();
    }

    return data[0];
};

export default async function Country({ params }: Props) {
    const country = await fetchCountryData(params['country-code']);

    const displayedNativeName = Object.values(country.name.nativeName)?.[0].common ?? undefined;
    const displayedCurrencies = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(', ');
    const displayedLanguages = Object.values(country.languages).join(', ');

    return (
        <main className="flex flex-1 flex-col items-start overflow-auto px-[28px] pb-16 pt-10 desktop:p-20">
            <CountryBackButton className="mb-16 w-[104px] desktop:w-[136px]" />

            <div className="relative flex w-full flex-1 flex-col desktop:grid desktop:grid-cols-2 desktop:gap-[144px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="mb-10 rounded-[6px]"
                    src={country.flags.svg}
                    alt={country.flags.alt ?? `${country.name.official} flag`}
                />

                <section className="flex flex-col gap-8">
                    <h1 className="mb-4 text-[22px] font-extra-bold leading-none desktop:text-[32px]">
                        {country.name.common}
                    </h1>

                    <div className="flex flex-col gap-8 desktop:flex-row desktop:justify-between">
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
                            <CountryDataItem
                                label="Top Level Domain"
                                value={country.tld.join(', ')}
                            />
                            <CountryDataItem label="Currencies" value={displayedCurrencies} />
                            <CountryDataItem label="Languages" value={displayedLanguages} />
                        </ul>
                    </div>

                    <nav className="flex flex-col gap-4 desktop:flex-row desktop:items-center">
                        <h3 className="whitespace-nowrap text-base font-semibold">
                            Border Countries:
                        </h3>
                        {country.borders.length > 0 ? (
                            <ul className="flex flex-wrap gap-[10px]">
                                {country.borders.map((border) => {
                                    return (
                                        <CountryButton
                                            className="shadow-[0px_0px_4px_1px_rgba(0,0,0,0.10)]"
                                            key={border}
                                        >
                                            {border}
                                        </CountryButton>
                                    );
                                })}
                            </ul>
                        ) : (
                            <span className="text-[13px] font-light">
                                This country shares no borders with any other countries
                            </span>
                        )}
                    </nav>
                </section>
            </div>
        </main>
    );
}
