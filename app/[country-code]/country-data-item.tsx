type Props = {
    label: string;
    value: React.ReactNode;
};

export const CountryDataItem = ({ label, value }: Props) => {
    return (
        <li className="text-[14px] leading-[32px]">
            <span className="font-semibold">{label}:&nbsp;</span>
            <span className="font-light">{value}</span>
        </li>
    );
};
