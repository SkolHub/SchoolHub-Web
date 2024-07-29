import Link from 'next/link';

export default function Profile({
  src,
  className = ''
}: {
  src: string;
  className?: string;
}) {
  return (
    <Link className={`flex justify-end ${className}`} href='/profile'>
      <img className='w-10' src='/profile.png' alt='profile' />
    </Link>
  );
}
