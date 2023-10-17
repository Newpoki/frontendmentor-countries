import { REGIONS_OPTIONS } from './constants';

type CountryName = (typeof REGIONS_OPTIONS)[number]['value'];

export type CountryRegionOption = {
    label: string;
    value: CountryName;
};
