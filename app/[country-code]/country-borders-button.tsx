import { CountryButton } from './country-button';
import { fetchCountryData } from './tools/fetch-country-data';
import Link from 'next/link';

type Props = {
    borderCountryCode: string;
};

export const CountryBordersButton = async ({ borderCountryCode }: Props) => {
    const countryBorderCountryData = await fetchCountryData(borderCountryCode);

    return (
        <Link href={`/${countryBorderCountryData.cca3.toLocaleLowerCase()}`}>
            <CountryButton className="shadow-[0px_0px_4px_1px_rgba(0,0,0,0.10)]">
                {countryBorderCountryData.name.common}
            </CountryButton>
        </Link>
    );
};
