import Link from "next/link";

const Header = () => {
    return (
        <div className="w-full z-10 text-white absolute">
            <nav className="container mx-auto relative p-8 flex flex-wrap justify-between items-center">
                <Link href="/art01" className="text-3xl font-semibold">Home</Link>
                <div className="space-x-7 text-xl">
                    <Link href="/art01/performance">Performance</Link>
                    <Link href="/art01/reliability">Reliability</Link>
                    <Link href="/art01/scale">Scale</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
