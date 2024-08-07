// useSession.ts
'use client';

import { useEffect } from 'react';
import { useSelector } from './useRedux';
import { useRouter } from 'next/navigation';

const useSession = () => {
  const { session } = useSelector(state => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);
  return;
};

export default useSession;
