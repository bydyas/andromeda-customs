'use client';

import { useEffect } from 'react';
import Scene from '@/app/ui/new-project/scene';
import { redirect, useSearchParams } from 'next/navigation';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/app/ui/resizable';

import { AppRoute } from '@/app/lib/enums';
import ModPanel from '@/app/ui/new-project/mod-panel';

export default function Page() {
  const searchParams = useSearchParams();
  const shipModelDirName = searchParams.get('ship');

  useEffect(() => {
    document.body.classList.add('fix-scroll');
    return () => {
      document.body.classList.remove('fix-scroll');
    };
  }, []);

  if (!shipModelDirName) {
    redirect(AppRoute.NewProject);
  }

  return (
    <section>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={75} minSize={50}>
          <Scene modelDirName={shipModelDirName} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25} minSize={25}>
          <ModPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
}
