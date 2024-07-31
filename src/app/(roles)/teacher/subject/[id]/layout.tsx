'use client';

import { ReactNode } from 'react';
import CategoryCard from '@/components/category-card';
import { CircularProgress } from '@nextui-org/react';
import { Progress } from '@nextui-org/progress';
import { TabModel } from '@/lib/types';
import TeacherHeader from '@/components/teacher-header';
import {
  TeacherClass,
  useGetTeacherSubjects,
  useGetTeacherSubjectStats
} from '@/api/subject';

const tabs: TabModel[] = [
  {
    title: 'Stream',
    icon: 'fa-list',
    href: 'stream'
  },
  /*{
    title: 'Classwork',
    href: 'classwork',
    icon: 'fa-book-open'
  },*/
  {
    title: 'Classbook',
    href: 'classbook',
    icon: 'fa-chart-simple'
  }
];

function findSubject(classes: TeacherClass[], subjectID: string) {
  for (const class_ of classes) {
    for (const subject of class_.subjects) {
      if (subject.id == subjectID) {
        return {
          ...subject,
          className: class_.schoolClasses.map((c) => c.name).join(', ')
        };
      }
    }
  }

  return {
    name: `Error`,
    icon: 'book',
    className: `Error`
  };
}

export default function Layout({
  children,
  params: { id }
}: {
  children: ReactNode;
  params: { id: string };
}) {
  const schoolClasses = useGetTeacherSubjects();
  const stats = useGetTeacherSubjectStats(id);

  if (schoolClasses.isPending || stats.isPending) {
    return <p>Loading...</p>;
  }

  if (schoolClasses.isError || stats.isError) {
    return <p>Error</p>;
  }

  const subjectData = findSubject(schoolClasses.data, id);

  return (
    <>
      <TeacherHeader tabs={tabs} />
      <div className='flex flex-col gap-6 overflow-auto scrollbar-hide min-[900px]:overflow-hidden'>
        <section className='flex flex-col gap-6 lg:flex-row'>
          <div className='flex flex-col gap-4 rounded-[1.25rem] bg-white/70 p-4 lg:px-7 lg:pb-7 lg:pt-5'>
            <div className='flex grow flex-row gap-2 pr-16 lg:flex-col lg:gap-0'>
              <div className='relative lg:grow'>
                <img
                  className='block h-12 lg:absolute lg:h-full'
                  src='/computer.png'
                  alt='icon'
                />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold text-primary-900'>
                  {subjectData.name}
                </h1>
                <h3 className='text-base font-semibold text-primary-700'>
                  {subjectData.className}
                </h3>
              </div>
            </div>
            <div className='flex sm:hidden'>
              <div className='flex grow basis-0 flex-col items-center'>
                <label className='text-base font-semibold text-green-600'>
                  {parseFloat(stats.data.average).toFixed(2)}
                </label>
                <span className='text-center text-xs font-medium text-primary-700'>
                  Class average
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
                <label className='text-base font-semibold text-red-600'>
                  {parseFloat(stats.data.averagecount).toFixed(2)}
                </label>
                <span className='text-center text-xs font-medium text-primary-700'>
                  Average grades
                </span>
              </div>
            </div>
          </div>
          <div className='hidden grow-[3] flex-col gap-4 rounded-[1.25rem] bg-white/70 p-4 sm:flex md:flex-row'>
            <div className='flex grow flex-col gap-4 sm:flex-row'>
              <CategoryCard
                className='grow'
                title='Grades'
                icon='fa-chart-simple'
              >
                <div className='flex flex-col items-center gap-3'>
                  <CircularProgress
                    classNames={{
                      svg: 'w-10 h-10',
                      indicator: 'stroke-[#22C55D]'
                    }}
                    value={parseFloat(stats.data.averagecount) / 5 * 100}
                    strokeWidth={6}
                  />
                  <div className='flex flex-col items-center'>
                    <label className='text-[0.875rem] font-semibold text-primary-900'>
                      {parseFloat(stats.data.averagecount).toFixed(2)}
                    </label>
                    <span className='text-[0.6875rem] font-semibold leading-none text-primary-900'>
                      Average grades
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-1'>
                  <h1 className='text-base font-semibold text-primary-900'>
                    {parseFloat(stats.data.average).toFixed(2)}
                  </h1>
                  <Progress
                    classNames={{
                      indicator: 'bg-[#22C55D]',
                      track: 'h-2'
                    }}
                    value={parseFloat(stats.data.average) / 10 * 100}
                  />
                  <label className='text-[0.875rem] font-semibold text-primary-900'>
                    Class average
                  </label>
                </div>
              </CategoryCard>
              <CategoryCard
                className='grow'
                title='Calendar'
                icon='fa-calendar'
              >
                <div className='flex flex-col items-center gap-3'>
                  <CircularProgress
                    classNames={{
                      svg: 'w-20 h-20',
                      indicator: 'stroke-[#22C55D]'
                    }}
                    value={69}
                    strokeWidth={6}
                  />
                  <div className='flex flex-col items-center'>
                    <h1 className='text-[0.875rem] font-semibold text-primary-900'>
                      82%
                    </h1>
                    <label className='text-[0.6875rem] font-semibold text-primary-900'>
                      current module
                    </label>
                  </div>
                  <label className='text-[0.875rem] font-semibold text-primary-900'>
                    5 days left
                  </label>
                </div>
              </CategoryCard>
            </div>
            {/*<CategoryCard*/}
            {/*  className='grow'*/}
            {/*  title='Latest assignment'*/}
            {/*  icon='fa-file-check'*/}
            {/*>*/}
            {/*  <div className='flex items-center justify-center gap-8'>*/}
            {/*    <div className='flex grow basis-0 flex-col items-center'>*/}
            {/*      <label className='text-xl font-semibold text-red-500'>*/}
            {/*        2*/}
            {/*      </label>*/}
            {/*      <label className='text-center text-[0.875rem] font-semibold text-primary-900'>*/}
            {/*        missing*/}
            {/*      </label>*/}
            {/*    </div>*/}
            {/*    <div className='h-3/5 border-l-1 border-l-primary-400' />*/}
            {/*    <div className='flex grow basis-0 flex-col items-center'>*/}
            {/*      <label className='text-xl font-semibold text-primary-900'>*/}
            {/*        5*/}
            {/*      </label>*/}
            {/*      <label className='min-w-max text-center text-[0.875rem] font-semibold text-primary-900'>*/}
            {/*        not graded*/}
            {/*      </label>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className='flex items-center justify-center gap-8'>*/}
            {/*    <div className='flex grow basis-0 flex-col items-center'>*/}
            {/*      <label className='text-xl font-semibold text-primary-900'>*/}
            {/*        10*/}
            {/*      </label>*/}
            {/*      <label className='text-center text-[0.875rem] font-semibold text-primary-900'>*/}
            {/*        graded*/}
            {/*      </label>*/}
            {/*    </div>*/}
            {/*    <div className='h-3/5 border-l-1 border-l-primary-400' />*/}
            {/*    <div className='flex grow basis-0 flex-col items-center'>*/}
            {/*      <label className='text-xl font-semibold text-primary-900'>*/}
            {/*        30*/}
            {/*      </label>*/}
            {/*      <label className='text-center text-[0.875rem] font-semibold text-primary-900'>*/}
            {/*        total*/}
            {/*      </label>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</CategoryCard>*/}
          </div>
        </section>
        <main className='flex grow flex-col overflow-y-visible min-[900px]:overflow-hidden'>
          {children}
        </main>
      </div>
    </>
  );
}
