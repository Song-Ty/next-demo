
'use client'

import Link  from 'next/link'
import React from "react";
import { usePathname,useRouter} from 'next/navigation'
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

type LinkItem =  {
    name: string;
    href:string;
    icon?:string;
}
interface NavLinksProps {
    links:LinkItem[]
}

type MyFunctionType = (item:LinkItem) => void;


export default function Header (props:NavLinksProps) {
    const pathname:string = usePathname()
    const router:AppRouterInstance = useRouter()

    const fun:MyFunctionType = (val:LinkItem) => {
        console.log("%c🍍🍍🍍[ val ] >>>","background:pink;color: red; font-weight: bold;",val);
        console.log("%c🍍🍍🍍[ router ] >>>","background:pink;color: red; font-weight: bold;",router);
        router.push(val.href,{scroll: true})
    }

    return (

        <>
            <div className={'flex flex-col gap-3 my-3 px-3'}>
                {props.links.map((link:LinkItem) => {
                    const LinkIcon = link.icon;
                    return (
                        // <Link
                        //     key={link.name}
                        //     href={link.href}
                        //     className={`flex h-[48px] grow items-center justify-center gap-2
                        //     rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600
                        //     md:flex-none md:justify-start md:p-2 md:px-3
                        //     ${pathname===link.href ? 'bg-sky-100 text-blue-600' : 'bg-gray-50 text-gray-600'}`}
                        //     onClick={()=>fun(link)}
                        // >
                        //     <p className="hidden md:block" >{link.name}</p>
                        // </Link>
                        <div
                            key={link.name}
                            className={`flex h-[48px] grow items-center justify-center gap-2 
                            rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 
                            md:flex-none md:justify-start md:p-2 md:px-3 
                            ${pathname===link.href ? 'bg-sky-100 text-blue-600' : 'bg-gray-50 text-gray-600'}`}
                            onClick={()=>fun(link)}
                        >
                            <p className="hidden md:block" >{link.name}</p>
                        </div>
                    );
                })}
             </div>
        </>
    )
}
