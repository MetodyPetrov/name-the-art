'use client';

import Link from "next/link";
import { LinkInfo, navigation } from "./Navigation";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    link: LinkInfo,
    index: number,
    children: string,
    props?: any
}

export default function NavLink({ link, index, children, ...props }:  NavLinkProps) {
    const path = usePathname();

    let rounding: string;
    if(index === 0) rounding = 'rounded-tr-md rounded-br-md';
    else if(index === navigation.length - 1) rounding = 'rounded-tl-md rounded-bl-md';
    else rounding = 'rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md';
    
    const linkState = path.startsWith(link.to) ? link.color : link.hover;
    return (
        <Link 
            href={link.to}
            style={{ transition: 'all 0.4s' }}
            className={`${linkState} ${rounding} p-5 font-bold text-5xl`} {...props}>
            {children}
        </Link>
    );
}