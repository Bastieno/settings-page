'use client';
import { DesktopSidebar } from '../components/sidebar/Desktop';
import { MobileSidebar } from '../components/sidebar/Mobile';
import { MobileTopBar } from '../components/sidebar/MobileTopbar';
import NavProvider from '../providers/NavProvider';

function PageLayout({ children }: { children: React.ReactNode }) {

  return (
    <NavProvider>
      <div>
        <MobileSidebar />
        <DesktopSidebar />
        {/* Content area */}
        <div className='lg:pl-72 bg-gray-100 h-screen'>
          <div className='lg:px-8'>
            <div className='mx-auto flex flex-col'>
              <MobileTopBar />
              {children}
            </div>
          </div>
        </div>
      </div>
    </NavProvider>
  );
}

export default PageLayout;
