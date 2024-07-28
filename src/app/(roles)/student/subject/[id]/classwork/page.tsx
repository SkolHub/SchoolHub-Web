import { PostSectionModel } from '@/lib/types';
import { PostSection } from '@/components/post-section';

const sections: PostSectionModel[] = [
  {
    name: 'Șiruri de caractere',
    posts: [
      {
        type: 'Announcement',
        timestamp: new Date(),
        comments: 1,
        attachments: 3,
        member: 'Manuela Șerban',
        title: 'Lorem ipsum dolor sit amet',
        body:
          'Lorem ipsum dolor sit amet consectetur. Eget non praesent sagittis tempus mollis vitae nam. Aenean turpis nisl pellentesque lorem consequat nulla est. Sed eget purus ut lacinia. Interdum sem dolor id vitae in sollicitudin. Non nunc a adipiscing cursus magna eget risus at.\n' +
          'Gravida gravida sed blandit odio augue ornare quam diam. Cras nam ultrices mattis viverra vivamus amet libero. Sollicitudin ultrices massa vitae nunc amet quisque amet. Nullam odio eget vestibulum ut convallis. Augue morbi et quam dolor egestas ultricies in. Ornare egestas varius eget pharetra. Consectetur etiam ac egestas eu sed lorem quam. In aliquam ante enim a etiam gravida consequat tincidunt nulla. Amet leo ut ac aliquet.'
      },
      {
        type: 'Assignment',
        timestamp: new Date(),
        comments: 1,
        attachments: 3,
        member: 'Manuela Șerban',
        title: 'Lorem ipsum dolor sit amet'
      }
    ]
  },
  {
    name: 'Șiruri de caractere',
    posts: [
      {
        type: 'Announcement',
        timestamp: new Date(),
        comments: 1,
        attachments: 3,
        member: 'Manuela Șerban',
        title: 'Lorem ipsum dolor sit amet',
        body:
          'Lorem ipsum dolor sit amet consectetur. Eget non praesent sagittis tempus mollis vitae nam. Aenean turpis nisl pellentesque lorem consequat nulla est. Sed eget purus ut lacinia. Interdum sem dolor id vitae in sollicitudin. Non nunc a adipiscing cursus magna eget risus at.\n' +
          'Gravida gravida sed blandit odio augue ornare quam diam. Cras nam ultrices mattis viverra vivamus amet libero. Sollicitudin ultrices massa vitae nunc amet quisque amet. Nullam odio eget vestibulum ut convallis. Augue morbi et quam dolor egestas ultricies in. Ornare egestas varius eget pharetra. Consectetur etiam ac egestas eu sed lorem quam. In aliquam ante enim a etiam gravida consequat tincidunt nulla. Amet leo ut ac aliquet.'
      },
      {
        type: 'Assignment',
        timestamp: new Date(),
        comments: 1,
        attachments: 3,
        member: 'Manuela Șerban',
        title: 'Lorem ipsum dolor sit amet'
      }
    ]
  },
  {
    name: 'Șiruri de caractere',
    posts: [
      {
        type: 'Announcement',
        timestamp: new Date(),
        comments: 1,
        attachments: 3,
        member: 'Manuela Șerban',
        title: 'Lorem ipsum dolor sit amet',
        body:
          'Lorem ipsum dolor sit amet consectetur. Eget non praesent sagittis tempus mollis vitae nam. Aenean turpis nisl pellentesque lorem consequat nulla est. Sed eget purus ut lacinia. Interdum sem dolor id vitae in sollicitudin. Non nunc a adipiscing cursus magna eget risus at.\n' +
          'Gravida gravida sed blandit odio augue ornare quam diam. Cras nam ultrices mattis viverra vivamus amet libero. Sollicitudin ultrices massa vitae nunc amet quisque amet. Nullam odio eget vestibulum ut convallis. Augue morbi et quam dolor egestas ultricies in. Ornare egestas varius eget pharetra. Consectetur etiam ac egestas eu sed lorem quam. In aliquam ante enim a etiam gravida consequat tincidunt nulla. Amet leo ut ac aliquet.'
      },
      {
        type: 'Assignment',
        timestamp: new Date(),
        comments: 1,
        attachments: 3,
        member: 'Manuela Șerban',
        title: 'Lorem ipsum dolor sit amet'
      }
    ]
  }
];

export default function Classwork() {
  return (
    <section className='flex flex-col gap-6 overflow-auto pb-4 scrollbar-hide'>
      {sections.map((section, index) => (
        <PostSection key={index} {...section} />
      ))}
    </section>
  );
}
