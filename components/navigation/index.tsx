'use client';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../icons';
import { useRouter } from 'next/navigation';
import { useDispatch } from '@/hooks/useRedux';
import { logout } from '@/store/reducer/authSlice';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const handleClickLogout = () => {
    dispatch(logout());
    route.push('/login');
  };
  return (
    <nav className="bg-dark py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex w-max">
            <Image src="/logo.png" width={80} height={80} objectFit="contain" alt="logo" />
          </Link>
          <span className="p-1" onClick={handleClickLogout}>
            <Icons className="text-white cursor-pointer" name="ExitRight" size={24} />
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
