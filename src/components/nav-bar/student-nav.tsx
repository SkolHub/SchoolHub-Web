import NavWrapper from '@/components/nav-bar/nav-wrapper';
import { StudentSubjectModel } from '@/lib/types';
import StudentClass from '@/components/nav-bar/student-class';

const schoolClasses: {
  title: string;
  subjects: StudentSubjectModel[];
}[] = [
  {
    title: 'Clasa 10D',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1', 'teacher2'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  },
  {
    title: 'Other',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  },
  {
    title: 'Other2',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  },
  {
    title: 'Other3',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  },
  {
    title: 'Other4',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  },
  {
    title: 'Other5',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  },
  {
    title: 'Other6',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  },
  {
    title: 'Other7',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  },
  {
    title: 'Other8',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  },
  {
    title: 'Other9',
    subjects: [
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      },
      {
        title: 'Matematică',
        teachers: ['teacher1'],
        icon: 'leaf'
      }
    ]
  }
];

export default function StudentNav() {
  return (
    <NavWrapper>
      {schoolClasses.map((schoolClass, index) => (
        <StudentClass key={index} {...schoolClass} />
      ))}
    </NavWrapper>
  );
}
