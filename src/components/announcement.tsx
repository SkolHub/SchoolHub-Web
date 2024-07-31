import { Post } from '@/api/post';

export default function Announcement({
  title,
  body,
  member,
  timestamp,
  attachments,
  comments
}: Post) {
  return (
    <div className='flex flex-col justify-between gap-4 rounded-2xl bg-white p-4 sm:flex-row sm:gap-8'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-base font-semibold text-primary-900'>{title}</h1>
        <p className='text-xs font-medium text-primary-800'>{body}</p>
      </div>
      <div className='flex flex-col-reverse items-start gap-4 text-primary-700 sm:items-end sm:gap-8'>
        <div className='flex flex-col items-end gap-1 self-end sm:self-auto'>
          {/*<label className='text-xs font-semibold'>{member.name}</label>*/}
          <label className='min-w-max text-xs font-semibold'>
            {('0' + new Date(timestamp).getHours()).slice(-2)}:
            {('0' + new Date(timestamp).getMinutes()).slice(-2)}{' '}
            {new Date(timestamp).toLocaleString('en-US', { month: 'long' })}{' '}
            {new Date(timestamp).getFullYear()}
          </label>
        </div>
        {/*<div className='flex flex-row items-start gap-2 sm:flex-col sm:items-end'>*/}
        {/*  {attachments ? (*/}
        {/*    <div className='flex min-w-max gap-1'>*/}
        {/*      <i className='fa fa-file-check' />*/}
        {/*      <label className='text-xs font-semibold'>*/}
        {/*        {attachments.length} attachment{attachments > 1 && 's'}*/}
        {/*      </label>*/}
        {/*    </div>*/}
        {/*  ) : (*/}
        {/*    ''*/}
        {/*  )}*/}
        {/*  {comments ? (*/}
        {/*    <div className='flex min-w-max gap-1'>*/}
        {/*      <i className='fa fa-comments' />*/}
        {/*      <label className='text-xs font-semibold'>*/}
        {/*        {comments} comment{comments > 1 && 's'}*/}
        {/*      </label>*/}
        {/*    </div>*/}
        {/*  ) : (*/}
        {/*    ''*/}
        {/*  )}*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
