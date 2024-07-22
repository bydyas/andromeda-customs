import { Steps } from '../ui/steps';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Steps />
      <div className="h-[calc(100%_-_56px)] border-t border-s-slate-100 md:border-b md:lg:h-[calc(100%_-_72px_-_16px)] lg:h-[calc(100%_-_104px_-_32px)]">
        {children}
      </div>
    </main>
  );
}
