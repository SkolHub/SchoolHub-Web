'use client';

import SubjectList from '@/app/(roles)/student/(home)/classbook/_components/subject-list';
import { useState } from 'react';
import SubjectHeaderCard from '@/app/(roles)/student/(home)/classbook/_components/subject-header-card';
import GradesCard from '@/components/grades-card';
import AbsencesCard from '@/components/absences-card';
import AnimatedPage from '@/components/animated-page';

const subjects = [
  {
    icon: 'hat',
    title: 'Matematică',
    average: 9,
    grades: 3,
    maxGrades: 4
  },
  {
    icon: 'tube',
    title: 'Fizică',
    average: 8,
    grades: 4,
    maxGrades: 6
  },
  {
    icon: 'flask',
    title: 'Chimie',
    average: 7,
    grades: 2,
    maxGrades: 5
  },
  {
    icon: 'leaf',
    title: 'Biologie',
    average: 10,
    grades: 5,
    maxGrades: 6
  },
  {
    icon: 'book',
    title: 'Istorie',
    average: 6,
    grades: 3,
    maxGrades: 4
  },
  {
    icon: 'compass',
    title: 'Geografie',
    average: 9,
    grades: 4,
    maxGrades: 5
  },
  {
    icon: 'books',
    title: 'Engleză',
    average: 8,
    grades: 4,
    maxGrades: 7
  },
  {
    icon: 'todo',
    title: 'Sport',
    average: 7,
    grades: 3,
    maxGrades: 7
  },
  {
    icon: 'computer',
    title: 'Informatica',
    average: 10,
    grades: 5,
    maxGrades: 6
  },
  {
    icon: 'todo',
    title: 'Muzică',
    average: 6,
    grades: 2,
    maxGrades: 3
  },
  {
    icon: 'crayons',
    title: 'Arte Plastice',
    average: 9,
    grades: 4,
    maxGrades: 4
  },
  {
    icon: 'book',
    title: 'Limba Franceză',
    average: 8,
    grades: 3,
    maxGrades: 5
  },
  {
    icon: 'books',
    title: 'Literatură',
    average: 7,
    grades: 2,
    maxGrades: 4
  },
  {
    icon: 'hat',
    title: 'Educație Civică',
    average: 10,
    grades: 5,
    maxGrades: 5
  },
  {
    icon: 'computer',
    title: 'Tehnologie',
    average: 9,
    grades: 4,
    maxGrades: 6
  },
  {
    icon: 'computer',
    title: 'ACSL',
    average: 8,
    grades: 3,
    maxGrades: 6
  },
  {
    icon: 'computer',
    title: 'InfoEducație',
    average: 7,
    grades: 2,
    maxGrades: 4
  }
];

const subject = {
  title: 'Informatică',
  teachers: ['teacher 1', 'teacher 2'],
  icon: 'leaf',
  grades: [
    {
      value: 8,
      teacher: 'Prof. Ionescu',
      date: new Date('2024-02-15T14:22:00Z')
    },
    {
      value: 7,
      teacher: 'Dr. Georgescu',
      date: new Date('2024-03-10T09:30:00Z')
    },
    {
      value: 9,
      teacher: 'Prof. Radu',
      date: new Date('2024-01-25T11:45:00Z')
    },
    {
      value: 6,
      teacher: 'Dr. Munteanu',
      date: new Date('2024-04-05T16:20:00Z')
    },
    {
      value: 10,
      teacher: 'Prof. Iancu',
      date: new Date('2024-05-12T08:55:00Z')
    }
  ],
  absences: [
    {
      excused: true,
      teacher: 'Prof. Ionescu',
      date: new Date('2024-02-15T14:22:00Z')
    },
    {
      excused: false,
      teacher: 'Dr. Georgescu',
      date: new Date('2024-03-10T09:30:00Z')
    },
    {
      excused: true,
      teacher: 'Prof. Radu',
      date: new Date('2024-01-25T11:45:00Z')
    },
    {
      excused: true,
      teacher: 'Dr. Munteanu',
      date: new Date('2024-04-05T16:20:00Z')
    }
  ]
};

export default function Classbook() {
  const [selected, setSelected] = useState<number>(-1);

  function onSelect(index: number) {
    setSelected(index);
  }

  return (
    <AnimatedPage key='classbook'>
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
              grades={5}
              maxGrades={6}
              average={8}
              absences={4}
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
    </AnimatedPage>
  );
}
