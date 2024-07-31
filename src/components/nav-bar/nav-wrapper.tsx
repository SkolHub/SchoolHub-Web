import { ReactNode } from 'react';
import LogoExpanded from '@/components/logo-expanded';
import Link from 'next/link';

export default function NavWrapper({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  const role = document.cookie
    .split('; ')
    .find((row) => row.startsWith('role'));

  return (
    <nav className='my-4 ml-4 hidden w-[20rem] min-w-[20rem] flex-col gap-6 rounded-[1.25rem] bg-white/70 px-5 pt-6 min-[1400px]:!flex'>
      <Link
        href={`/${role?.split('=')[1]}/${role?.includes('student') ? 'classbook' : 'assignments'}`}
        className='flex w-full justify-center'
      >
        <LogoExpanded className='h-[3.25rem]' />
      </Link>
      <div
        className={`flex flex-col overflow-auto pb-5 scrollbar-hide ${className}`}
      >
        {children}
      </div>
    </nav>
  );
}
