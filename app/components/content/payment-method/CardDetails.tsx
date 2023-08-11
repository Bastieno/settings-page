'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

import { classNames } from '@/app/utils/classNames';
import visaLogo from '../../../../public/logos/visa.png';
import mastercardLogo from '../../../../public/logos/mastercard.png';

const cardData = [
  {
    id: 1,
    description: 'Visa ending in 1234',
    expiry: 'Expiry 06/2024',
    logo: visaLogo,
  },
  {
    id: 2,
    description: 'Mastercard ending in 1234',
    expiry: 'Expiry 06/2024',
    logo: mastercardLogo,
  },
];

export function CardDetails() {
  const [selectedCard, setSelectedCard] = useState(
    cardData[0]
  );

  return (
    <div className='py-6 sm:grid sm:grid-cols-3 sm:gap-4'>
      <dt>
        <p className='text-sm leading-6 text-gray-900'>Card details</p>
        <p className='mt-0 text-sm leading-6 text-gray-400'>
          Select default payment methods.
        </p>
      </dt>
      <dd className='mt-3 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-1'>
        <RadioGroup
          value={selectedCard}
          onChange={setSelectedCard}
        >
          <div className='grid grid-cols-1 gap-y-6'>
            {cardData.map((card) => (
              <RadioGroup.Option
                key={card.id}
                value={card}
                className={({ active }) =>
                  classNames(
                    active
                      ? 'border-purple-200 bg-purple-50'
                      : 'border-gray-200',
                    ''
                  )
                }
              >
                {({ checked }) => (
                  <div
                    className={classNames(
                      checked ? 'border-purple-200 bg-purple-50' : 'bg-white',
                      'relative flex gap-4 cursor-pointer rounded-lg border p-4 shadow-sm'
                    )}
                  >
                    <div className='flex items-start'>
                      <Image
                        src={card.logo}
                        alt={card.description}
                        width={40}
                        height={40}
                        unoptimized
                      />
                    </div>
                    <span className='flex flex-1'>
                      <span className='flex flex-col'>
                        <RadioGroup.Label
                          as='span'
                          className={classNames(
                            checked ? 'text-purple-900' : 'text-gray-900',
                            'block text-sm font-medium'
                          )}
                        >
                          {card.description}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as='span'
                          className={classNames(
                            checked ? 'text-purple-700' : 'text-gray-500',
                            'block text-sm'
                          )}
                        >
                          {card.expiry}
                        </RadioGroup.Description>
                        <RadioGroup.Description
                          as='div'
                          className='mt-4 text-sm font-medium text-gray-600'
                        >
                          <div className='flex flex-shrink-0 space-x-4'>
                            <button
                              type='button'
                              className={classNames(
                                checked ? 'text-purple-700' : 'text-gray-500',
                                'block text-sm'
                              )}
                            >
                              Set as default
                            </button>
                            <button
                              type='button'
                              className='rounded-md font-medium text-purple-600 hover:text-purple-500'
                            >
                              Edit
                            </button>
                          </div>
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? 'invisible' : '',
                        'h-5 w-5 text-purple-600'
                      )}
                      aria-hidden='true'
                    />
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </dd>
    </div>
  );
}
