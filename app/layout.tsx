import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Header } from './header';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Where in the world?',
    description: 'Learn more about countries !',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${nunito.className} text-black`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
