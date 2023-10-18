import { COUNTRIES_LIST_FIELDS } from '../constants';
import { CountriesListItem as ICountriesListItem, RegionName } from '../types';
import { CountriesListItem } from './countries-list-item';

type Props = {
    region: RegionName | undefined;
    search: string | undefined;
};

const fetchCountries = async (region: RegionName | undefined, search?: string) => {
    const fields = Object.values(COUNTRIES_LIST_FIELDS).join(',');

    const countries: Array<ICountriesListItem> = await fetch(
        `https://restcountries.com/v3.1/all?fields=${fields}`
    ).then((data) => data.json());

    const sortedCountries = countries.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common, 'en', { sensitivity: 'base' });
    });

    return sortedCountries;
};

export const CountriesList = async ({ region, search }: Props) => {
    const countries = await fetchCountries(region, search);

    return (
        <ul className="flex flex-wrap gap-x-[65px] gap-y-[74px]">
            {countries.map((country, index) => {
                return <CountriesListItem key={country.cca2} country={country} index={index} />;
            })}
        </ul>
    );
};
