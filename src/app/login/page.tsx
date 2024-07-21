'use client';

import FormInput from '@/components/form-input';
import PrimaryButton from '@/components/primary-button';
import Logo from '@/components/logo';
import { motion } from 'framer-motion';
import { RefObject, useEffect, useRef, useState } from 'react';
import LogoExpanded from '@/components/logo-expanded';

export default function Page() {
  const formRef = useRef<HTMLDivElement>(null);

  const [canRender, setCanRender] = useState<boolean>(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  return (
    <main className='bg-secondary-200 w-full h-full flex justify-center items-center relative overflow-hidden px-5 sm:px-8'>
      <div
        ref={formRef}
        className='relative z-50  w-full max-w-[40rem] bg-secondary-50/70 shadow-[0_0_75.9px_-2px_rgba(0,0,0,.2)] rounded-[2rem] px-6 sm:px-12 pt-9 pb-20 sm:pb-24 flex items-center flex-col backdrop-blur-[17.5rem]'
      >
        <LogoExpanded className='hidden sm:block' />
        <Logo className='block sm:hidden' />
        <div className='flex flex-col w-full gap-6'>
          <form className='flex flex-col w-full gap-9 items-center'>
            <h1 className='text-secondary-900 font-bold text-xl sm:text-[2rem] pt-4 sm:pt-10'>
              Login
            </h1>
            <div className='flex flex-col gap-4 w-full'>
              <FormInput placeholder='User...' label='User' />
              <FormInput placeholder='Password...' label='Password' password />
            </div>
            <PrimaryButton type='submit' className='w-full'>
              Login
            </PrimaryButton>
          </form>
          <div className='flex justify-between items-center gap-4'>
            <span className='font-semibold text-xs sm:text-base text-neutral-800'>
              Forgot your password? Click here to reset
            </span>
            <i className='fa fa-arrow-right text-2xl text-black cursor-pointer !hidden sm:!flex' />
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <img
          className='w-[90%]  select-none'
          src='/white-ellipse.svg'
          alt='ellipse'
        />
      </div>
      {canRender ? (
        <div className='absolute top-0 left-0 w-full h-full'>
          <FloatingElements originRef={formRef} />
        </div>
      ) : (
        ''
      )}
    </main>
  );
}

function FloatingElements({
  originRef
}: {
  originRef: RefObject<HTMLDivElement>;
}) {
  const [bBox, setBBox] = useState<DOMRect>(
    originRef.current!.getBoundingClientRect()
  );

  const ref = useRef(null);

  useEffect(() => {
    function onResize() {
      setBBox(originRef.current!.getBoundingClientRect());
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <div className='hidden sm:block'>
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.left,
            y: bBox.top
          }}
          animate={{
            x: bBox.left - 150,
            y: bBox.top - 80
          }}
          src='/hat.png'
          alt='hat'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.left,
            y: bBox.top + (20 / 100) * bBox.height
          }}
          animate={{
            x: bBox.left - 165,
            y: bBox.top + (20 / 100) * bBox.height
          }}
          src='/crayons.png'
          alt='crayons'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.left,
            y: bBox.top + (40 / 100) * bBox.height
          }}
          animate={{
            x: bBox.left - 195,
            y: bBox.top + (40 / 100) * bBox.height
          }}
          src='/leaf.png'
          alt='leaf'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.left,
            y: bBox.bottom - 120
          }}
          animate={{
            x: bBox.left - 105,
            y: bBox.bottom - 75
          }}
          src='/books.png'
          alt='books'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.left,
            y: bBox.top + (16 / 100) * bBox.height
          }}
          animate={{
            x: bBox.left - 370,
            y: bBox.top + (16 / 100) * bBox.height
          }}
          src='/computer.png'
          alt='computer'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.left,
            y: bBox.bottom - 180,
            rotate: -70
          }}
          animate={{
            x: bBox.left - 330,
            y: bBox.bottom - 180,
            rotate: -70
          }}
          src='/tube.png'
          alt='tube'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.right - 100,
            y: bBox.top
          }}
          animate={{
            x: bBox.right - 50,
            y: bBox.top - 67
          }}
          src='/tube.png'
          alt='tube'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.right - 100,
            y: bBox.top + 90
          }}
          animate={{
            x: bBox.right - 73,
            y: bBox.top + 90
          }}
          src='/todo.png'
          alt='todo'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.right - 100,
            y: bBox.top + 140
          }}
          animate={{
            x: bBox.right + 200,
            y: bBox.top + 140
          }}
          src='/compass.png'
          alt='compass'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.right - 100,
            y: bBox.top + 290
          }}
          animate={{
            x: bBox.right - 53,
            y: bBox.top + 290
          }}
          src='/flask.png'
          alt='flask'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.right - 100,
            y: bBox.top + 340
          }}
          animate={{
            x: bBox.right + 150,
            y: bBox.top + 340
          }}
          src='/book.png'
          alt='book'
        />
        <motion.img
          className='absolute select-none'
          initial={{
            x: bBox.right - 100,
            y: bBox.bottom - 160
          }}
          animate={{
            x: bBox.right - 45,
            y: bBox.bottom - 140
          }}
          src='/microscope.png'
          alt='microscope'
        />
      </div>
      {/* Mobile */}
      <div className='block sm:hidden'>
        <motion.img
          className='absolute select-none w-[9.375rem]'
          animate={{
            x: [bBox.left, bBox.left - 37, bBox.left - 37],
            y: [bBox.top - 20, bBox.top - 150, bBox.top - 82],
            // @ts-ignore
            'z-index': [40, 1000, 1000, 1000]
          }}
          transition={{
            type: 'keyframes',
            damping: 5,
            stiffness: 100
          }}
          src='/hat.png'
          alt='hat'
        />
        <motion.img
          className='absolute select-none w-[9.625rem]'
          initial={{
            x: bBox.left + 120,
            y: bBox.top,
            scaleX: -1,
            rotate: 10
          }}
          animate={{
            x: bBox.left + bBox.width / 2 - 77,
            y: bBox.top - 105
          }}
          src='/crayons.png'
          alt='crayons'
        />
        <motion.img
          className='absolute select-none w-[8.5rem]'
          initial={{
            x: bBox.right - 90,
            y: bBox.top
          }}
          animate={{
            x: bBox.right - 90,
            y: bBox.top - 75
          }}
          src='/todo.png'
          alt='todo'
        />

        <motion.img
          className='absolute select-none w-[11.75rem]'
          animate={{
            x: [bBox.left, bBox.left - 65, bBox.left - 65],
            y: [bBox.bottom - 120, bBox.bottom + 15, bBox.bottom - 80],
            // @ts-ignore
            'z-index': [40, 1000, 1000, 1000]
          }}
          transition={{
            type: 'keyframes',
            damping: 5,
            stiffness: 100
          }}
          src='/leaf.png'
          alt='leaf'
        />
        <motion.img
          className='absolute select-none w-[7.1875rem]'
          initial={{
            x: bBox.left + bBox.width / 2 - 77,
            y: bBox.bottom - 120,
            scaleX: -1,
            rotate: 10
          }}
          animate={{
            x: bBox.left + bBox.width / 2 - 77,
            y: bBox.bottom - 23
          }}
          src='/compass.png'
          alt='compass'
        />
        <motion.img
          className='absolute select-none w-[14.125rem]'
          animate={{
            x: [bBox.right - 230, bBox.right - 178, bBox.right - 178],
            y: [bBox.bottom - 120, bBox.bottom + 15, bBox.bottom - 60],
            // @ts-ignore
            'z-index': [40, 1000, 1000, 1000]
          }}
          transition={{
            type: 'keyframes',
            damping: 5,
            stiffness: 100
          }}
          src='/book.png'
          alt='book'
        />
      </div>
    </>
  );
}
