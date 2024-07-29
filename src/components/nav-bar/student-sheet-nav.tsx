import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import StudentClass from '@/components/nav-bar/student-class';
import { StudentSubjectModel } from '@/lib/types';

const schoolClasses: {
  title: string;
  subjects: StudentSubjectModel[];
}[] = [
  {
    title: 'Clasa 10D',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['Prof. Ionescu', 'Dr. Popescu'],
        icon: 'hat'
      },
      {
        title: 'Fizică',
        teachers: ['Dr. Georgescu'],
        icon: 'tube'
      },
      {
        title: 'Chimie',
        teachers: ['Prof. Radu'],
        icon: 'flask'
      },
      {
        title: 'Biologie',
        teachers: ['Dr. Munteanu'],
        icon: 'leaf'
      },
      {
        title: 'Istorie',
        teachers: ['Prof. Iancu'],
        icon: 'book'
      },
      {
        title: 'Geografie',
        teachers: ['Dr. Luca'],
        icon: 'compass'
      },
      {
        title: 'Engleză',
        teachers: ['Prof. Smith'],
        icon: 'books'
      },
      {
        title: 'Sport',
        teachers: ['Prof. Andrei'],
        icon: 'todo'
      },
      {
        title: 'Informatica',
        teachers: ['Dr. Marin'],
        icon: 'computer'
      },
      {
        title: 'Muzică',
        teachers: ['Prof. Tudor'],
        icon: 'todo'
      },
      {
        title: 'Arte Plastice',
        teachers: ['Prof. Elena'],
        icon: 'crayons'
      },
      {
        title: 'Limba Franceză',
        teachers: ['Dr. Dupont'],
        icon: 'book'
      },
      {
        title: 'Literatură',
        teachers: ['Prof. Dima'],
        icon: 'books'
      },
      {
        title: 'Educație Civică',
        teachers: ['Prof. Costin'],
        icon: 'hat'
      },
      {
        title: 'Tehnologie',
        teachers: ['Dr. Marius'],
        icon: 'computer'
      }
    ]
  },
  {
    title: 'Other',
    subjects: [
      {
        title: 'ACSL',
        teachers: ['Prof. Voicu'],
        icon: 'computer'
      },
      {
        title: 'InfoEducație',
        teachers: ['Dr. Marcu'],
        icon: 'computer'
      }
    ]
  }
];

export default function StudentSheetNav() {
  return (
    <Sheet>
      <SheetTrigger className='flex min-[1400px]:!hidden' asChild>
        <i className='fa fa-bars text-xl' />
      </SheetTrigger>
      <SheetContent className='bg-white-overlap pb-0' side='left'>
        <div className='h-full overflow-auto pb-6 scrollbar-hide'>
          {schoolClasses.map((schoolClass, index) => (
            <StudentClass key={index} {...schoolClass} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
