import { ReactNode } from 'react';
import { Button } from '@nextui-org/button';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col-reverse gap-6 overflow-hidden min-[900px]:flex-row'>
      {children}
      <div className='flex min-w-max flex-col gap-6 scrollbar-hide min-[900px]:overflow-y-auto min-[900px]:pb-4'>
        {/*<div className='flex flex-col gap-2.5 rounded-[1.25rem] bg-white/70 p-4'>*/}
        {/*  <div className='flex gap-2'>*/}
        {/*    <i className='fa fa-hammer text-2xl text-primary-900' />*/}
        {/*    <h1 className='text-base font-semibold text-primary-900'>Tools</h1>*/}
        {/*  </div>*/}
        {/*  <div className='h-12 bg-white px-10 text-[0.875rem] font-semibold text-primary-900'>*/}
        {/*    Announcement*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className='flex flex-col gap-2.5 rounded-[1.25rem] bg-white/70 p-4'>
          <div className='flex gap-2'>
            <i className='fa fa-hammer text-2xl text-primary-900' />
            <h1 className='text-base font-semibold text-primary-900'>Create</h1>
          </div>
          <div className='grid grid-cols-1 gap-2.5 sm:grid-cols-2 min-[900px]:flex min-[900px]:flex-col'>
            <Button
              startContent={
                <i className='fa fa-comment text-xl text-primary-900' />
              }
              className='h-12 bg-white px-10 text-[0.875rem] font-semibold text-primary-900'
            >
              Announcement
            </Button>
            <Button
              startContent={
                <i className='fa fa-file-lines text-xl text-primary-900' />
              }
              className='h-12 bg-white px-10 text-[0.875rem] font-semibold text-primary-900'
            >
              Material
            </Button>
            <Button
              startContent={
                <i className='fa fa-file-check text-xl text-primary-900' />
              }
              className='h-12 bg-white px-10 text-[0.875rem] font-semibold text-primary-900'
            >
              Assignment
            </Button>
            <Button
              startContent={
                <i className='fa fa-list text-xl text-primary-900' />
              }
              className='h-12 bg-white px-10 text-[0.875rem] font-semibold text-primary-900'
            >
              Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
