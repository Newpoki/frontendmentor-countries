import { RegionName } from '../types';
import { RegionSelect } from './region-select/region-select';
import { SearchTextField } from './search-textfield';

type Props = {
    region: RegionName | undefined;
};

export const Filters = ({ region }: Props) => {
    return (
        <section className="flex flex-col gap-10 desktop:flex-row desktop:justify-between">
            <SearchTextField className="desktop:w-[480px]" />

            <RegionSelect className="w-[200px]" value={region} />
        </section>
    );
};
