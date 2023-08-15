import {
  DocumentMagnifyingGlassIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
  Cog8ToothIcon,
  FlagIcon,
  ChartPieIcon,
  RectangleGroupIcon
} from '@heroicons/react/24/outline';

export type NavItem = {
  name: string;
  href: string;
  icon: typeof ChartPieIcon;
  count?: string;
};

export const navigation: NavItem[] = [
  { name: 'Home', href: '/home', icon: HomeIcon },
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: ChartPieIcon,
    count: '+20'
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: DocumentMagnifyingGlassIcon,
    count: '10'
  },
  {
    name: 'Tasks',
    href: '/tasks',
    icon: RectangleGroupIcon
  },
  {
    name: 'Reporting',
    href: '/reporting',
    icon: FlagIcon
  },
  { name: 'Users', href: '/users', icon: UsersIcon }
];

export const secondaryNavigation: NavItem[] = [
  {
    name: 'Support',
    href: '/support',
    icon: QuestionMarkCircleIcon
  },
  { name: 'Settings', href: '/settings', icon: Cog8ToothIcon }
];
