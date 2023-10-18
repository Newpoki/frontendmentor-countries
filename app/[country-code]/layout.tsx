import { LayoutProps } from '@/.next/types/app/page';
import { CountryBackButton } from './country-back-button';

type Props = LayoutProps;

export default function CountryLayout({ children }: Props) {
    return (
        <div className="tablet:p-20 flex flex-1 flex-col items-start overflow-auto px-[28px] pb-16 pt-10">
            <CountryBackButton className="tablet:w-[136px] mb-16 w-[104px]" />
            {children}
        </div>
    );
}
