import { ReactNode } from 'react';
import Logo from './logo';

export default function NavWrapper({ children }: { children: ReactNode }) {
  return (
    <nav className='bg-white/70 rounded-[1.25rem] px-5 h-full'>
      <Logo />
      <div>{children}</div>
    </nav>
  );
}
