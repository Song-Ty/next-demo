

import Header from "@/app/dashboard/components/Header/Header";

type LinkItem = {
    name: string;
    href:string;
    icon?:string;
}


const links:LinkItem[] = [
    { name: 'DashboardPage', href: '/dashboard', icon: '' },
    { name: 'CustomersPage', href: '/dashboard/customers', icon: '' },
    { name: 'InvoicesPage', href: '/dashboard/invoices', icon: '' },
];
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <Header links={links}/>
            </div>
            <div className="flex-grow p-6 ">{children}</div>
        </div>
    );
}
