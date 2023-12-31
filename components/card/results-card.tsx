import React, { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import {
  CompanyIcon,
  LinkIcon,
  LocationIcon,
  TwitterIcon,
} from '@/components/svg-components/svg-components';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface ResultsCardProps {
  data: any;
}

export const ResultsCard: FC<ResultsCardProps> = ({ data }) => {
  const { theme } = useTheme();
  const getTextClass = (theme: string | undefined) =>
    cn('flex gap-3', {
      'text-[#4B6A9B]': theme === 'light',
      'text-[#FFFFFF]': theme === 'dark',
    });

  const dateString = data?.created_at;
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <Card
      className={`  md:px-5
              ${
                theme === 'dark'
                  ? 'bg-[#1E2A47]'
                  : 'bg-[#FEFEFE] shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)]'
              }
              `}
    >
      <CardHeader className='flex flex-row items-start self-stretch gap-5 md:gap-10'>
        <Avatar className='h-[4.3rem] w-[4.3rem]'>
          <AvatarImage src={data?.avatar_url} alt={data?.login} />
          <AvatarFallback>{data?.login}</AvatarFallback>
        </Avatar>
        <div className='ml-2 space-y-8 flex-1'>
          <div className='flex flex-col md:flex-row justify-between '>
            <CardTitle>{data?.name}</CardTitle>
            <CardDescription className='my-2 md:mt-5'>
              <span className='text-sm opacity-80 font-normal'>
                Joined {formattedDate}
              </span>
            </CardDescription>
          </div>
          <Link
            href={data?.html_url}
            target='_blank'
            className='text-[#0079FF]'
          >
            @{data?.login}
          </Link>
          <div className='hidden md:block '>
            {data?.bio ? (
              <>{data?.bio}</>
            ) : (
              <span className='opacity-75 text-[#4B6A9B]'>
                This profile has no bio
              </span>
            )}{' '}
          </div>
          <div
            className={cn(
              'hidden md:flex items-center justify-between  px-5 h-[5.13rem]  rounded-[0.62rem]',
              {
                'bg-[#F6F8FF]': theme === 'light',
                'bg-[#141D2F]': theme === 'dark',
              }
            )}
          >
            <p className='flex flex-col gap-3'>
              Repos
              <span className='text-xl font-bold'>{data?.public_repos}</span>
            </p>
            <p className='flex flex-col gap-3'>
              Followers
              <span className='text-xl font-bold'>{data?.followers}</span>
            </p>
            <p className='flex flex-col gap-3'>
              Following
              <span className='text-xl font-bold'>{data?.following}</span>
            </p>
          </div>
          <div className='hidden md:grid grid-cols-2  gap-4 pt-8'>
            <div className={getTextClass(theme)}>
              <LocationIcon />
              <div>{data?.location}</div>
            </div>
            <div className={getTextClass(theme)}>
              <TwitterIcon />
              <div>
                {data?.twitter_username ? (
                  <>
                    <Link
                      href={`https://twitter.com/${data?.twitter_username}`}
                      target='_blank'
                    >
                      {data?.twitter_username}
                    </Link>
                  </>
                ) : (
                  <span className='opacity-75 text-[#4B6A9B]'>
                    Not Available
                  </span>
                )}
              </div>
            </div>
            <div className={getTextClass(theme)}>
              <LinkIcon />
              <div>
                {data?.blog ? (
                  <>
                    <Link href={`${data?.blog}`} target='_blank'>
                      {data?.blog}
                    </Link>
                  </>
                ) : (
                  <span className='opacity-75 text-[#4B6A9B]'>
                    Not Available
                  </span>
                )}
              </div>
            </div>
            <div className={getTextClass(theme)}>
              <CompanyIcon />
              {data?.company ? (
                <>
                  <Link
                    href={`https://github.com/${data?.company.replace(
                      '@',
                      ''
                    )}`}
                    target='_blank'
                  >
                    {data?.company}
                  </Link>
                </>
              ) : (
                <span className='opacity-75 text-[#4B6A9B]'>Not Available</span>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className='flex flex-col'>
        <div className='block md:hidden mb-5'>
          {data?.bio ? (
            <>{data?.bio}</>
          ) : (
            <span className='opacity-75 text-[#4B6A9B]'>
              This profile has no bio
            </span>
          )}{' '}
        </div>

        <div
          className={cn(
            'md:hidden flex  items-center justify-between  px-5 h-[5.13rem]  rounded-[0.62rem]',
            {
              'bg-[#F6F8FF]': theme === 'light',
              'bg-[#141D2F]': theme === 'dark',
            }
          )}
        >
          <p className='flex flex-col gap-3'>
            Repos
            <span className='text-xl font-bold'>{data?.public_repos}</span>
          </p>
          <p className='flex flex-col gap-3'>
            Followers
            <span className='text-xl font-bold'>{data?.followers}</span>
          </p>
          <p className='flex flex-col gap-3'>
            Following
            <span className='text-xl font-bold'>{data?.following}</span>
          </p>
        </div>
        <div className='flex flex-col md:hidden  gap-2 pt-8'>
          <div className={getTextClass(theme)}>
            <LocationIcon />
            <div>{data?.location}</div>
          </div>
          <div className={getTextClass(theme)}>
            <TwitterIcon />
            <div>
              {data?.twitter_username ? (
                <>
                  <Link
                    href={`https://twitter.com/${data?.twitter_username}`}
                    target='_blank'
                  >
                    {data?.twitter_username}
                  </Link>
                </>
              ) : (
                <span className='opacity-75 text-[#4B6A9B]'>Not Available</span>
              )}
            </div>
          </div>
          <div className={getTextClass(theme)}>
            <LinkIcon />
            <div>
              {data?.blog ? (
                <>
                  <Link href={`${data?.blog}`} target='_blank'>
                    {data?.blog}
                  </Link>
                </>
              ) : (
                <span className='opacity-75 text-[#4B6A9B]'>Not Available</span>
              )}
            </div>
          </div>
          <div className={getTextClass(theme)}>
            <CompanyIcon />
            {data?.company ? (
              <>
                <Link
                  href={`https://github.com/${data?.company.replace('@', '')}`}
                  target='_blank'
                >
                  {data?.company}
                </Link>
              </>
            ) : (
              <span className='opacity-75 text-[#4B6A9B]'>Not Available</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
