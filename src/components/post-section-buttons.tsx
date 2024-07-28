import { Button } from '@nextui-org/button';

export default function PostSectionButtons() {
  return (
    <div className='flex justify-between'>
      <Button
        className='gap-2 rounded-full bg-secondary-500 px-4 py-2 text-xs font-semibold text-primary-50'
        startContent={<i className='fa fa-pen' />}
      >
        New Post
      </Button>
      <div className='flex gap-2.5'>
        <Button
          className='gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary-700'
          startContent={<i className='fa fa-filter' />}
        >
          Filter
        </Button>
        <Button
          className='gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary-700'
          startContent={<i className='fa fa-bars-filter' />}
        >
          Sort
        </Button>
      </div>
    </div>
  );
}
