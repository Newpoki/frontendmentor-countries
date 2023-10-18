import { twMerge } from 'tailwind-merge';

type Props = {
    className?: string;
};

export const Skeleton = ({ className }: Props) => {
    return <div className={twMerge('h-4 w-full animate-pulse rounded-sm bg-grey500', className)} />;
};
