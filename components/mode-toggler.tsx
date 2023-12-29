'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import moonIcon from '@/public/assets/icon-moon.svg';
import sunIcon from '@/public/assets/icon-sun.svg';
import { DevFinder } from './svg-components/svg-components';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const getUserDetail = async () => {
    const request = await fetch('https://api.github.com/users/syammed2429');
    const response = await request.json();
    console.log('response:', response);
  };
  getUserDetail();

  return (
    <div className='flex justify-between w-[45rem]'>
      <div>
        <DevFinder />
      </div>
      {theme === 'dark' ? (
        <button
          className='flex items-center gap-3 cursor-pointer'
          onClick={() => setTheme('light')}
          tabIndex={0}
        >
          Light
          <Image src={sunIcon} alt={'sunIcon'} />
        </button>
      ) : (
        <button
          className='flex items-center gap-3 cursor-pointer'
          onClick={() => setTheme('dark')}
          tabIndex={0}
        >
          Dark <Image src={moonIcon} alt={'moonIcon'} />
        </button>
      )}
    </div>
  );
}
