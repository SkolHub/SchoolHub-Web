import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

export interface Account {
  id: number;
  name: string;
  role: 'student' | 'teacher' | 'admin' | 'parent';
  user: string;
  organization: {
    name: string;
  };
}

const fetchAccount = async () => {
  return api.get(`/profile`).then((res) => res.data as Account);
};

export const useGetAccount = () => {
  return useQuery({
    queryKey: ['account'],
    queryFn: fetchAccount,
    staleTime: 1000 * 60 * 5
  });
};
