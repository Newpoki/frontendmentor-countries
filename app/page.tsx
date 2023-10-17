import { redirect } from 'next/navigation';
import { Filters } from './filters/filters';
import { getIsValidRegionName } from './tools/get-is-valid-region-name';

type Props = {
    searchParams: {
        region?: string;
    };
};

export default function Home({ searchParams }: Props) {
    const { region } = searchParams;

    if (region != null && !getIsValidRegionName(region)) {
        redirect('/');
    }

    return (
        <main className="px-4 py-6 desktop:px-20 desktop:py-12">
            <Filters region={region} />
        </main>
    );
}
