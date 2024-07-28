import GradesCard from '@/components/grades-card';
import AbsencesCard from '@/components/absences-card';

const absences = [
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
];

const grades = [
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
];

export default function Classbook() {
  return (
    <div className='flex flex-col overflow-auto pb-4 scrollbar-hide'>
      <section className='flex gap-4 rounded-[1.25rem] bg-white/70 p-4'>
        <GradesCard className='grow basis-0' grades={grades} />
        <AbsencesCard className='grow basis-0' absences={absences} />
      </section>
    </div>
  );
}
