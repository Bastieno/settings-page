'use client';
import { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const emailData = [
  {
    id: 'primary',
    title: 'Send to my account email',
    value: 'olivia@untitledui.com'
  },
  {
    id: 'alternative',
    title: 'Send to an alternative email',
    value: 'billing@untitledui.com'
  }
];

export function ContactEmail() {
  const [selectedEmail, setSelectedEmail] = useState(emailData[0].id);
  const [alternativeEmail, setAlternativeEmail] = useState(emailData[1].value);

  return (
    <div className='py-6 sm:grid sm:grid-cols-3 sm:gap-4'>
      <dt className=''>
        <p className='text-sm leading-6 text-gray-900'>Contact email</p>
        <p className='mt-0 text-sm leading-6 text-gray-400'>
          Where should invoices be sent?
        </p>
      </dt>
      <dd className='mt-3 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-1'>
        <fieldset>
          <legend className='sr-only'>Email values</legend>
          <div className='space-y-5'>
            {emailData.map(({ id, title, value }) => (
              <div key={id} className='relative flex items-start'>
                <div className='flex h-6 items-center'>
                  <input
                    id={id}
                    aria-describedby={`${id}-description`}
                    value={id}
                    type='radio'
                    checked={id === selectedEmail}
                    onChange={(e) => setSelectedEmail(e.target.value)}
                    className='h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-600'
                  />
                </div>
                <div className='ml-3 w-full text-sm leading-6'>
                  <label htmlFor={id} className='text-sm text-gray-900'>
                    {title}
                  </label>
                  {id === 'alternative' ? (
                    <div className='relative mt-2 w-full rounded-md shadow-sm sm:w-[65%]'>
                      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                        <EnvelopeIcon
                          className='h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                      </div>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
                        placeholder='you@untitledui.com'
                        value={alternativeEmail}
                        onChange={(e) => setAlternativeEmail(e.target.value)}
                      />
                    </div>
                  ) : (
                    <p
                      id={`${id}-description`}
                      className='text-sm text-gray-500'
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </dd>
    </div>
  );
}
