import { ReactNode } from 'react';
import LogoExpanded from '@/components/logo-expanded';

export default function NavWrapper({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <nav className='my-4 ml-4 hidden w-[20rem] min-w-[20rem] flex-col gap-6 rounded-[1.25rem] bg-white/70 px-5 pt-6 min-[1400px]:!flex'>
      <LogoExpanded className='h-[3.25rem]' />
      <div
        className={`flex flex-col overflow-auto pb-5 scrollbar-hide ${className}`}
      >
        {children}
      </div>
    </nav>
  );
}
