'use client';

import SelectableItemList from '@/components/selectable-item-list';
import { useState } from 'react';
import StudentHeaderCard from '@/app/(roles)/teacher/subject/[id]/classbook/_components/student-header-card';
import StudentGradesCard from '@/app/(roles)/teacher/subject/[id]/classbook/_components/student-grades-card';
import StudentAbsencesCard from '@/app/(roles)/teacher/subject/[id]/classbook/_components/student-absences-card';
import { Select, SelectItem } from '@nextui-org/react';

const students = [
  {
    title: 'Alice Popescu',
    grades: 4,
    maxGrades: 5,
    average: 8.7
  },
  {
    title: 'Bob Ionescu',
    grades: 3,
    maxGrades: 5,
    average: 7.4
  },
  {
    title: 'Carol Marinescu',
    grades: 5,
    maxGrades: 5,
    average: 9.8
  },
  {
    title: 'Dan Georgescu',
    grades: 2,
    maxGrades: 5,
    average: 7.1
  },
  {
    title: 'Eva Iliescu',
    grades: 5,
    maxGrades: 5,
    average: 9.5
  },
  {
    title: 'Felix Tudor',
    grades: 3,
    maxGrades: 5,
    average: 7.6
  },
  {
    title: 'Gina Mihai',
    grades: 4,
    maxGrades: 5,
    average: 8.4
  },
  {
    title: 'Hector Radu',
    grades: 3,
    maxGrades: 5,
    average: 7.9
  },
  {
    title: 'Ileana Serban',
    grades: 4,
    maxGrades: 5,
    average: 8.2
  },
  {
    title: 'Jack Vasile',
    grades: 2,
    maxGrades: 5,
    average: 7.0
  },
  {
    title: 'Karla Florescu',
    grades: 4,
    maxGrades: 5,
    average: 8.5
  },
  {
    title: 'Leo Grigorescu',
    grades: 3,
    maxGrades: 5,
    average: 7.7
  },
  {
    title: 'Maria Vasilescu',
    grades: 5,
    maxGrades: 5,
    average: 9.2
  },
  {
    title: 'Nina Popa',
    grades: 3,
    maxGrades: 5,
    average: 7.3
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
    <div
      key='classbook'
      className='mb-4 box-border flex flex-col gap-4 overflow-hidden sm:flex-row sm:gap-0'
    >
      <Select
        className='flex sm:hidden'
        classNames={{
          trigger: 'bg-white/70 rounded-[1.25rem]'
        }}
        onSelectionChange={(index) => {
          console.log(index);
        }}
        renderValue={(students) =>
          students.map((student, index) => (
            <SelectItem key={index} className=''>
              <label className='text-[0.875rem] font-semibold text-primary-900'>
                {index}
              </label>
            </SelectItem>
          ))
        }
      >
        {students.map((student, index) => (
          <SelectItem key={index} className=''>
            <label className='text-[0.875rem] font-semibold text-primary-900'>
              {student.title}
            </label>
          </SelectItem>
        ))}
      </Select>
      <div className='hidden h-full w-[30rem] overflow-y-auto overflow-x-hidden rounded-l-[1.25rem] bg-white px-4 pt-7 sm:flex'>
        <SelectableItemList
          className='hidden w-full sm:block'
          items={students}
          selected={selected}
          onSelected={onSelect}
        />
      </div>
      <div className='flex h-full grow flex-col gap-4 overflow-y-auto overflow-x-hidden rounded-[1.25rem] bg-white/60 p-[1.875rem] sm:rounded-l-[0] sm:rounded-r-[1.25rem]'>
        {selected !== -1 ? (
          <>
            <StudentHeaderCard />
            <StudentGradesCard grades={subject.grades} />
            <StudentAbsencesCard absences={subject.absences} />
          </>
        ) : (
          <h1 className='flex h-full w-full items-center justify-center text-center text-[2rem] font-semibold text-primary-400'>
            No student selected
          </h1>
        )}
      </div>
    </div>
  );
}
