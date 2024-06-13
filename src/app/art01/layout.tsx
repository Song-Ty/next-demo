

import Header from '@/app/art01/components/Header';

export default function Art01Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>

    );
}
