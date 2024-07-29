'use client';

import GradesCard from '@/components/grades-card';
import AbsencesCard from '@/components/absences-card';
import AnimatedPage from '@/components/animated-page';

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
  return (
    <AnimatedPage
      key='classboook'
      className='flex flex-col overflow-auto pb-4 scrollbar-hide'
    >
      <section className='flex gap-4 rounded-[1.25rem] bg-white/70 p-4'>
        <GradesCard className='grow basis-0' grades={subject.grades} />
        <AbsencesCard className='grow basis-0' absences={subject.absences} />
      </section>
    </AnimatedPage>
  );
}
