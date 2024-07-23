import { redirect } from 'next/navigation';
import { AppRoute } from './lib/enums';

export default function Page() {
  redirect(AppRoute.NewProject);
  // return <main className="h-full">Hello</main>;
}
