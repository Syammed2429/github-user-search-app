import React, { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import searchIcon from '@/public/assets/icon-search.svg';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

interface SearchInputBoxProps {
  onSearch: (searchText: string) => void;
  resultsNotFound?: boolean;
}

export const SearchInputBox: FC<SearchInputBoxProps> = ({
  onSearch,
  resultsNotFound,
}) => {
  const { theme } = useTheme();

  // states
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  const handleSearch = () => {
    onSearch(searchKeyWord);
  };
  return (
    <div
      className={cn(
        `rounded-[0.93rem]  flex items-center relative mx-2 md:mx-0 my-6`,
        {
          'shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)]':
            theme === 'light',
        }
      )}
    >
      <Image
        src={searchIcon}
        alt={'searchIcon'}
        width={20}
        height={20}
        className='absolute left-4 w-4 md:w-6 h-4 md:h-6 z-10'
      />
      <Input
        type='text'
        placeholder='Search GitHub username…'
        className='rounded-[0.95rem]  text-sm md:text-lg  pl-10 pr-[8rem] md:pl-14 md:pr-[8rem] ring-0 h-[4rem] w-full border-none'
        onChange={(e) => {
          if (e.target.value === '') {
            onSearch('octocat');
          } else setSearchKeyWord(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch((e.target as HTMLInputElement).value);
          }
        }}
      />
      {resultsNotFound && (
        <div className='absolute top-12 md:top-5  md:right-[8rem] px-2 text-[#F74646] font-bold'>
          No results
        </div>
      )}
      <Button
        className='absolute right-2 h-[3.12rem] bg-[#0079FF] rounded-r-[0.62rem] w-[6.6rem]'
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};
