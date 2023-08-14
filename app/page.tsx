'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/settings');
  });

  return null;
}

export default Index;
