import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../ui/Input';
import Label from '../ui/Label';
import Button from '../ui/Button';
import LabelInputContainer from '../ui/LabelInputContainer';
import { loginSchema } from '../../lib/schemas';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
      <LabelInputContainer className='mb-4'>
        <Label htmlFor='username'>Username</Label>
        <Input
          id='username'
          placeholder='Your username'
          type='text'
          error={errors.username?.message}
          {...register('username')}
        />
      </LabelInputContainer>

      <LabelInputContainer className='mb-8'>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          placeholder='••••••••'
          type='password'
          error={errors.password?.message}
          {...register('password')}
        />
      </LabelInputContainer>

      <Button type='submit'>Log in &rarr;</Button>
    </form>
  );
};

export default LoginForm;
