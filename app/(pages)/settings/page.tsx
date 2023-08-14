import { BillingTable } from '@/app/components/content/BillingTable';
import { SettingsTab } from '@/app/components/content/SettingTabs';
import { PaymentMethod } from '@/app/components/content/payment-method/PaymentMethod';

function SettingsPage() {
  return (
    <main className='flex-1'>
      <div className='relative mx-auto'>
        <div className='pb-16 pt-8'>
          <div className='px-4 sm:px-6 lg:px-0'>
            <h1 className='text-2xl font-medium leading-7 text-gray-900'>
              Settings
            </h1>
            <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>
              Manage your team and preferences here.
            </p>
          </div>
          <div className='px-4 sm:px-6 lg:px-0'>
            <div className='py-6'>
              <SettingsTab />
              <PaymentMethod />
              <BillingTable />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SettingsPage;
