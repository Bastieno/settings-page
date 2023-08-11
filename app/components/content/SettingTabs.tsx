'use client';

import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

import { tabs } from '@/app/data/tabs';
import type { Tab } from '@/app/data/tabs';
import { classNames } from '@/app/utils/classNames';

type TabsProps = {
  selected: Tab;
  setSelected: Dispatch<SetStateAction<Tab>>;
};

function MobileTabs({ selected, setSelected }: TabsProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className='sm:hidden'>
          <div className='relative mt-2'>
            <Listbox.Button className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6'>
              <span className='block truncate'>{selected.name}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {tabs.map((tab) => (
                  <Listbox.Option
                    key={tab.name}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-purple-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4'
                      )
                    }
                    value={tab}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {tab.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-purple-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}

function DesktopTabs({ selected, setSelected }: TabsProps) {
  return (
    <div className='hidden sm:block'>
      <nav
        className='isolate inline-flex rounded-lg shadow-sm'
        aria-label='Tabs'
      >
        {tabs.map((tab, tabIdx) => {
          const isSelected = tab.name === selected.name;
          return (
            <div
              key={tab.name}
              className={classNames(
                isSelected
                  ? 'text-purple-600'
                  : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group -ml-px relative overflow-hidden bg-white py-3 px-4 text-center text-sm font-medium cursor-pointer ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10'
              )}
              onClick={() => setSelected(tab)}
              aria-current={isSelected ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden='true'
                className={classNames(
                  isSelected ? 'bg-purple-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export function SettingsTab() {
  const [selected, setSelected] = useState(tabs[0]);
  const props = {
    selected,
    setSelected,
  };
  return (
    <>
      <MobileTabs {...props} />
      <DesktopTabs {...props} />
    </>
  );
}
