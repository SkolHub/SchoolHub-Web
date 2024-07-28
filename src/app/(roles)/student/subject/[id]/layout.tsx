'use client';

import { ReactNode } from 'react';
import { Tab, Tabs } from '@nextui-org/tabs';
import Link from 'next/link';
import Profile from '@/components/profile';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CategoryCard from '@/app/(roles)/student/subject/_components/category-card';
import { CircularProgress } from '@nextui-org/react';
import { Progress } from '@nextui-org/progress';

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
            key='stream'
            as={Link}
            href='stream'
            title={
              <div className='flex items-center gap-1 text-primary-700'>
                <i className='fa fa-list text-xl' />
                <AnimatePresence>
                  {pathname.includes('stream') && (
                    <motion.label
                      variants={container}
                      key='stream'
                      initial='initial'
                      animate='animate'
                      exit='exit'
                    >
                      Stream
                    </motion.label>
                  )}
                </AnimatePresence>
              </div>
            }
          />
          <Tab
            key='classwork'
            as={Link}
            href='classwork'
            title={
              <div className='flex items-center gap-1 text-primary-700'>
                <i className='fa fa-book-open text-xl' />
                <AnimatePresence>
                  {pathname.includes('classwork') && (
                    <motion.label
                      key='classwork'
                      variants={container}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                    >
                      Classwork
                    </motion.label>
                  )}
                </AnimatePresence>
              </div>
            }
          />
          <Tab
            key='classbook'
            as={Link}
            href='classbook'
            title={
              <div className='flex items-center gap-1 text-primary-700'>
                <i className='fa fa-chart-simple text-xl' />
                <AnimatePresence>
                  {pathname.includes('classbook') && (
                    <motion.label
                      key='classbook'
                      variants={container}
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
        </Tabs>
        <Profile className='grow basis-0' src='/leaf.png' />
      </header>
      <section className='flex gap-6'>
        <div className='flex grow flex-col rounded-[1.25rem] bg-white/70 px-7 pb-7 pt-5'>
          <div className='relative grow'>
            <img className='absolute h-full' src='/leaf.png' alt='icon' />
          </div>
          <h1 className='text-2xl font-semibold text-primary-900'>
            Informatica
          </h1>
          <h3 className='text-xs font-semibold text-primary-700'>
            Serban Manuela, Penghis Diana
          </h3>
        </div>
        <div className='flex gap-4 rounded-[1.25rem] bg-white/70 p-4'>
          <CategoryCard title='Grades' icon='fa-chart-simple'>
            <div className='flex flex-col items-center gap-3'>
              <CircularProgress
                classNames={{
                  svg: 'w-10 h-10',
                  indicator: 'stroke-[#22C55D]'
                }}
                value={69}
                strokeWidth={7}
              />
              <label className='text-[0.875rem] font-semibold text-primary-900'>
                4 out of 5 grades
              </label>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <Progress
                classNames={{
                  indicator: 'bg-[#22C55D]',
                  track: 'h-2'
                }}
                value={69}
              />
              <label className='text-[0.875rem] font-semibold text-primary-900'>
                4 out of 5 grades
              </label>
            </div>
          </CategoryCard>
          <CategoryCard title='Absences' icon='fa-calendar'>
            <div className='flex flex-col items-center'>
              <label className='text-xl font-semibold leading-none text-yellow-500'>
                5
              </label>
              <label className='max-w-min text-center text-[0.875rem] font-semibold leading-none text-primary-900'>
                Unexcused absences
              </label>
            </div>
            <div className='flex flex-col items-center'>
              <label className='text-xl font-semibold leading-none text-red-500'>
                10
              </label>
              <label className='text-[0.875rem] font-semibold leading-none text-primary-900'>
                Total absences
              </label>
            </div>
          </CategoryCard>
          <CategoryCard title='Assignments' icon='fa-file-check'>
            <div className='flex items-center justify-center gap-8'>
              <div className='flex flex-col items-center'>
                <label className='text-xl font-semibold text-primary-900'>
                  2
                </label>
                <label className='text-center text-[0.875rem] font-semibold text-primary-900'>
                  Assignments due
                </label>
              </div>
              <div className='h-3/5 border-l-1 border-l-primary-400' />
              <label className='w-[40%] text-[0.875rem] font-semibold text-primary-900'>
                Liste simplu înlănțuite & 1 more
              </label>
            </div>
            <div className='flex items-center justify-center gap-8'>
              <div className='flex flex-col items-center'>
                <label className='text-xl font-semibold text-red-500'>2</label>
                <label className='text-center text-[0.875rem] font-semibold text-primary-900'>
                  Missing assignments
                </label>
              </div>
              <div className='h-3/5 border-l-1 border-l-primary-400' />
              <label className='w-[40%] text-[0.875rem] font-semibold text-primary-900'>
                Șiruri de caractere
              </label>
            </div>
          </CategoryCard>
        </div>
      </section>
      <main className='flex grow flex-col overflow-hidden'>{children}</main>
    </>
  );
}
