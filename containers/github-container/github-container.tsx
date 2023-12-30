import React from 'react';
import { ModeToggle } from '@/components/mode-toggler';

import { SearchInputBox } from '@/components/search-input-box/search-input-box';
export const GithubContainer = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <ModeToggle />
      <div className='flex flex-col  w-[45rem]'>
        <SearchInputBox />

        <div className=''>GithubContainer GithubContainer</div>
        <div className=''>GithubContainer GithubContainer</div>
        <div className=''>GithubContainer GithubContainer</div>
      </div>
    </div>
  );
};
