import Header from '@/components/header';
import { TabModel } from '@/lib/types';
import TeacherSheetNav from '@/components/nav-bar/teacher-sheet-nav';

export default function TeacherHeader({ tabs }: { tabs: TabModel[] }) {
  return (
    <Header tabs={tabs}>
      <TeacherSheetNav />
    </Header>
  );
}
