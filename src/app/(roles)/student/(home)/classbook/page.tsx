'use client';

import { motion } from 'framer-motion';
import SubjectList from '@/app/(roles)/student/(home)/classbook/_components/subject-list';
import { useState } from 'react';
import SubjectHeaderCard from '@/app/(roles)/student/(home)/classbook/_components/subject-header-card';
import GradesCard from '@/components/grades-card';
import AbsencesCard from '@/components/absences-card';

const subjects: {
  icon: string;
  title: string;
  grades: number;
  maxGrades: number;
  average: number;
}[] = [
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 10,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Matematică',
    average: 9,
    grades: 4,
    maxGrades: 5
  }
];

const subject = {
  title: 'Informatică',
  teachers: ['teacher 1', 'teacher 2'],
  icon: 'leaf',
  grades: [
    {
      value: 10,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      value: 10,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      value: 10,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      value: 10,
      teacher: 'teacher 1',
      date: new Date()
    }
  ],
  absences: [
    {
      excused: true,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      excused: true,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      excused: false,
      teacher: 'teacher 1',
      date: new Date()
    },
    {
      excused: true,
      teacher: 'teacher 1',
      date: new Date()
    }
  ]
};

export default function Classbook() {
  const [selected, setSelected] = useState<number>(-1);

  function onSelect(index: number) {
    setSelected(index);
  }

  return (
    <motion.div
      key='classbook'
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: 'keyframes',
        ease: 'easeInOut'
      }}
      className='flex h-full w-full overflow-hidden'
    >
      <SubjectList
        subjects={subjects}
        selected={selected}
        onSelected={onSelect}
      />
      <div className='flex h-full grow flex-col gap-4 overflow-y-auto overflow-x-hidden rounded-r-[1.25rem] bg-white/60 p-[1.875rem]'>
        {selected !== -1 ? (
          <>
            <SubjectHeaderCard
              {...subject}
              grades={2}
              maxGrades={3}
              average={10}
              absences={5}
              unexcusedAbsences={1}
              assessmentChance={22}
            />
            <GradesCard grades={subject.grades} />
            <AbsencesCard absences={subject.absences} />
          </>
        ) : (
          <h1 className='flex h-full w-full items-center justify-center text-[2rem] font-semibold text-primary-400'>
            No subject selected
          </h1>
        )}
      </div>
    </motion.div>
  );
}
