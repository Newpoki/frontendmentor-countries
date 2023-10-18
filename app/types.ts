import { REGIONS_OPTIONS } from './constants';

export type APIResponse<TData> = { status: number; message: string } | TData;

export type RegionName = (typeof REGIONS_OPTIONS)[number]['value'];

export type CountryRegionOption = {
    label: string;
    value: RegionName;
};

export type CountriesListItem = {
    id: string;
    name: {
        common: string;
        official: string;
    };
    capital: Array<string>;
    region: string;
    flags: {
        svg: string;
        alt?: string;
    };
    population: number;
    cca3: string;
};
