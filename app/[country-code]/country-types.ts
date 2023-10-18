export type Country = {
    name: {
        common: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
        official: string;
    };
    population: number;
    region: string;
    subregion: string;
    capital: Array<string>;
    tld: Array<string>;
    currencies: {
        [currencyCode: string]: {
            name: string;
            symbol: string;
        };
    };
    languages: {
        [languageCode: string]: string;
    };
    borders: Array<string>;
    flags: {
        svg: string;
        alt?: string;
    };
    cca3: string;
};
