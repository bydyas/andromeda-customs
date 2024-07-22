'use client';

import Link from 'next/link';
import {
  Sparkles,
  ArrowRightSquare,
  Grip,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';
import { star_jedi } from '@/app/ui/fonts';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/app/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/avatar';
import { cn } from '@/app/lib/utils';
import { useEffect, useState } from 'react';
import { AppRoute } from '../lib/enums';

const links = [
  {
    title: 'new project',
    href: AppRoute.NewProject,
  },
  {
    title: 'share project',
    href: AppRoute.ShareProject,
  },
  {
    title: 'faq',
    href: AppRoute.FAQ,
  },
];

const socialNetworks = [
  {
    icon: <Instagram />,
    href: 'https://www.instagram.com/',
  },
  {
    icon: <Facebook />,
    href: 'https://www.meta.com/',
  },
  {
    icon: <Twitter />,
    href: 'https://twitter.com/',
  },
];

// TODO: replace with the real check-in;
const isAuth = false;

export function Header() {
  const [isMobileNavigationMenuOpen, setIsMobileNavigationMenuOpen] =
    useState<boolean>(false);

  useEffect(() => {
    if (isMobileNavigationMenuOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileNavigationMenuOpen]);

  const toggleMobileMenu = () => setIsMobileNavigationMenuOpen((prev) => !prev);

  return (
    <>
      <div
        className={cn(
          'container absolute z-40 h-screen translate-y-[-100%] bg-white pt-[65px] transition-transform',
          isMobileNavigationMenuOpen && 'translate-y-[0]',
        )}
      >
        <NavigationMenu className="mt-16 max-w-full flex-col">
          <NavigationMenuList className="flex-col gap-4">
            {links.map((link, idx) => (
              <NavigationMenuItem key={idx} onClick={toggleMobileMenu}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'hover:text-foreground/80 text-foreground/60 text-xl uppercase transition-colors',
                    )}
                  >
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Link
                href={isAuth ? AppRoute.Profile : AppRoute.Login}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'hover:text-foreground/80 text-foreground/60 text-xl uppercase transition-colors',
                  )}
                >
                  {isAuth ? 'my profile' : 'sign in'}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="mt-32">
            {socialNetworks.map((network, idx) => (
              <NavigationMenuItem key={idx} onClick={toggleMobileMenu}>
                <Link href={network.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {network.icon}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <header className="border-border/40 layer relative z-50 flex h-16 items-center justify-between rounded-sm border-b bg-white lg:mt-4 lg:border">
        <Link href={'/'} className="group relative flex items-center gap-2">
          <Sparkles className="absolute bottom-0 left-0.5 transition-colors group-hover:text-yellow-500" />
          <span className={cn(star_jedi.className, 'text-right')}>
            Andromeda
            <br />
            Customs
          </span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {links.map((link, idx) => (
              <NavigationMenuItem key={idx}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'hover:text-foreground/80 text-foreground/60 uppercase transition-colors',
                    )}
                  >
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {isAuth ? (
              <NavigationMenuItem className="flex items-center gap-2">
                Hello, Charles
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), 'uppercase')}
                  >
                    Sign in
                    <ArrowRightSquare className="ml-2" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <Grip
          className={cn(
            'flex cursor-pointer transition-all lg:hidden',
            isMobileNavigationMenuOpen && 'rotate-45 text-slate-200',
          )}
          onClick={toggleMobileMenu}
        />
      </header>
    </>
  );
}
