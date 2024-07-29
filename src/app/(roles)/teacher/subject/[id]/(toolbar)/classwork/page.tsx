'use client';

import { PostSection } from '@/components/post-section';
import { PostSectionModel } from '@/lib/types';
import { Button } from '@nextui-org/button';
import AnimatedPage from '@/components/animated-page';

const sections: PostSectionModel[] = [
  {
    name: 'Ecuații Diferentiale',
    posts: [
      {
        type: 'Assignment',
        timestamp: new Date('2024-01-15T10:30:00Z'),
        comments: 2,
        attachments: 2,
        member: 'Prof. Ionescu',
        title: 'Analiza Serii Temporale'
      },
      {
        type: 'Assignment',
        timestamp: new Date('2024-02-20T14:00:00Z'),
        comments: 3,
        attachments: 1,
        member: 'Dr. Georgescu',
        title: 'Modele Matematice'
      }
    ]
  },
  {
    name: 'Programare în Python',
    posts: [
      {
        type: 'Assignment',
        timestamp: new Date('2024-03-10T09:00:00Z'),
        comments: 4,
        attachments: 3,
        member: 'Prof. Smith',
        title: 'Proiect Python'
      },
      {
        type: 'Assignment',
        timestamp: new Date('2024-04-05T13:45:00Z'),
        comments: 1,
        attachments: 2,
        member: 'Dr. Marin',
        title: 'Algoritmi de Sortare'
      }
    ]
  },
  {
    name: 'Algebra Liniară',
    posts: [
      {
        type: 'Assignment',
        timestamp: new Date('2024-02-25T11:30:00Z'),
        comments: 2,
        attachments: 1,
        member: 'Prof. Radu',
        title: 'Transformări Lineare'
      },
      {
        type: 'Assignment',
        timestamp: new Date('2024-01-30T08:00:00Z'),
        comments: 3,
        attachments: 3,
        member: 'Dr. Luca',
        title: 'Sisteme de Ecuații'
      }
    ]
  },
  {
    name: 'Statistica Aplicată',
    posts: [
      {
        type: 'Assignment',
        timestamp: new Date('2024-03-15T10:00:00Z'),
        comments: 4,
        attachments: 2,
        member: 'Prof. Costin',
        title: 'Analiza Varianței'
      },
      {
        type: 'Assignment',
        timestamp: new Date('2024-04-01T15:30:00Z'),
        comments: 2,
        attachments: 1,
        member: 'Dr. Marius',
        title: 'Regresie Liniară'
      }
    ]
  }
];

export default function Classwork() {
  return (
    <AnimatedPage
      key='classwork'
      className='flex flex-col gap-6 overflow-auto pb-4 scrollbar-hide'
    >
      <Button className='flex h-auto shrink-0 items-center justify-center gap-2.5 rounded-full bg-white/70 px-4 py-3'>
        <i className='fa fa-plus text-2xl text-primary-900' />
        <label className='min-h-fit text-[0.875rem] font-semibold text-primary-900'>
          New section
        </label>
      </Button>
      {sections.map((section, index) => (
        <PostSection key={index} {...section} />
      ))}
    </AnimatedPage>
  );
}
