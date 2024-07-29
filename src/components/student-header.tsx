import Header from '@/components/header';
import StudentSheetNav from '@/components/nav-bar/student-sheet-nav';
import { TabModel } from '@/lib/types';

export default function StudentHeader({ tabs }: { tabs: TabModel[] }) {
  return (
    <Header tabs={tabs}>
      <StudentSheetNav />
    </Header>
  );
}
