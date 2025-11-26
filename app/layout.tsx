import '../styles/globals.css';
import React from 'react';
import NavLink from '../components/NavLink';

export const metadata = {
  title: 'Bike World Daily',
  description: 'Your quick source for bike updates, tips, and news!'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white border-b">
          <div className="max-w-3xl mx-auto flex items-center justify-between py-4 px-4">
            <h1 className="text-xl font-bold">Bike World Daily</h1>
            <nav className="flex space-x-2 items-center">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
          </div>
        </header>

        <main className="flex-grow max-w-3xl mx-auto py-8 px-4">{children}</main>

        <footer className="mt-auto max-w-3xl mx-auto text-sm text-gray-500 py-8 px-4">
          © 2025 Biker's Blog
        </footer>
      </body>
    </html>
  );
}