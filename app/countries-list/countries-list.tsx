import Image from 'next/image';
import { COUNTRIES_LIST_FIELDS } from '../constants';
import { CountriesListItem, RegionName } from '../types';

type Props = {
    region: RegionName | undefined;
    search: string | undefined;
};

const fetchCountries = async (region: RegionName | undefined, search?: string) => {
    const fields = Object.values(COUNTRIES_LIST_FIELDS).join(',');

    const response: Array<CountriesListItem> = await fetch(
        `https://restcountries.com/v3.1/all?fields=${fields}`
    ).then((data) => data.json());

    return response;
};

export const CountriesList = async ({ region, search }: Props) => {
    const countries = await fetchCountries(region, search);

    return (
        <ul>
            {countries.map((country) => {
                return (
                    <li key={country.cca2}>
                        <div>
                            <Image
                                src={country.flags.svg}
                                width={267}
                                height={160}
                                alt={country.flags.alt ?? `${country.name.official} flag`}
                            />
                        </div>
                        <h3>{country.name.common}</h3>
                        <div>
                            <span>Population:</span>
                            <span>{country.population}</span>
                        </div>
                        <div>
                            <span>Region:</span>
                            <span>{country.region}</span>
                        </div>
                        <div>
                            <span>Capital</span>
                            <span>{country.capital}</span>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
