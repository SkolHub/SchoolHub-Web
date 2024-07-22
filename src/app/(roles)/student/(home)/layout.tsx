'use client';

import { ReactNode } from 'react';
import Profile from '@/components/profile';
import { Tab, Tabs } from '@nextui-org/tabs';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className='flex'>
        <div className='grow basis-0' />
        <Tabs
          classNames={{
            tabList: 'bg-white/40 rounded-[1rem]',
            tabContent: 'font-semibold text-xs text-primary-900',
            cursor: 'rounded-[0.75rem] shadow-none'
          }}
          className='grow justify-center'
        >
          <Tab as={Link} href='/student/classbook' title='Classbook' />
          <Tab as={Link} href='/student/assignments' title='Assignments' />
        </Tabs>
        <Profile className='grow basis-0' src='/leaf.png' />
      </header>
      <main className='grow overflow-hidden pb-4'>{children}</main>
    </>
  );
}
