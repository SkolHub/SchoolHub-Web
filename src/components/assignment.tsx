import { AssignmentModel } from '@/lib/types';

export default function Assignment({
  title,
  member,
  timestamp,
  attachments,
  comments
}: AssignmentModel) {
  return (
    <div className='flex flex-col justify-between gap-2 rounded-2xl bg-white p-4 sm:flex-row sm:gap-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <i className='fa fa-file-check text-xl text-primary-700' />
          <h1 className='text-base font-semibold text-primary-900'>{title}</h1>
        </div>
        <div className='flex gap-2 text-primary-700'>
          {attachments ? (
            <div className='flex min-w-max gap-1.5'>
              <i className='fa fa-file-check' />
              <label className='text-xs font-semibold'>
                {attachments} attachment{attachments > 1 && 's'}
              </label>
            </div>
          ) : (
            ''
          )}
          {comments ? (
            <div className='flex min-w-max gap-1.5'>
              <i className='fa fa-comments' />
              <label className='text-xs font-semibold'>
                {comments} comment{comments > 1 && 's'}
              </label>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='flex flex-col items-end gap-8 text-primary-700'>
        <div className='flex flex-col items-end gap-1'>
          <label className='text-xs font-semibold'>{member}</label>
          <label className='min-w-max text-xs font-semibold'>
            {('0' + timestamp.getHours()).slice(-2)}:
            {('0' + timestamp.getMinutes()).slice(-2)}, {timestamp.getDate()}{' '}
            {timestamp.toLocaleString('en-US', { month: 'long' })}{' '}
            {timestamp.getFullYear()}
          </label>
        </div>
      </div>
    </div>
  );
}
