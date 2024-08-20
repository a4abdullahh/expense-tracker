import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='mx-auto p-4'>
      <div className='relative'>
        <h1 className='relative z-10 text-lg md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold'>
          Expense <Link to='/'>Tracker</Link>
        </h1>
        <div className='absolute inset-x-0 bottom-[-10px] w-full flex justify-center'>
          <div className='w-3/4'>
            <div className='bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[5px] blur-sm' />
            <div className='bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
