'use client';

import { ReactNode } from 'react';
import { Tab, Tabs } from '@nextui-org/tabs';
import Link from 'next/link';
import Profile from '@/components/profile';

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
          <Tab as={Link} href='classbook' title='Classbook' />
          <Tab as={Link} href='classwork' title='Classwork' />
          <Tab as={Link} href='stream' title='Stream' />
        </Tabs>
        <Profile className='grow basis-0' src='/leaf.png' />
      </header>
      <section>
        <div></div>
        <div></div>
      </section>
      <main>{children}</main>
    </>
  );
}
