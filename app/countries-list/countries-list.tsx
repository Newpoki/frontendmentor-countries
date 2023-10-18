import { COUNTRIES_LIST_FIELDS } from '../constants';
import { CountriesListItem as ICountriesListItem, RegionName } from '../types';
import { CountriesListItem } from './countries-list-item';

type Props = {
    region: RegionName | undefined;
    search: string | undefined;
};

const fetchCountries = async (region: RegionName | undefined, search?: string) => {
    const fields = Object.values(COUNTRIES_LIST_FIELDS).join(',');

    const response: Array<ICountriesListItem> = await fetch(
        `https://restcountries.com/v3.1/all?fields=${fields}`
    ).then((data) => data.json());

    return response;
};

export const CountriesList = async ({ region, search }: Props) => {
    const countries = await fetchCountries(region, search);

    return (
        <ul>
            {countries.map((country) => {
                return <CountriesListItem key={country.cca2} country={country} />;
            })}
        </ul>
    );
};
