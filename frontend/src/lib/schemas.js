import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(1, 'Full Name is required'),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  gender: z.string().min(1, 'Gender is required'),
});
