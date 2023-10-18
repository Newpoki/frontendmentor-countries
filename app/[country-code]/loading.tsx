import { Skeleton } from '../skeleton';

export default function CountryLoading() {
    return (
        <main className="tablet:gap-15 relative flex w-full flex-col desktop:grid desktop:grid-cols-2 desktop:items-center desktop:gap-[144px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Skeleton className="mb-10 aspect-[16/9] h-auto animate-pulse rounded-[6px] desktop:mb-0" />

            <section className="flex flex-col gap-8">
                <Skeleton className="tablet:text-[32px] mb-4 w-[150px] text-[22px] font-extra-bold leading-none" />

                <div className="tablet:flex-row tablet:justify-between flex flex-col gap-8">
                    <ul className="flex flex-col gap-4">
                        <Skeleton className="w-[150px]" />
                        <Skeleton className="w-[150px]" />
                        <Skeleton className="w-[150px]" />
                        <Skeleton className="w-[150px]" />
                        <Skeleton className="w-[150px]" />
                    </ul>

                    <ul className="flex flex-col gap-4">
                        <Skeleton className="w-[150px]" />
                        <Skeleton className="w-[150px]" />
                        <Skeleton className="w-[150px]" />
                    </ul>
                </div>

                <nav className="tablet:flex-row tablet:items-baseline flex flex-col gap-4">
                    <Skeleton className="w-[150px]" />

                    <ul className="flex flex-wrap gap-[10px]">
                        <Skeleton className="w-12" />
                        <Skeleton className="w-12" />
                        <Skeleton className="w-12" />
                    </ul>
                </nav>
            </section>
        </main>
    );
}
