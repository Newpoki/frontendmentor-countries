import { redirect } from 'next/navigation';
import { Filters } from './filters/filters';
import { getIsValidRegionName } from './tools/get-is-valid-region-name';
import { CountriesList } from './countries-list/countries-list';

type Props = {
    searchParams: {
        region?: string;
        search?: string;
    };
};

export default function Home({ searchParams }: Props) {
    const { region, search } = searchParams;

    if (region != null && !getIsValidRegionName(region)) {
        redirect('/');
    }

    return (
        <main className="flex flex-1 flex-col gap-8 overflow-y-auto px-4 py-6 desktop:gap-12 desktop:px-20 desktop:py-12">
            <Filters region={region} />

            <CountriesList region={region} search={search} />
        </main>
    );
}
