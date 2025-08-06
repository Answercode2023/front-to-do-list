// types/index.ts

export type Task = {
  id: number;
  title: string;
  description: string;
  is_completed: boolean;
  created_at: string; 
  user: number;
  category: number ;
};

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Task[];
};