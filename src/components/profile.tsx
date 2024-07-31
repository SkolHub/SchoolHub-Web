import { useRouter } from 'next/navigation';

export default function Profile({
  src,
  className = ''
}: {
  src: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <div
      className={`flex justify-end ${className} cursor-pointer`}
      onClick={() => {
        document.cookie =
          'session=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;';
        document.cookie = 'role=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;';
        router.push('/login');
      }}
    >
      <img className='w-10' src='/profile.png' alt='profile' />
    </div>
  );
}
