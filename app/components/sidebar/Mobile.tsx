'use client';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import {
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { SidebarItem } from './SidebarItem';
import { useNavContext } from '@/app/providers/NavProvider';
import { navigation, secondaryNavigation } from '@/app/data/navigation';

import appLogo from '../../../public/logos/app-logo.png';

export function MobileSidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useNavContext();

  return (
    <>
      <div>
        <Transition.Root show={isSidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 lg:hidden'
            onClose={setIsSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute right-0 top-0 -mr-14 p-1'>
                      <button
                        type='button'
                        className='flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none'
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                        <span className='sr-only'>Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex flex-shrink-0 items-center px-3 mt-3 gap-4'>
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
                  <div className='mt-2 flex flex-1 flex-col overflow-y-auto pt-1'>
                    <nav className='mt-6 px-3 flex-grow'>
                      <div className='space-y-1'>
                        {navigation.map((item) => (
                          <SidebarItem key={item.name} item={item} />
                        ))}
                      </div>
                      <div className='mt-8'>
                        {/* Secondary navigation */}
                        <div className='mt-1 space-y-1'>
                          {secondaryNavigation.map((item) => (
                            <SidebarItem key={item.name} item={item} />
                          ))}
                        </div>
                      </div>
                    </nav>

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
                            <span className='truncate text-sm font-medium text-gray-900'>
                              Olivia Rhye
                            </span>
                            <span className='truncate text-sm text-gray-500'>
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
                </Dialog.Panel>
              </Transition.Child>
              <div className='w-14 flex-shrink-0' aria-hidden='true'>
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}
