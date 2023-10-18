import 'server-only';

import { COUNTRY_FIELDS } from '../country-constants';
import { APIResponse } from '@/app/types';
import { API_BASE_URL } from '@/app/constants';
import { Country as ICountry } from '../country-types';
import { notFound } from 'next/navigation';

export const fetchCountryData = async (countryCode: string) => {
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
