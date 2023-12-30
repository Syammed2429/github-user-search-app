'use client';

import React, { useState } from 'react';
import { ModeToggle } from '@/components/mode-toggler';

import { SearchInputBox } from '@/components/search-input-box/search-input-box';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const searchGitHubUsers = async (query: any) => {
  const [_search, userId] = query?.queryKey;
  const response = await axios.get(`https://api.github.com/users/${userId}`);
  return response.data;
};

export const GithubContainer = () => {
  const [searchedUser, setSearchedUser] = useState<string>('octocat');

  const { data } = useQuery({
    queryKey: ['github', searchedUser],
    queryFn: searchGitHubUsers,
  });
  console.log('data:', data);

  // '';

  return (
    <div className='flex flex-col items-center justify-center '>
      <ModeToggle />
      <div className='flex flex-col  w-[45rem]'>
        <SearchInputBox
          onSearch={(data) => setSearchedUser(data)}
          resultsNotFound={!data}
        />
        <div className=''>GithubContainer GithubContainer</div>
        <div className=''>GithubContainer GithubContainer</div>
        <div className=''>GithubContainer GithubContainer</div>
      </div>
    </div>
  );
};
