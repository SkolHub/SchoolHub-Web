'use client';

import { ReactNode } from 'react';
import CategoryCard from '@/components/category-card';
import { CircularProgress } from '@nextui-org/react';
import { Progress } from '@nextui-org/progress';
import { TabModel } from '@/lib/types';
import StudentHeader from '@/components/student-header';

const tabs: TabModel[] = [
  {
    title: 'Stream',
    icon: 'fa-list',
    href: 'stream'
  },
  {
    title: 'Classwork',
    href: 'classwork',
    icon: 'fa-book-open'
  },
  {
    title: 'Classbook',
    href: 'classbook',
    icon: 'fa-chart-simple'
  }
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <StudentHeader tabs={tabs} />
      <section className='flex gap-6'>
        <div className='flex w-full flex-col gap-4 rounded-[1.25rem] bg-white/70 p-4 sm:w-auto lg:px-7 lg:pb-7 lg:pt-5'>
          <div className='flex grow flex-row gap-2 lg:flex-col lg:gap-0'>
            <div className='relative lg:grow'>
              <img
                className='block h-12 lg:absolute lg:h-full'
                src='/computer.png'
                alt='icon'
              />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold text-primary-900'>
                Informatică
              </h1>
              <h3 className='text-xs font-semibold text-primary-700'>
                Dr. Marin
              </h3>
            </div>
          </div>
          <div className='flex sm:hidden'>
            <div className='flex grow basis-0 flex-col items-center'>
              <label className='text-base font-semibold text-green-600'>
                9.25
              </label>
              <span className='text-center text-xs font-medium text-primary-700'>
                Average
              </span>
            </div>
            <div className='border-left-white/70 h-10 self-center border-l-1' />
            <div className='flex grow basis-0 flex-col items-center'>
              <label className='text-base font-semibold text-green-600'>
                4
              </label>
              <span className='text-center text-xs font-medium text-primary-700'>
                Module
              </span>
            </div>
            <div className='border-left-white/70 h-10 self-center border-l-1' />
            <div className='flex grow basis-0 flex-col items-center'>
              <label className='text-base font-semibold text-red-600'>17</label>
              <span className='text-center text-xs font-medium text-primary-700'>
                Missing
              </span>
            </div>
          </div>
        </div>
        <div className='hidden grow-[3] gap-4 rounded-[1.25rem] bg-white/70 p-4 sm:flex'>
          <CategoryCard className='grow' title='Grades' icon='fa-chart-simple'>
            <div className='flex flex-col items-center gap-3'>
              <CircularProgress
                classNames={{
                  svg: 'w-10 h-10',
                  indicator: 'stroke-[#22C55D]'
                }}
                value={69}
                strokeWidth={6}
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
          <CategoryCard className='grow' title='Absences' icon='fa-calendar'>
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
          <CategoryCard
            className='grow-[3]'
            title='Assignments'
            icon='fa-file-check'
          >
            <div className='flex items-center justify-center gap-8'>
              <div className='flex grow basis-0 flex-col items-center'>
                <label className='text-xl font-semibold text-primary-900'>
                  2
                </label>
                <label className='text-center text-[0.875rem] font-semibold text-primary-900'>
                  Assignments due
                </label>
              </div>
              <div className='h-3/5 border-l-1 border-l-primary-400' />
              <label className='w-[40%] grow basis-0 text-[0.875rem] font-semibold text-primary-900'>
                Liste simplu înlănțuite & 1 more
              </label>
            </div>
            <div className='flex items-center justify-center gap-8'>
              <div className='flex grow basis-0 flex-col items-center'>
                <label className='text-xl font-semibold text-red-500'>2</label>
                <label className='text-center text-[0.875rem] font-semibold text-primary-900'>
                  Missing assignments
                </label>
              </div>
              <div className='h-3/5 border-l-1 border-l-primary-400' />
              <label className='w-[40%] grow basis-0 text-[0.875rem] font-semibold text-primary-900'>
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
