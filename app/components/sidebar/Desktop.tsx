'use client';
import Image from 'next/image';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { navigation, secondaryNavigation } from '@/app/data/navigation';
import { classNames } from '@/app/utils/classNames';

import appLogo from '../../../public/logos/app-logo.png';

export function DesktopSidebar() {
  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-white lg:pb-4 lg:pt-5'>
      {/* App logo and name */}
      <div className='flex items-center px-3 mt-3 gap-2'>
        <Image
          src={appLogo}
          alt='app logo'
          width={32}
          height={32}
          unoptimized
        />
        <h1 className='text-xl font-medium leading-6 text-gray-900'>
          Untitled UI
        </h1>
      </div>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className='mt-2 flex flex-1 flex-col overflow-y-auto pt-1'>
        {/* Sidebar Search */}
        <div className='mt-2 px-3'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <div className='relative mt-1 rounded-md shadow-sm'>
            <div
              className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'
              aria-hidden='true'
            >
              <MagnifyingGlassIcon
                className='h-4 w-4 text-gray-400'
                aria-hidden='true'
              />
            </div>
            <input
              type='text'
              name='search'
              id='search'
              className='block w-full rounded-md border-0 py-1.5 pl-9 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='Search'
            />
          </div>
        </div>
        {/* Navigation */}
        <nav className='mt-4 px-3 flex-grow'>
          <div className='space-y-1'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-gray-600'
                      : 'text-gray-500 group-hover:text-gray-600',
                    'mr-3 h-6 w-6 flex-shrink-0'
                  )}
                  aria-hidden='true'
                />
                {item.name}
                {item.count ? (
                  <span
                    className='ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-700'
                    aria-hidden='true'
                  >
                    {item.count}
                  </span>
                ) : null}
              </a>
            ))}
          </div>
          {/* Secondary navigation */}
          <div className='mt-4'>
            <div className='mt-1 space-y-1'>
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? 'text-gray-600'
                        : 'text-gray-500 group-hover:text-gray-600',
                      'mr-3 h-6 w-6 flex-shrink-0'
                    )}
                    aria-hidden='true'
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* What's new */}
          <div className='bg-gray-50 px-4 py-6 my-4 rounded-lg'>
            <p className='mb-3 text-sm leading-4 font-medium text-gray-900'>
              New features are available!
            </p>
            <p className='mb-3 text-sm font-light text-gray-500'>
              Check out the new dashboard view. Pages load faster.
            </p>
            <Image
              className='aspect-[3/2] w-full rounded-lg object-cover'
              src='/images/sidebar-img.png'
              alt=''
              width={230}
              height={155}
            />
            <div className='flex flex-shrink-0 space-x-4 mt-6'>
              <button type='button' className='block text-sm text-gray-500'>
                Dismiss
              </button>
              <button
                type='button'
                className='rounded-md font-medium text-purple-600 hover:text-purple-500'
              >
                What&apos;s new?
              </button>
            </div>
          </div>
        </nav>
        {/* User avatar */}
        <div className='px-3 mb-4 border-t border-gray-200'>
          <div className='flex items-center justify-between mt-5'>
            <span className='flex min-w-0 items-center justify-between space-x-3'>
              <Image
                className='rounded-full'
                src='/images/avatar.png'
                alt='avatar'
                width={40}
                height={40}
              />
              <span className='flex min-w-0 flex-1 flex-col'>
                <span className='truncate text-sm leading-6 font-medium text-gray-900'>
                  Olivia Rhye
                </span>
                <span className='truncate text-sm font-light text-gray-500'>
                  olivia@untitledui.com
                </span>
              </span>
            </span>
            <ArrowRightOnRectangleIcon
              className='h-6 w-6 self-start text-gray-500'
              aria-hidden='true'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
