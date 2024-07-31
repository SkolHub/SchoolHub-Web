'use client';

import PostSectionButtons from '@/components/post-section-buttons';
import { Post } from '@/lib/types';
import PostList from '@/components/post-list';
import AnimatedPage from '@/components/animated-page';
import { useGetStudentSubjectPosts } from '@/api/post';

const posts: Post[] = [
  {
    type: 'Announcement',
    timestamp: new Date('2024-04-05T11:45:00Z'),
    comments: 4,
    attachments: 2,
    member: 'Dr. Munteanu',
    title: 'School Picnic',
    body: 'We are excited to announce the upcoming school picnic on the 20th of April. This is a fantastic opportunity for students, parents, and teachers to relax and enjoy a day outdoors. The event will feature a variety of fun activities, including sports games, arts and crafts, and a talent show. Each family is encouraged to bring their own food, and we will also have a potluck section for those who wish to share dishes. This picnic is a great way to foster community spirit and allow everyone to interact in a casual, fun environment. We hope to see you all there, ready to enjoy a day of laughter, games, and good food. Remember to bring sunscreen, hats, and plenty of water. Let’s make this school picnic an unforgettable event for everyone!'
  },
  {
    type: 'Assignment',
    timestamp: new Date('2024-02-10T14:30:00Z'),
    comments: 1,
    attachments: 1,
    member: 'Prof. Smith',
    title: 'Science Project'
  },
  {
    type: 'Announcement',
    timestamp: new Date('2024-01-10T08:00:00Z'),
    comments: 2,
    attachments: 1,
    member: 'Prof. Ionescu',
    title: 'Update Curriculum',
    body: 'We are pleased to inform you that we have made significant updates to the curriculum for the upcoming semester. These changes have been implemented to better align with the latest educational standards and to enhance the learning experience for all students. Key updates include the introduction of advanced topics in mathematics and science, as well as new elective courses in computer science and environmental studies. We believe these additions will provide students with a broader knowledge base and better prepare them for future academic and career pursuits. All students are encouraged to review the updated curriculum and prepare accordingly. The new curriculum will be effective from the start of the next semester. For more detailed information, please refer to the curriculum guide available on the school website. We look forward to a productive and enriching academic year ahead.'
  },
  {
    type: 'Assignment',
    timestamp: new Date('2024-01-20T12:00:00Z'),
    comments: 2,
    attachments: 3,
    member: 'Prof. Ionescu',
    title: 'Mathematics Homework'
  },
  {
    type: 'Announcement',
    timestamp: new Date('2024-02-20T09:30:00Z'),
    comments: 3,
    attachments: 2,
    member: 'Dr. Georgescu',
    title: 'New Extracurricular Activities',
    body: 'We are thrilled to announce the addition of several new extracurricular activities to our school program. These activities are designed to provide students with opportunities to explore their interests and develop new skills outside the classroom. Starting next month, we will be offering a Robotics Club, a Drama Club, and a Chess Club. The Robotics Club will focus on building and programming robots, offering hands-on experience with cutting-edge technology. The Drama Club will provide a platform for students interested in acting, directing, and stage production. The Chess Club will cater to those who enjoy strategic thinking and competition. We encourage all students to take advantage of these new opportunities. Sign-up sheets and additional information can be found on the bulletin board outside the main office. Participation in these activities can also contribute to your overall academic and personal growth.'
  },
  {
    type: 'Assignment',
    timestamp: new Date('2024-04-01T09:00:00Z'),
    comments: 2,
    attachments: 2,
    member: 'Dr. Marin',
    title: 'English Literature Analysis'
  },
  {
    type: 'Announcement',
    timestamp: new Date('2024-03-15T10:15:00Z'),
    comments: 1,
    attachments: 3,
    member: 'Prof. Radu',
    title: 'Exam Schedule',
    body: 'We have released the exam schedule for the upcoming final exams. All students are advised to check the schedule and take note of their respective exam dates and locations. It is important to start your revision early and ensure you are well-prepared for each subject. The exams will cover all the material taught during the semester, so thorough preparation is key. We will also be offering review sessions for various subjects in the weeks leading up to the exams. These sessions are highly recommended as they will provide valuable insights and help clarify any doubts. Make sure to attend these sessions and make use of the available study resources. Good luck to all students, and remember that consistent effort and dedication are the keys to success.'
  },
  {
    type: 'Assignment',
    timestamp: new Date('2024-03-05T08:15:00Z'),
    comments: 3,
    attachments: 2,
    member: 'Prof. Radu',
    title: 'History Essay'
  }
];
export default function Stream({ params: { id } }: { params: { id: string } }) {
  const posts = useGetStudentSubjectPosts(id);

  if (posts.isPending) {
    return <p>Loading...</p>;
  }

  if (posts.isError) {
    return <p>Error: {posts.error.message}</p>;
  }

  return (
    <AnimatedPage
      key='stream'
      className='mb-4 flex grow flex-col gap-2.5 overflow-hidden rounded-[1.25rem] bg-white/70 px-4 pt-4'
    >
      {/*<PostSectionButtons />*/}
      <div className='flex h-full flex-col gap-2.5 overflow-auto pb-4 scrollbar-hide'>
        <PostList posts={posts.data} />
      </div>
    </AnimatedPage>
  );
}
