import { twMerge } from 'tailwind-merge';

type Props = React.HTMLAttributes<HTMLButtonElement>;

export const CountryButton = ({ className, ...others }: Props) => {
    return (
        <button
            {...others}
            className={twMerge(
                'rounded-[2px] bg-white px-[15px] py-[6px] text-[14px] font-light leading-[20px] transition-colors hover:bg-grey500/50 dark:bg-slate500 dark:hover:bg-grey500/50 ',

                className
            )}
        />
    );
};
