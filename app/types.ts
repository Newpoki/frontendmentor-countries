import { REGIONS_OPTIONS } from './constants';

export type RegionName = (typeof REGIONS_OPTIONS)[number]['value'];

export type CountryRegionOption = {
    label: string;
    value: RegionName;
};
