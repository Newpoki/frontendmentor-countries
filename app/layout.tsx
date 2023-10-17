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
            <body
                className={`${nunito.className} bg-grey100 text-black transition-colors dark:bg-slate700 dark:text-white`}
            >
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
