'use client';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import { CheckIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline';

import { classNames } from '@/app/utils/classNames';
import { billingHistory as data } from '@/app/data/billing';

export function BillingTable() {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedItems, setSelectedItems] = useState<(typeof data)[0][]>([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedItems.length > 0 && selectedItems.length < data.length;
    setChecked(selectedItems.length === data.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedItems]);

  function toggleAll() {
    setSelectedItems(checked || indeterminate ? [] : data);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-medium leading-6 text-gray-900'>
            Billing History
          </h1>
        </div>
        <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
          <button
            type='button'
            className='inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          >
            <CloudArrowDownIcon
              className='-ml-0.5 h-5 w-5 stroke-gray-700'
              aria-hidden='true'
            />
            Download all
          </button>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
              <div className='relative'>
                {selectedItems.length > 0 && (
                  <div className='absolute left-12 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12'>
                    <button
                      type='button'
                      className='inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white'
                    >
                      Bulk edit
                    </button>
                    <button
                      type='button'
                      className='inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white'
                    >
                      Delete all
                    </button>
                  </div>
                )}
                <table className='min-w-full table-fixed divide-y divide-gray-300'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th scope='col' className='relative px-6 sm:w-12'>
                        <input
                          type='checkbox'
                          className='absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600'
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope='col'
                        className='min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900'
                      >
                        Invoice
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Amount
                      </th>
                      <th
                        scope='col'
                        className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'
                      >
                        Date
                      </th>
                      <th
                        scope='col'
                        className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell'
                      >
                        Status
                      </th>
                      <th
                        scope='col'
                        className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 xl:table-cell'
                      >
                        Users on plan
                      </th>
                      <th
                        scope='col'
                        className='hidden relative py-3.5 pl-3 pr-4 sm:pr-3 lg:table-cell'
                      >
                        <span className='sr-only'>Download</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {data.map((item) => (
                      <tr
                        key={item.id}
                        className={
                          selectedItems.includes(item)
                            ? 'bg-gray-50'
                            : undefined
                        }
                      >
                        <td className='relative px-6 sm:w-12'>
                          {selectedItems.includes(item) && (
                            <div className='absolute inset-y-0 left-0 w-0.5 bg-purple-600' />
                          )}
                          <input
                            type='checkbox'
                            className='absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600'
                            value={item.id}
                            checked={selectedItems.includes(item)}
                            onChange={(e) =>
                              setSelectedItems(
                                e.target.checked
                                  ? [...selectedItems, item]
                                  : selectedItems.filter((p) => p !== item)
                              )
                            }
                          />
                        </td>
                        <td
                          className={classNames(
                            'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                            selectedItems.includes(item)
                              ? 'text-purple-600'
                              : 'text-gray-900'
                          )}
                        >
                          {item.name}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {item.amount}
                        </td>
                        <td className='hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell'>
                          {item.date}
                        </td>
                        <td className='hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell'>
                          <span className='inline-flex items-center gap-x-0.5 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700'>
                            <CheckIcon className='h-3 w-3' aria-hidden='true' />
                            {item.status}
                          </span>
                        </td>
                        <td className='hidden px-6 py-3 text-sm font-medium text-gray-500 xl:table-cell'>
                          <div className='flex items-center space-x-2'>
                            <div className='flex flex-shrink-0 -space-x-1'>
                              {item.users.map((user) => (
                                <Image
                                  key={user.handle}
                                  className='h-6 w-6 max-w-none rounded-full ring-2 ring-white'
                                  src={user.imageUrl}
                                  alt={user.name}
                                  width={24}
                                  height={24}
                                />
                              ))}
                              {item.totalUsers > item.users.length ? (
                                <span className='h-6 w-6 inline-flex items-center justify-center bg-gray-50 rounded-full ring-2 ring-white text-xs font-medium pr-0.5'>
                                  +{item.totalUsers - item.users.length}
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </td>
                        <td className='hidden whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium lg:table-cell'>
                          <CloudArrowDownIcon className='h-6 w-6 stroke-gray-500' />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
