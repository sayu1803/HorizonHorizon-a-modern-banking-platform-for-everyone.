'use client'

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SidebarProps {
    user: any; // Define user type as needed
}

const Sidebar = ({ user }: SidebarProps) => {
    const pathname = usePathname();

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon Logo"
                        className="w-[24px] max-xl:w-12 flex"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn('sidebar-link', { 'bg-bank-gradient': isActive }, { 'active': isActive })} // Add 'active' class if the link is active
                        >
                            <div className='relative size-6'>
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                />

                            </div>
                            <p className={cn('sidebar-label', { '!text-white': isActive })}>
                                {item.label}
                            </p>

                        </Link>
                    );
                })}
            

                USER
            </nav>

            FOOTER
        </section>
    );
};

export default Sidebar;
