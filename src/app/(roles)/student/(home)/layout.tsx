'use client';

import { ReactNode } from 'react';
import Profile from '@/components/profile';
import { Tab, Tabs } from '@nextui-org/tabs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const container = {
  initial: { fontSize: 0, width: 0, opacity: 0 },
  animate: {
    fontSize: '.75rem',
    width: 'auto',
    opacity: 1,
    transition: {
      duration: 0.1
    }
  },
  exit: {
    fontSize: 0,
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.1
    }
  }
};

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <header className='flex'>
        <div className='flex grow basis-0 items-center' />
        <Tabs
          classNames={{
            tabList: 'bg-white/40 rounded-[1rem]',
            tabContent: 'font-semibold text-xs text-primary-900',
            cursor: 'rounded-[0.75rem] shadow-none'
          }}
          className='grow justify-center'
          selectedKey={pathname.split('/').at(-1)}
        >
          <Tab
            key='classbook'
            as={Link}
            href='/student/classbook'
            title={
              <div className='flex items-center gap-1 text-primary-700'>
                <i className='fa fa-chart-simple text-xl' />
                <AnimatePresence>
                  {pathname.includes('classbook') && (
                    <motion.label
                      variants={container}
                      key='classbook'
                      initial='initial'
                      animate='animate'
                      exit='exit'
                    >
                      Classbook
                    </motion.label>
                  )}
                </AnimatePresence>
              </div>
            }
          />
          <Tab
            key='assignments'
            as={Link}
            href='/student/assignments'
            title={
              <div className='flex items-center gap-1 text-primary-700'>
                <i className='fa fa-file-lines text-xl' />
                <AnimatePresence>
                  {pathname.includes('assignments') && (
                    <motion.label
                      key='assignments'
                      variants={container}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                    >
                      Assignments
                    </motion.label>
                  )}
                </AnimatePresence>
              </div>
            }
          />
        </Tabs>
        <Profile className='grow basis-0' src='/leaf.png' />
      </header>
      <AnimatePresence initial={false} mode='popLayout'>
        <main className='w-full grow overflow-hidden pb-4'>{children}</main>
      </AnimatePresence>
    </>
  );
}
