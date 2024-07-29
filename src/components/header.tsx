import AnimatedTabs from '@/components/animated-tabs';
import Profile from '@/components/profile';
import { TabModel } from '@/lib/types';
import { ReactNode } from 'react';

export default function Header({
  tabs,
  children
}: {
  tabs: TabModel[];
  children: ReactNode;
}) {
  return (
    <header className='flex'>
      <div className='flex grow basis-0 items-center'>{children}</div>
      <AnimatedTabs tabs={tabs} />
      <Profile className='grow basis-0' src='/leaf.png' />
    </header>
  );
}
