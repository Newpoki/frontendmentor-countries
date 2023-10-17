import { REGIONS_OPTIONS } from '../constants';
import { RegionName } from '../types';

export const getIsValidRegionName = (value: string): value is RegionName => {
    return REGIONS_OPTIONS.some((regionOption) => regionOption.value === value);
};
