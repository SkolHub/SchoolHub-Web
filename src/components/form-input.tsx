'use client';

import { Input } from '@nextui-org/input';
import { useState } from 'react';

export default function FormInput({
  placeholder,
  label,
  password = false,
  register,
  error
}: {
  placeholder: string;
  label: string;
  password?: boolean;
  register: any;
  error?: string;
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <Input
        {...register}
        classNames={{
          label: 'text-black font-semibold text-base hidden sm:block',
          inputWrapper: 'rounded-full shadow-none',
          base: '!mt-0 sm:!mt-[calc(theme(fontSize.small)_+_10px)]'
        }}
        type={password && hidden ? 'password' : 'text'}
        labelPlacement='outside'
        label={label}
        placeholder={placeholder}
        endContent={
          password ? (
            <button className='focus:outline-none' type='button'>
              <i
                className={`fa ${hidden ? 'fa-eye-slash' : 'fa-eye'}`}
                onClick={() => {
                  setHidden(!hidden);
                }}
              />
            </button>
          ) : (
            ''
          )
        }
      />
      {error && <label className='text-red-500 text-sm leading-tight'>{error}</label>}
    </div>
  );
}
