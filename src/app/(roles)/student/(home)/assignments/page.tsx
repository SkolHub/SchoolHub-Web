'use client';

import { motion } from 'framer-motion';

const assignments: {
  title: string;
  subject: string;
  icon: string;
  due: Date;
}[] = [
  {
    title: 'Exerciții trigonometrie reeeeeeeeeeeeeeeeeeee',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date()
  },
  {
    title: 'Exerciții trigonometrie',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date()
  },
  {
    title: 'Exerciții trigonometrie',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date()
  },
  {
    title: 'Exerciții trigonometrie',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date()
  },
  {
    title: 'Exerciții trigonometrie',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date()
  },
  {
    title: 'Exerciții trigonometrie',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date()
  },
  {
    title: 'Exerciții trigonometrie',
    icon: 'leaf',
    subject: 'Matematică',
    due: new Date()
  }
];

export default function Assignments() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: 'keyframes',
        ease: 'easeInOut',
        duration: 0.2
      }}
      className='flex h-full w-full items-start gap-4 overflow-auto'
    >
      <AssignmentColumn assignments={assignments} title='Missing' />
      <AssignmentColumn assignments={assignments} title='No due date' />
      <AssignmentColumn assignments={assignments} title='This week' />
      <AssignmentColumn assignments={assignments} title='Later' />
      <AssignmentColumn assignments={assignments} title='Later' />
      <AssignmentColumn assignments={assignments} title='Later' />
      <AssignmentColumn assignments={assignments} title='Later' />
      <AssignmentColumn assignments={assignments} title='Later' />
      <AssignmentColumn assignments={assignments} title='Later' />
      <AssignmentColumn assignments={assignments} title='Later' />
    </motion.div>
  );
}

function AssignmentColumn({
  title,
  assignments
}: {
  title: string;
  assignments: {
    title: string;
    subject: string;
    icon: string;
    due: Date;
  }[];
}) {
  return (
    <div className='flex w-[20.5rem] min-w-fit flex-col gap-5 rounded-[1.25rem] bg-white/60 px-4 pb-4 pt-5'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-semibold text-primary-800'>{title}</h1>
        <label className='text-xl font-semibold text-primary-800'>
          {assignments.length}
        </label>
      </div>
      <div className='flex flex-col gap-2'>
        {assignments.map((assignment) => (
          <AssignmentCard {...assignment} />
        ))}
      </div>
    </div>
  );
}

function AssignmentCard({
  title,
  subject,
  icon,
  due
}: {
  title: string;
  subject: string;
  icon: string;
  due: Date;
}) {
  return (
    <div className='flex justify-between gap-2 rounded-2xl bg-white px-4 py-2'>
      <div className='flex flex-col'>
        <h3 className='max-w-[10rem] break-words text-[0.875rem] font-semibold text-primary-900'>
          {title}
        </h3>
        <div className='flex items-center'>
          <img className='h-6' src={`/${icon}.png`} alt='icon' />
          <label className='text-xs font-semibold text-primary-700'>
            {subject}
          </label>
        </div>
      </div>
      <div>
        <label className='text-xs font-semibold text-primary-600'>
          {due.toDateString()}
        </label>
      </div>
    </div>
  );
}
