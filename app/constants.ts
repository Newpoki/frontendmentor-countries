export const REGIONS_OPTIONS = [
    { label: 'Africa', value: 'africa' },
    { label: 'America', value: 'america' },
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'Oceania', value: 'oceania' },
] as const;

export const COUNTRIES_LIST_FIELDS = {
    NAME: 'name',
    POPULATION: 'population',
    REGION: 'region',
    CAPITAL: 'capital',
    FLAGS: 'flags',
    ID: 'id',
    ALT: 'alt',
    CCA2: 'cca2',
} as const;
