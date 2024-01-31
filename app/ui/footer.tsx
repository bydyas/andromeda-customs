'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/app/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '../lib/utils';

const links = [
  {
    title: 'help',
    href: '/help',
  },
  {
    title: 'about',
    href: '/about',
  },
  {
    title: 'jobs',
    href: '/jobs',
  },
  {
    title: 'developers',
    href: '/developers',
  },
  {
    title: 'user agreement',
    href: '/user-agreement',
  },
  {
    title: 'privacy',
    href: '/privacy',
  },
  {
    title: `Andromeda Customers ©${new Date().getFullYear()}`,
    href: '/privacy',
  },
];

export function Footer() {
  return (
    <footer className="border-border/40 container rounded-sm border-t bg-white pb-1 pt-1 lg:mb-2 lg:h-12 lg:max-w-screen-lg lg:border lg:pb-0 lg:pt-0 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <NavigationMenu className="h-full max-w-full">
        <NavigationMenuList className="flex-wrap items-center justify-center lg:flex-nowrap">
          {links.map((link, idx) => (
            <NavigationMenuItem key={idx} className="uppercase">
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'text-xs')}
                >
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </footer>
  );
}
