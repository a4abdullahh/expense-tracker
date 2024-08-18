import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='mx-auto p-4'>
      <h1 className='relative z-10 text-lg md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold'>
        Expense <Link to='/'>Tracker</Link>
      </h1>
      <div className='relative mb-10 w-1/2 mx-auto hidden md:block'>
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-[2px] w-3/4 blur-sm' />
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-px w-3/4' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[5px] w-1/4 blur-sm' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-1/4' />
      </div>
    </div>
  );
};

export default Header;
