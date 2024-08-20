import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  return (
    <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black'>
      <h2 className='font-bold text-xl text-neutral-200'>
        Welcome Back to Expense Tracker
      </h2>
      <p className='text-sm max-w-sm mt-2 text-neutral-300'>
        Log in to continue managing your expenses and stay on top of your
        budget.
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
