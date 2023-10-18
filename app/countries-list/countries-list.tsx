import { API_BASE_URL, COUNTRIES_LIST_FIELDS } from '../constants';
import { APIResponse, CountriesListItem as ICountriesListItem, RegionName } from '../types';
import { CountriesListItem } from './countries-list-item';

type Props = {
    region: RegionName | undefined;
    search: string | undefined;
};

const getAPIUrl = (region: RegionName | undefined, search: string | undefined) => {
    const fields = Object.values(COUNTRIES_LIST_FIELDS).join(',');
    const fieldsSuffix = `?fields=${fields}`;

    if (region != null) {
        return `${API_BASE_URL}/region/${region}${fieldsSuffix}`;
    }

    if (search != null && search !== '') {
        return `${API_BASE_URL}/name/${search}${fieldsSuffix}`;
    }

    return `${API_BASE_URL}/all${fieldsSuffix}`;
};

const fetchCountries = async (region: RegionName | undefined, search?: string) => {
    const apiURL = getAPIUrl(region, search);

    const response: APIResponse<ICountriesListItem[]> = await fetch(apiURL).then((data) =>
        data.json()
    );

    // If there is anything else than data, we return an empty array
    if ('status' in response) {
        return [];
    }

    const sortedCountries = response.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common, 'en', { sensitivity: 'base' });
    });

    // As the REST Countries API doesn't expose a way to search by countries and also by name
    // if both params are present, we have to filter on our side
    if (region != null && search != null && search !== '') {
        const filteredCountries = sortedCountries.filter((country) => {
            return country.name.common.toLocaleLowerCase().includes(search);
        });

        return filteredCountries;
    }

    return sortedCountries;
};

export const CountriesList = async ({ region, search }: Props) => {
    const countries = await fetchCountries(region, search);

    if (countries.length === 0) {
        return <div>We found no country matching your filters.</div>;
    }

    return (
        <ul className="flex flex-wrap justify-center gap-x-[65px] gap-y-[74px]">
            {countries.map((country, index) => {
                return (
                    <CountriesListItem
                        className="w-[267px]"
                        key={country.cca3}
                        country={country}
                        index={index}
                    />
                );
            })}
        </ul>
    );
};
