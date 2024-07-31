'use client';

import AnimatedPage from '@/components/animated-page';
import AssignmentColumn from '@/components/assignment-column';
import { Post, useGetStudentOrganizationAssignments } from '@/api/post';

const assignments_1 = [
  {
    title: 'Rezolvare ecuații complexe',
    icon: 'computer',
    subject: 'Matematică',
    due: new Date('2024-02-15T14:00:00Z')
  },
  {
    title: 'Probleme de trigonometrie avansată',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date('2024-03-01T09:00:00Z')
  },
  {
    title: 'Geometrie analitică',
    icon: 'compass',
    subject: 'Matematică',
    due: new Date('2024-03-10T16:00:00Z')
  },
  {
    title: 'Studiul funcțiilor exponențiale',
    icon: 'computer',
    subject: 'Matematică',
    due: new Date('2024-04-05T11:30:00Z')
  },
  {
    title: 'Analiza limitelor',
    icon: 'book',
    subject: 'Matematică',
    due: new Date('2024-04-15T08:00:00Z')
  },
  {
    title: 'Trigonometrie pentru avansați',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date('2024-05-01T13:00:00Z')
  },
  {
    title: 'Probleme de matematică aplicată',
    icon: 'crayons',
    subject: 'Matematică',
    due: new Date('2024-05-10T10:00:00Z')
  }
];

const assignments_2 = [
  {
    title: 'Calculul integralei definite',
    icon: 'computer',
    subject: 'Matematică',
    due: new Date('2024-02-20T15:00:00Z')
  },
  {
    title: 'Algoritmi și complexitate',
    icon: 'book',
    subject: 'Matematică',
    due: new Date('2024-03-05T10:00:00Z')
  },
  {
    title: 'Ecuații diferențiale',
    icon: 'tube',
    subject: 'Matematică',
    due: new Date('2024-03-15T14:30:00Z')
  },
  {
    title: 'Serii și succesiuni',
    icon: 'compass',
    subject: 'Matematică',
    due: new Date('2024-04-01T12:00:00Z')
  },
  {
    title: 'Algebră liniară',
    icon: 'computer',
    subject: 'Matematică',
    due: new Date('2024-04-10T09:00:00Z')
  },
  {
    title: 'Teoreme fundamentale',
    icon: 'hat',
    subject: 'Matematică',
    due: new Date('2024-05-05T11:00:00Z')
  },
  {
    title: 'Calcul diferențial',
    icon: 'computer',
    subject: 'Matematică',
    due: new Date('2024-05-15T10:30:00Z')
  }
];

const assignments_3 = [
  {
    title: 'Probleme de algebră',
    icon: 'book',
    subject: 'Matematică',
    due: new Date('2024-01-20T10:00:00Z')
  },
  {
    title: 'Trigonometrie de bază',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date('2024-02-10T13:00:00Z')
  },
  {
    title: 'Probabilitate și statistici',
    icon: 'compass',
    subject: 'Matematică',
    due: new Date('2024-03-01T15:00:00Z')
  },
  {
    title: 'Funcții trigonometrice',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date('2024-03-20T11:30:00Z')
  },
  {
    title: 'Calcul diferențial avansat',
    icon: 'computer',
    subject: 'Matematică',
    due: new Date('2024-04-01T09:00:00Z')
  },
  {
    title: 'Teoria numerelor',
    icon: 'book',
    subject: 'Matematică',
    due: new Date('2024-04-15T16:00:00Z')
  },
  {
    title: 'Matematica probabilităților',
    icon: 'crayons',
    subject: 'Matematică',
    due: new Date('2024-05-01T14:00:00Z')
  }
];

const assignments_4 = [
  {
    title: 'Exerciții de geometrie',
    icon: 'compass',
    subject: 'Matematică',
    due: new Date('2024-01-15T12:00:00Z')
  },
  {
    title: 'Rădăcini pătrate și cubice',
    icon: 'calculator',
    subject: 'Matematică',
    due: new Date('2024-02-05T10:30:00Z')
  },
  {
    title: 'Calculul limitelor',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date('2024-03-01T13:00:00Z')
  },
  {
    title: 'Studii de caz matematice',
    icon: 'book',
    subject: 'Matematică',
    due: new Date('2024-03-25T15:00:00Z')
  },
  {
    title: 'Teoria grafurilor',
    icon: 'crayons',
    subject: 'Matematică',
    due: new Date('2024-04-10T11:00:00Z')
  },
  {
    title: 'Fizica matematică',
    icon: 'tube',
    subject: 'Matematică',
    due: new Date('2024-04-20T09:30:00Z')
  },
  {
    title: 'Probleme de matematică aplicată',
    icon: 'computer',
    subject: 'Matematică',
    due: new Date('2024-05-05T12:30:00Z')
  }
];

export default function Assignments() {
  const assignments = useGetStudentOrganizationAssignments();

  if (assignments.isPending) {
    return <p>Loading...</p>;
  }

  if (assignments.isError) {
    return <p>Error: {assignments.error.message}</p>;
  }

  let missingAssignments: Post[] = [];
  let noDueDateAssignments: Post[] = [];
  let thisWeekAssignments: Post[] = [];
  let laterAssignments: Post[] = [];

  assignments.data.forEach((assignment) => {
    if (!assignment.dueDate) {
      noDueDateAssignments.push(assignment);
    } else if (new Date(assignment.dueDate).getTime() < new Date().getTime()) {
      missingAssignments.push(assignment);
    } else if (
      new Date(assignment.dueDate).getTime() <
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    ) {
      thisWeekAssignments.push(assignment);
    } else {
      laterAssignments.push(assignment);
    }
  });

  return (
    <AnimatedPage
      key='assignments'
      className='items-start gap-4 !overflow-auto'
    >
      <AssignmentColumn assignments={missingAssignments} title='Missing' />
      <AssignmentColumn
        assignments={noDueDateAssignments}
        title='No due date'
      />
      <AssignmentColumn assignments={thisWeekAssignments} title='This week' />
      <AssignmentColumn assignments={laterAssignments} title='Later' />
    </AnimatedPage>
  );
}
