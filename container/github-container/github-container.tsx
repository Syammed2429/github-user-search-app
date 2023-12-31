'use client';

import React, { useState } from 'react';
import { ModeToggle } from '@/components/mode-toggler';

import { SearchInputBox } from '@/components/search-input-box/search-input-box';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ResultsCard } from '@/components/card/results-card';

import { Skeleton } from '@/components/ui/skeleton';

const searchGitHubUsers = async (query: any) => {
  const [_search, userId] = query?.queryKey;
  const response = await axios.get(`https://api.github.com/users/${userId}`);
  return response.data;
};

export const GithubContainer = () => {
  const [searchedUser, setSearchedUser] = useState<string>('octocat');

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['github', searchedUser],
    queryFn: searchGitHubUsers,
  });

  return (
    <div className='flex flex-col items-center justify-center  '>
      <ModeToggle />
      <div className='flex flex-col  w-screen md:w-[45rem]'>
        <SearchInputBox
          onSearch={(data) => setSearchedUser(data)}
          resultsNotFound={!data}
        />

        {isFetching ? (
          <div className='flex items-center '>
            <Skeleton className='bg-gray-500 h-12 w-12 rounded-full' />
            <div className='space-y-2'>
              <Skeleton className='bg-gray-500 h-4 w-[250px]' />
              <Skeleton className='bg-gray-500 h-4 w-[200px]' />
            </div>
          </div>
        ) : (
          <ResultsCard data={data} />
        )}
      </div>
    </div>
  );
};
