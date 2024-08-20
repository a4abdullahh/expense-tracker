import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../ui/Input';
import Label from '../ui/Label';
import Button from '../ui/Button';
import SelectInput from '../ui/SelectInput';
import LabelInputContainer from '../ui/LabelInputContainer';
import { signupSchema } from '../../lib/schemas';
import { genderOptions } from '../../lib/constants';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      username: '',
      gender: 'male',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
      <LabelInputContainer className='mb-4'>
        <Label htmlFor='name'>Full Name</Label>
        <Input
          id='name'
          placeholder='Enter your full name'
          type='text'
          error={errors.name?.message}
          {...register('name')}
        />
      </LabelInputContainer>

      <LabelInputContainer className='mb-4'>
        <Label htmlFor='username'>Username</Label>
        <Input
          id='username'
          placeholder='Choose a username'
          type='text'
          error={errors.username?.message}
          {...register('username')}
        />
      </LabelInputContainer>

      <LabelInputContainer className='mb-4'>
        <Label htmlFor='gender'>Gender</Label>
        <Controller
          name='gender'
          control={control}
          render={({ field }) => (
            <SelectInput
              placeholder='Select your gender'
              options={genderOptions}
              error={errors.gender?.message}
              {...field}
            />
          )}
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

      <Button type='submit'>Sign up &rarr;</Button>

      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full' />
    </form>
  );
};

export default SignupForm;
