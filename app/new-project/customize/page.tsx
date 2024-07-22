'use client';

import { useEffect } from 'react';
import Scene from '@/app/ui/new-project/scene';
import { redirect, useSearchParams } from 'next/navigation';
import { AppRoute } from '@/app/lib/enums';

export default function Page() {
  const searchParams = useSearchParams();
  const shipDir = searchParams.get('ship');

  useEffect(() => {
    document.body.classList.add('fix-scroll');
    return () => {
      document.body.classList.remove('fix-scroll');
    };
  }, []);

  if (!shipDir) {
    redirect(AppRoute.NewProject);
  }

  return (
    <section>
      <Scene modelDir={shipDir} />
    </section>
  );
}
