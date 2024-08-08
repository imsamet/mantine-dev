'use client';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Icons from '../icons';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from '@/hooks/useRedux';
import { logout } from '@/store/reducer/authSlice';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const path = usePathname();
  const handleClickLogout = () => {
    dispatch(logout());
    route.push('/login');
  };
  return (
    <nav className="bg-black py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex w-max">
              <Image src="/logo.png" width={80} height={80} objectFit="contain" alt="logo" />
            </Link>
            <div>
              <Link
                className={cn(
                  'px-4 py-3 rounded-md font-semibold transition-colors hover:text-white',
                  path === '/' ? 'bg-gray-900 text-white' : 'text-gray-600',
                )}
                href="/"
              >
                Home
              </Link>
              <Link
                className={cn(
                  'px-4 py-3 rounded-md font-semibold transition-colors hover:text-white',
                  path === '/list' ? 'bg-gray-900 text-white' : 'text-gray-600',
                )}
                href="/list"
              >
                List
              </Link>
              <Link
                className={cn(
                  'px-4 py-3 rounded-md font-semibold transition-colors hover:text-white',
                  path === '/black-list' ? 'bg-gray-900 text-white' : 'text-gray-600',
                )}
                href="/black-list"
              >
                Black List
              </Link>
            </div>
          </div>
          <span className="p-1" onClick={handleClickLogout}>
            <Icons className="text-white cursor-pointer" name="ExitRight" size={24} />
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
