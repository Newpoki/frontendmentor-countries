import { CountryButton } from './country-button';
import { fetchCountryData } from './tools/fetch-country-data';
import Link from 'next/link';

type Props = {
    borderCountryCode: string;
};

export const CountryBordersButton = async ({ borderCountryCode }: Props) => {
    const countryBorderCountryData = await fetchCountryData(borderCountryCode);

    return (
        <CountryButton className="shadow-[0px_0px_4px_1px_rgba(0,0,0,0.10)]">
            <Link href={`/${countryBorderCountryData.cca3}`}>
                {countryBorderCountryData.name.common}
            </Link>
        </CountryButton>
    );
};
