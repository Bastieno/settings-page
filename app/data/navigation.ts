import {
  DocumentMagnifyingGlassIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
  Cog8ToothIcon,
  FlagIcon,
  ChartPieIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  {
    name: 'Dashboard',
    href: '#',
    icon: ChartPieIcon,
    current: false,
    count: '+20',
  },
  {
    name: 'Projects',
    href: '#',
    icon: DocumentMagnifyingGlassIcon,
    current: false,
    count: '10',
  },
  {
    name: 'Tasks',
    href: '#',
    icon: RectangleGroupIcon,
    current: false,
  },
  {
    name: 'Reporting',
    href: '#',
    icon: FlagIcon,
    current: false,
  },
  { name: 'Users', href: '#', icon: UsersIcon, current: false },
];

export const secondaryNavigation = [
  { name: 'Support', href: '#', icon: QuestionMarkCircleIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog8ToothIcon, current: true },
];
