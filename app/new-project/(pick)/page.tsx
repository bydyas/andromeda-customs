'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/ui/card';
import Link from 'next/link';
import { AppRoute } from '@/app/lib/enums';
import { useState } from 'react';
import { cn } from '@/app/lib/utils';

// TODO: fetch the real data from DB;
const modelsData = [
  {
    title: 'Star Wing',
    description: 'Alpha-class Xg-1',
    imgUrl: '/images/star_wing.jpg',
  },
  {
    title: 'Moon Tail',
    description: 'Omega-class Au-02',
    imgUrl: '/images/star_wing.jpg',
  },
  {
    title: 'Destroyer',
    description: 'Beta-class Zn-41',
    imgUrl: '/images/star_wing.jpg',
  },
];

export default function Page() {
  const [selectedModel, setSelectedModel] = useState<string>('');

  return (
    <section className="layer flex h-full flex-col items-center justify-center overflow-hidden">
      <ul className="flex h-full max-h-[calc(((407px_+_24px)_*_3)_-_200px)] flex-col items-center gap-6 overflow-y-auto overflow-x-hidden py-[29px] md:max-h-full md:flex-row md:py-0">
        {modelsData.map((v, i) => (
          <li key={i} className="h-[407px] w-full cursor-pointer md:w-[297px]">
            <Card
              className={cn(
                'rounded-sm hover:bg-slate-100',
                selectedModel === v.title && 'bg-slate-100',
              )}
              onClick={() => setSelectedModel(v.title)}
            >
              <CardContent>
                <Image
                  className="h-[240px]"
                  width={300}
                  height={250}
                  src={v.imgUrl}
                  alt={v.title}
                />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-center">{v.title}</CardTitle>
                <CardDescription>{v.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center gap-6">
                <button type="button">Price</button>
                <button type="button">Details</button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
      <Link
        href={AppRoute.Customize}
        aria-disabled={!selectedModel}
        className={cn(
          'hover:text-foreground/80 text-foreground/60 my-4 rounded-sm px-4 py-2 text-xl uppercase transition-colors hover:bg-slate-100',
          !selectedModel && 'pointer-events-none opacity-50',
        )}
      >
        Customize
      </Link>
    </section>
  );
}
