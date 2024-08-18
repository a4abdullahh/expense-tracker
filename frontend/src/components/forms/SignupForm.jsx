import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../ui/Input';
import Label from '../ui/Label';
import SelectInput from '../ui/SelectInput';
import { cn } from '../../lib/utils';
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
          placeholder='tyler'
          type='text'
          error={errors.name?.message}
          {...register('name')}
        />
      </LabelInputContainer>

      <LabelInputContainer className='mb-4'>
        <Label htmlFor='username'>Username</Label>
        <Input
          id='username'
          placeholder='tyler'
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
              placeholder='Select gender'
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

      <button
        className='bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
        type='submit'
      >
        Sign up &rarr;
        <BottomGradient />
      </button>

      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full' />
    </form>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

export default SignupForm;
