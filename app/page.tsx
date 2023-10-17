import { RegionSelect } from './region-select/region-select';
import { SearchTextField } from './search-textfield';

export default function Home() {
    return (
        <main className="px-4 py-6">
            <SearchTextField className="mb-10" />

            <RegionSelect />
        </main>
    );
}
