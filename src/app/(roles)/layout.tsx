import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen w-screen bg-secondary-100'>{children}</div>
  );
}
