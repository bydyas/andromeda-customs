'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/app/ui/navigation-menu';
import Link from 'next/link';
import { Rocket, Truck, CreditCard, PaintBucket } from 'lucide-react';
import { cn } from '../lib/utils';
import { AppRoute } from '../lib/enums';

const links = [
  {
    title: 'Pick',
    icon: <Rocket />,
    href: AppRoute.NewProject,
  },
  {
    title: 'Customize',
    icon: <PaintBucket />,
    href: AppRoute.Customize,
  },
  {
    title: 'Ship',
    icon: <Truck />,
    href: AppRoute.Ship,
  },
  {
    title: 'Pay',
    icon: <CreditCard />,
    href: AppRoute.Pay,
  },
];

export function Steps() {
  // TODO: replace with the real one from store;
  const currentStep = 1;

  return (
    <div className="container relative py-2 md:py-4 lg:max-w-screen-lg lg:py-8 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <NavigationMenu className="m-auto">
        <NavigationMenuList className="gap-x-10 md:gap-x-16 lg:gap-x-24">
          {links.map((link, idx) => (
            <NavigationMenuItem key={idx} className="relative z-10">
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'flex gap-2 text-lg md:text-xl lg:text-2xl ',
                    idx + 1 <= currentStep && 'rounded-md bg-slate-100',
                    idx + 1 > currentStep &&
                      'pointer-events-none text-slate-100',
                  )}
                  aria-disabled={idx + 1 > currentStep}
                >
                  {link.icon}
                  <span className="hidden md:block">{link.title}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-slate-200"></div>
      </NavigationMenu>
    </div>
  );
}
