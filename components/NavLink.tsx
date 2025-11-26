'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = { href: string; children: React.ReactNode; };

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(href + '/');

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md hover:underline transition ${
        isActive ? 'text-blue-600 underline font-semibold' : 'text-gray-700'
      }`}
    >
      {children}
    </Link>
  );
}