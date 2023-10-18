type Props = {
    label: string;
    value: React.ReactNode;
};

export const CountriesListItemDataItem = ({ label, value }: Props) => {
    return (
        <li>
            <span className="text-[14px] font-semibold leading-[16px]">{label}:&nbsp;</span>
            <span className="text-[14px] font-light leading-[16px]">{value}</span>
        </li>
    );
};
