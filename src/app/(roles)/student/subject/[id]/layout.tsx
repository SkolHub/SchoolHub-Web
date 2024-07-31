'use client';

import { ReactNode } from 'react';
import CategoryCard from '@/components/category-card';
import { CircularProgress } from '@nextui-org/react';
import { Progress } from '@nextui-org/progress';
import { TabModel } from '@/lib/types';
import StudentHeader from '@/components/student-header';
import { useGetStudentSubjectsWithStats } from '@/api/subject';
import {
  useGetStudentSubjectAbsences,
  useGetStudentSubjectGrades
} from '@/api/grade';
import { Post, useGetStudentSubjectPosts } from '@/api/post';

const tabs: TabModel[] = [
  {
    title: 'Stream',
    icon: 'fa-list',
    href: 'stream'
  },
  // {
  //   title: 'Classwork',
  //   href: 'classwork',
  //   icon: 'fa-book-open'
  // },
  {
    title: 'Classbook',
    href: 'classbook',
    icon: 'fa-chart-simple'
  }
];

export default function Layout({
  children,
  params: { id }
}: {
  children: ReactNode;
  params: { id: string };
}) {
  const grades = useGetStudentSubjectGrades(+id);
  const absences = useGetStudentSubjectAbsences(+id);
  const subjects = useGetStudentSubjectsWithStats();
  const posts = useGetStudentSubjectPosts(id);

  if (
    grades.isPending ||
    absences.isPending ||
    subjects.isPending ||
    posts.isPending
  ) {
    return <h1>Loading...</h1>;
  }

  if (grades.isError || absences.isError || subjects.isError || posts.isError) {
    return <h1>Error</h1>;
  }

  const subject = subjects.data
    ?.at(0)
    ?.subjects.find((subject) => subject.id == id);

  const subjectGrades = grades.data?.length;
  const maxGrades = subject?.metadata.minGrades;
  const average = subject?.average;
  const absencesCount = absences.data?.length;
  const unexcusedAbsences = absences.data?.filter(
    (absence) => !absence.excused
  ).length;
  let assignmentsDue = 0;
  let assignmentsMissing = 0;
  let assignmentsDueArray: Post[] = [];
  let assignmentsMissingArray: Post[] = [];
  for (const post of posts.data) {
    if (post.type === 'assignment') {
      if (new Date(post.dueDate) > new Date()) {
        assignmentsDue++;
        assignmentsDueArray.push(post);
      } else if (
        new Date(post.dueDate) < new Date() &&
        !(post.submission?.status === 'submitted')
      ) {
        assignmentsMissing++;
        assignmentsMissingArray.push(post);
      }
    }
  }

  return (
    <>
      <StudentHeader tabs={tabs} />
      <section className='flex gap-6'>
        <div className='flex w-full flex-col gap-4 rounded-[1.25rem] bg-white/70 p-4 sm:w-auto lg:px-7 lg:pb-7 lg:pt-5'>
          <div className='flex grow flex-row gap-2 pr-16 lg:flex-col lg:gap-0'>
            <div className='relative lg:grow'>
              <img
                className='block h-12 lg:absolute lg:h-full'
                src='/computer.png'
                alt='icon'
              />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold text-primary-900 sm:pt-4'>
                {subject?.name}
              </h1>
              <h3 className='text-xs font-semibold text-primary-700'>
                {subject?.teachers?.map((t) => t.name).join(', ')}
              </h3>
            </div>
          </div>
          <div className='flex sm:hidden'>
            <div className='flex grow basis-0 flex-col items-center'>
              <label className='text-base font-semibold text-green-600'>
                {average?.toFixed(2)}
              </label>
              <span className='text-center text-xs font-medium text-primary-700'>
                average
              </span>
            </div>
            <div className='border-left-white/70 h-10 self-center border-l-1' />
            <div className='flex grow basis-0 flex-col items-center'>
              <label className='text-base font-semibold text-green-600'>
                {subjectGrades}/{maxGrades}
              </label>
              <span className='text-center text-xs font-medium text-primary-700'>
                grades
              </span>
            </div>
            <div className='border-left-white/70 h-10 self-center border-l-1' />
            <div className='flex grow basis-0 flex-col items-center'>
              <label className='text-base font-semibold text-red-600'>
                {unexcusedAbsences}
              </label>
              <span className='text-center text-xs font-medium text-primary-700'>
                unexcused absences
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
                value={Math.round((subjectGrades / maxGrades) * 100)}
                strokeWidth={6}
              />
              <label className='text-[0.875rem] font-semibold text-primary-900'>
                {subjectGrades} out of {maxGrades} grades
              </label>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <Progress
                classNames={{
                  indicator: 'bg-[#22C55D]',
                  track: 'h-2'
                }}
                value={Math.round((average ?? 0) * 10)}
              />
              <label className='text-[0.875rem] font-semibold text-primary-900'>
                {average?.toFixed(2)} average
              </label>
            </div>
          </CategoryCard>
          <CategoryCard className='grow' title='Absences' icon='fa-calendar'>
            <div className='flex flex-col items-center'>
              <label className='text-xl font-semibold leading-none text-yellow-500'>
                {unexcusedAbsences}
              </label>
              <label className='max-w-min text-center text-[0.875rem] font-semibold leading-none text-primary-900'>
                Unexcused absences
              </label>
            </div>
            <div className='flex flex-col items-center'>
              <label className='text-xl font-semibold leading-none text-red-500'>
                {absencesCount}
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
                  {assignmentsDue}
                </label>
                <label className='text-center text-[0.875rem] font-semibold text-primary-900'>
                  Assignments due
                </label>
              </div>
              <div className='h-3/5 border-l-1 border-l-primary-400' />
              <label className='w-[40%] grow basis-0 text-[0.875rem] font-semibold text-primary-900'>
                {assignmentsDueArray[0]
                  ? assignmentsDueArray[0].title + assignmentsDueArray[1]
                    ? `& ${assignmentsDue - 1} more`
                    : ''
                  : 'None'}
              </label>
            </div>
            <div className='flex items-center justify-center gap-8'>
              <div className='flex grow basis-0 flex-col items-center'>
                <label className='text-xl font-semibold text-red-500'>
                  {assignmentsMissing}
                </label>
                <label className='text-center text-[0.875rem] font-semibold text-primary-900'>
                  Missing assignments
                </label>
              </div>
              <div className='h-3/5 border-l-1 border-l-primary-400' />
              <label className='w-[40%] grow basis-0 text-[0.875rem] font-semibold text-primary-900'>
                {assignmentsMissingArray[0].title
                  ? assignmentsMissingArray[0].title +
                    (assignmentsMissingArray[1]
                      ? ` & ${assignmentsMissing - 1} more`
                      : '')
                  : 'None'}
              </label>
            </div>
          </CategoryCard>
        </div>
      </section>
      <main className='flex grow flex-col overflow-hidden'>{children}</main>
    </>
  );
}
