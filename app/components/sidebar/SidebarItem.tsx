'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import type { NavItem } from '@/app/data/navigation';
import { classNames } from '@/app/utils/classNames';

export function SidebarItem({ item }: { item: NavItem }) {
  const { href, name, count, icon: Icon } = item;

  const pathname = usePathname();
  const isActive = pathname.includes(item.href);

  return (
    <Link
      href={href}
      className={classNames(
        isActive
          ? 'bg-gray-100 text-gray-900'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
        'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon
        className={classNames(
          isActive
            ? 'text-gray-600'
            : 'text-gray-500 group-hover:text-gray-600',
          'mr-3 h-6 w-6 flex-shrink-0'
        )}
        aria-hidden='true'
      />
      {name}
      {count ? (
        <span
          className='ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-700'
          aria-hidden='true'
        >
          {count}
        </span>
      ) : null}
    </Link>
  );
}
