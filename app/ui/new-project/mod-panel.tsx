import { shipDetails as details } from '@/app/lib/placeholder-data';
import Stats from './stats';

export default function ModPanel() {
  return (
    <aside className="custom-scroll h-[calc(100vh_-_104px_-_170px)] overflow-y-auto px-6 py-8">
      <div>
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold uppercase">Star Wing</h2>
            <h3 className="text-3xl">Alpha-class Xg-1</h3>
          </div>
          <Stats />
        </div>
      </div>
      <ul className="my-6 [&>li]:grid [&>li]:grid-cols-2 [&>li]:gap-2 [&strong]:font-semibold">
        <li>
          <strong>Type: </strong>
          <span>{details.types.join(' / ')}</span>
        </li>
        <li>
          <strong>Size: </strong>
          <span>
            {`${details.size.width}${details.size.metric} x 
            ${details.size.height}${details.size.metric} x 
            ${details.size.length}${details.size.metric}`}
          </span>
        </li>
        <li>
          <strong>Crew Capacity: </strong>
          <span>{details.crew}</span>
        </li>
        <li>
          <strong>Engines: </strong>
          <span>{details.engines}</span>
        </li>
        <li>
          <strong>Maximum Speed: </strong>
          <span>
            {details.maxSpeed.value} {details.maxSpeed.metric}
          </span>
        </li>
        {details?.weapons && (
          <>
            <li>
              <strong>Primary Weapons: </strong>
              <span>{details.weapons.primary}</span>
            </li>
            {details.weapons?.secondary && (
              <li>
                <strong>Secondary Weapons: </strong>
                <span>{details.weapons.secondary}</span>
              </li>
            )}
          </>
        )}
        <li>
          <strong>Defense Systems: </strong>
          <span>{details.defense.join('; ')}</span>
        </li>
      </ul>

      <button className="h-14 w-full cursor-pointer rounded-sm bg-slate-200 px-6 hover:bg-slate-100 active:bg-slate-50">
        <span className="text-2xl font-medium uppercase">Custom Project</span>
      </button>

      <ul className="mt-6 [&>li]:text-justify">
        <li>
          <strong>History: </strong>
          <span>{details.history}</span>
        </li>
        <li>
          <strong>Misson: </strong>
          <span>{details.mission}</span>
        </li>
      </ul>
    </aside>
  );
}
