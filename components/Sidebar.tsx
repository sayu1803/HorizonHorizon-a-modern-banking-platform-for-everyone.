import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SidebarProps {
  user: any; // Define user type as needed
}

const Sidebar = ({ user }: SidebarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/"  className="mb-12 cursor-pointer items-center gap-2">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Logo"
            />
        
        </Link>
      </nav>
    </section>
  );
};

export default Sidebar;
