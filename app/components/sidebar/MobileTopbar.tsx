'use client';
import Image from 'next/image';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';

import { useNavContext } from '@/app/providers/NavProvider';
import appLogo from '../../../public/logos/app-logo.png';

export function MobileTopBar () {
  const { setIsSidebarOpen } = useNavContext();

  return (
    <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden'>
      <div className='flex flex-grow items-center px-3 gap-4'>
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
      <button
        type='button'
        className='px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500'
        onClick={() => setIsSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <Bars3CenterLeftIcon
          className='h-8 w-8 stroke-gray-600'
          aria-hidden='true'
        />
      </button>
    </div>
  );
}
