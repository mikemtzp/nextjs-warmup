import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const id = 2;

  return (
    <div>
      <button onClick={(e) => router.push('/')}>Go Home</button>

      <button onClick={(e) => router.push('/user/[id]', `/user/${id}`)}>
        Dashboard
      </button>
    </div>
  );
};

export default Page;
