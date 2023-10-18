import { REGIONS_OPTIONS } from './constants';

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
    region: RegionName;
    flags: {
        svg: string;
        alt?: string;
    };
    population: number;
    cca2: string;
};
