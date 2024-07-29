'use client';

import AssignmentColumn from '@/components/assignment-column';
import AnimatedPage from '@/components/animated-page';

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

export default function Assignments() {
  return (
    <AnimatedPage key='assignments' className='items-start gap-4 overflow-auto'>
      <AssignmentColumn assignments={assignments_1} title='Ongoing' />
      <AssignmentColumn assignments={assignments_2} title='To grade' />
      <AssignmentColumn
        assignments={assignments_3}
        title='Finished this week'
      />
    </AnimatedPage>
  );
}
