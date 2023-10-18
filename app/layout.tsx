import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Header } from './header';
import { Providers } from './providers';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Where in the world?',
    description: 'Learn more about countries !',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            // https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <body
                className={`${nunito.className} flex h-[100dvh] flex-col overflow-hidden bg-grey100 text-black  dark:bg-slate700 dark:text-white`}
            >
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
