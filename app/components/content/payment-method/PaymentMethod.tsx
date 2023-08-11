import { CardDetails } from './CardDetails';
import { ContactEmail } from './ContactEmail';

export function PaymentMethod() {
  return (
    <div className='mt-10 divide-y divide-gray-200'>
      <div className='space-y-1'>
        <h3 className='text-base font-semibold leading-7 text-gray-900'>
          Payment method
        </h3>
        <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>
          Update your billing details and address.
        </p>
      </div>
      <div className='mt-6'>
        <dl className='divide-y divide-gray-200'>
          <ContactEmail />
          <CardDetails />
        </dl>
      </div>
    </div>
  );
}
