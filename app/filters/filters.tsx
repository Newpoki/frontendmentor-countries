import { RegionName } from '../types';
import { RegionSelect } from './region-select/region-select';
import { SearchTextField } from './search-textfield';

type Props = {
    region: RegionName | undefined;
};

export const Filters = ({ region }: Props) => {
    return (
        <section className="tablet:flex-row tablet:justify-between flex flex-col gap-10">
            <SearchTextField className="tablet:w-[400px]" />

            <RegionSelect className="w-[200px]" value={region} />
        </section>
    );
};
