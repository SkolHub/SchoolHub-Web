import { ReactNode } from 'react';
import LogoExpanded from '@/components/logo-expanded';

export default function NavWrapper({ children }: { children: ReactNode }) {
  return (
    <nav className='m-4 flex w-[20rem] min-w-[20rem] flex-col gap-6 rounded-[1.25rem] bg-white/70 px-5 pt-6'>
      <LogoExpanded className='h-[3.25rem]' />
      <div className='overflow-auto pb-5 scrollbar-hide'>{children}</div>
    </nav>
  );
}
