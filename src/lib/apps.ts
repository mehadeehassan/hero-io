import { TAppsTypes } from '@/Types/Types';

export const getAllApps = async (): Promise<TAppsTypes[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/data.json`,{
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch applications');
  }

  const data: TAppsTypes[] = await res.json();

  return data;
};
