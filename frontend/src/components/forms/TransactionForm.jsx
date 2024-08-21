import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Label from '../ui/Label';
import Input from '../ui/Input';
import Button from '../ui/Button';
import SelectInput from '../ui/SelectInput';
import LabelInputContainer from '../ui/LabelInputContainer';
import TransactionFormSkeleton from '../skeletons/TransactionFormSkeleton';
import { categoryOptions, paymentOptions } from '../../lib/constants';
import { transactionSchema } from '../../lib/schemas';

const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      description: '',
      paymentType: 'card',
      category: 'saving',
      amount: '',
      location: '',
      date: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  if (false) {
    return <TransactionFormSkeleton />;
  }

  return (
    <form
      className='w-full max-w-lg flex flex-col gap-4 px-4 sm:px-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <LabelInputContainer className='mb-4'>
        <Label htmlFor='description'>Transaction</Label>
        <Input
          id='description'
          placeholder='Enter transaction description'
          type='text'
          error={errors.description?.message}
          {...register('description')}
        />
      </LabelInputContainer>

      <div className='flex flex-col sm:flex-row gap-4 mb-4'>
        <LabelInputContainer className='flex-1'>
          <Label htmlFor='paymentType'>Payment Type</Label>
          <Controller
            name='paymentType'
            control={control}
            render={({ field }) => (
              <SelectInput
                id='paymentType'
                placeholder='Select payment type'
                options={paymentOptions}
                error={errors.paymentType?.message}
                {...field}
              />
            )}
          />
        </LabelInputContainer>

        <LabelInputContainer className='flex-1'>
          <Label htmlFor='category'>Category</Label>
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <SelectInput
                id='category'
                placeholder='Select category'
                options={categoryOptions}
                error={errors.category?.message}
                {...field}
              />
            )}
          />
        </LabelInputContainer>

        <LabelInputContainer className='flex-1'>
          <Label htmlFor='amount'>Amount ($)</Label>
          <Input
            className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            id='amount'
            placeholder='Enter amount'
            type='number'
            error={errors.amount?.message}
            {...register('amount')}
          />
        </LabelInputContainer>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 mb-8'>
        <LabelInputContainer className='flex-1'>
          <Label htmlFor='location'>Location</Label>
          <Input
            id='location'
            placeholder='Enter location'
            type='text'
            error={errors.location?.message}
            {...register('location')}
          />
        </LabelInputContainer>

        <LabelInputContainer className='flex-1'>
          <Label htmlFor='date'>Date</Label>
          <Input
            className='block'
            id='date'
            type='date'
            placeholder='Select date'
            error={errors.date?.message}
            {...register('date')}
          />
        </LabelInputContainer>
      </div>

      <Button type='submit'>Update Transaction</Button>
    </form>
  );
};

export default TransactionForm;
