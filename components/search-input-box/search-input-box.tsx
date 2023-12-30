import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import searchIcon from '@/public/assets/icon-search.svg';

export const SearchInputBox = () => {
  return (
    <div className='rounded-[0.93rem bg-white] flex items-center relative w-full my-6 shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)]'>
      <Image
        src={searchIcon}
        alt={'searchIcon'}
        width={20}
        height={20}
        className='absolute left-4 w-6 h-6 z-10'
      />
      <Input
        type='text'
        placeholder='Search GitHub username…'
        className='rounded-[0.95rem]  text-lg  pl-14 pr-20 h-[4rem] w-full'
      />
      <Button className='absolute right-2 h-[3.12rem] bg-[#0079FF] rounded-r-[0.62rem] w-[6.6rem]'>
        Search
      </Button>
    </div>
  );
};
