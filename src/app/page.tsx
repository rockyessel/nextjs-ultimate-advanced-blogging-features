'use client';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  const [data, setData] = React.useState<any[]>([]);
  console.log('data: ', data);

  const fetchData = async () => {
    const response = await fetch(
      'https://supabase-conn.cmd.outerbase.io/anime/add',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: '{"animeId":"3221","animeName":"The Food/Gamer"}',
      }
    );
    const data = await response.json();
    setData(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className='px-10'>
      

    
    </main>
  );
}
