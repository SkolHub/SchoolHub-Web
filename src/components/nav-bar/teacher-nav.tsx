import NavWrapper from '@/components/nav-bar/nav-wrapper';
import TeacherClass from '@/components/nav-bar/teacher-class';

const schoolClasses: {
  schoolClasses: string[];
  subjects: {
    icon: string;
    title: string;
  }[];
}[] = [
  {
    schoolClasses: ['11A', '12B'],
    subjects: [
      {
        icon: 'microscope',
        title: 'Biologie'
      },
      {
        icon: 'tube',
        title: 'Fizică'
      }
    ]
  },
  {
    schoolClasses: ['8C', '9A', '10B'],
    subjects: [
      {
        icon: 'book',
        title: 'Istorie'
      }
    ]
  },
  {
    schoolClasses: ['7D'],
    subjects: [
      {
        icon: 'hat',
        title: 'Matematică'
      }
    ]
  },
  {
    schoolClasses: ['9D', '10D'],
    subjects: [
      {
        icon: 'computer',
        title: 'Informatica'
      },
      {
        icon: 'compass',
        title: 'Geografie'
      },
      {
        icon: 'flask',
        title: 'Chimie'
      }
    ]
  },
  {
    schoolClasses: ['6E'],
    subjects: [
      {
        icon: 'crayons',
        title: 'Arte Plastice'
      }
    ]
  },
  {
    schoolClasses: ['11A', '12B'],
    subjects: [
      {
        icon: 'microscope',
        title: 'Biologie'
      },
      {
        icon: 'tube',
        title: 'Fizică'
      }
    ]
  },
  {
    schoolClasses: ['8C', '9A', '10B'],
    subjects: [
      {
        icon: 'book',
        title: 'Istorie'
      }
    ]
  },
  {
    schoolClasses: ['7D'],
    subjects: [
      {
        icon: 'hat',
        title: 'Matematică'
      }
    ]
  },
  {
    schoolClasses: ['9D', '10D'],
    subjects: [
      {
        icon: 'computer',
        title: 'Informatica'
      },
      {
        icon: 'compass',
        title: 'Geografie'
      },
      {
        icon: 'flask',
        title: 'Chimie'
      }
    ]
  },
  {
    schoolClasses: ['6E'],
    subjects: [
      {
        icon: 'crayons',
        title: 'Arte Plastice'
      }
    ]
  }
];

export default function TeacherNav() {
  return (
    <NavWrapper className='gap-2'>
      {schoolClasses.map((schoolClass, index) => (
        <TeacherClass key={index} {...schoolClass} />
      ))}
    </NavWrapper>
  );
}
