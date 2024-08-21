import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TransactionPage from './pages/TransactionPage';
import NotFound from './pages/NotFound';
import Header from './components/ui/Header';
import BackgroundBeams from './components/ui/BackgroundBeams';

function App() {
  return (
    <div className='scrollable-container min-h-screen w-full bg-neutral-950 relative flex flex-col items-center antialiased'>
      <BackgroundBeams className='absolute inset-0 z-0' />
      <div className='relative z-10 w-full'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/transaction/:id' element={<TransactionPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
