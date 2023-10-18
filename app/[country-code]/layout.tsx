import { LayoutProps } from '@/.next/types/app/page';
import { CountryBackButton } from './country-back-button';

type Props = LayoutProps;

export default function CountryLayout({ children }: Props) {
    return (
        <div className="flex flex-1 flex-col items-start px-[28px] pb-16 pt-10 tablet:p-20">
            <CountryBackButton className="mb-16 w-[104px] tablet:w-[136px]" />
            {children}
        </div>
    );
}
