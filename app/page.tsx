'use client';
import NavProvider from './providers/NavProvider';
import { MobileSidebar } from './components/sidebar/Mobile';
import { DesktopSidebar } from './components/sidebar/Desktop';
import { MobileTopBar } from './components/sidebar/MobileTopbar';
import { SettingsTab } from './components/content/SettingTabs';
import { PaymentMethod } from './components/content/payment-method/PaymentMethod';
import { BillingTable } from './components/content/BillingTable';

export default function Home() {
  return (
    <NavProvider>
      <div>
        <MobileSidebar />
        <DesktopSidebar />
        {/* Content area */}
        <div className='lg:pl-72 bg-gray-50'>
          <div className='lg:px-8'>
            <div className='mx-auto flex flex-col'>
              <MobileTopBar />
              <main className='flex-1'>
                <div className='relative mx-auto'>
                  <div className='pb-16 pt-10'>
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
            </div>
          </div>
        </div>
      </div>
    </NavProvider>
  );
}
