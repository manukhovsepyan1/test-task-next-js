'use client'
import React, { useEffect, useState } from 'react';
import { User } from "../../../types/user";
import InfoCard from '@/components/InfoCard';

interface ItemDetailsProps {
  params: Promise<{ id: string }>;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ params }) => {
  const [id, setId] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    params.then(({ id }) => setId(id)).catch((error) => console.error('Error unwrapping params:', error));
  }, [params]);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((user: User) => {
          setUser(user || null);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [id]);

  return (
    <div>
      {user ? (
        <div className="flex justify-center users-center h-[calc(100vh-56px)]">
          <div className="max-w-3xl relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                    user profile
                  </h6>
                  <h2 className="text-xl font-semibold">
                    {user.username}
                  </h2>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap'>
                <InfoCard title={"id"} description={user.id} />
                <InfoCard title={"name"} description={user.name} />
                <InfoCard title={"email"} description={user.email} />
                <InfoCard title={"username"} description={user.username} />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetails;
