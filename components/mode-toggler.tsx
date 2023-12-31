'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import moonIcon from '@/public/assets/icon-moon.svg';
import sunIcon from '@/public/assets/icon-sun.svg';
import { DevFinder } from './svg-components/svg-components';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className='flex justify-between w-full px-3 md:px-0 md:w-[45rem]'>
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
