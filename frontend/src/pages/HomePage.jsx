import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import TransactionForm from '../components/forms/TransactionForm';
import Card from '../components/ui/Card';

const chartData = {
  labels: ['Saving', 'Expense', 'Investment'],
  datasets: [
    {
      label: '%',
      data: [13, 8, 3],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)', // Saving: Green
        'rgba(255, 99, 132, 0.8)', // Expense: Red
        'rgba(59, 130, 246, 0.8)', // Investment: Blue
      ],
      borderColor: [
        'rgba(34, 197, 94, 1)', // Saving: Green
        'rgba(255, 99, 132, 1)', // Expense: Red
        'rgba(59, 130, 246, 1)', // Investment: Blue
      ],
      borderWidth: 2,
      cutout: '70%',
      borderRadius: 10,
      rotation: -90,
      spacing: 5,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#fff',
        boxWidth: 12,
        padding: 10,
      },
    },
    tooltip: {
      backgroundColor: '#fff',
      titleColor: '#000',
      bodyColor: '#000',
      borderColor: '#ddd',
      borderWidth: 1,
      caretPadding: 10,
    },
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  maintainAspectRatio: false,
};

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  return (
    <div className='flex flex-col gap-6 items-center max-w-7xl mx-auto relative justify-center text-white my-10 px-4 sm:px-6 md:px-8'>
      <div className='flex flex-col-reverse sm:flex-row w-full justify-center items-center gap-6 sm:gap-12'>
        <div className='flex-shrink-0 w-full max-w-[300px] sm:max-w-[360px] h-[300px] sm:h-[360px]'>
          <Doughnut data={chartData} options={chartOptions} />
        </div>

        <div className='flex-grow w-full max-w-md'>
          <TransactionForm />
        </div>
      </div>

      <div className='w-full px-4 sm:px-6 md:px-10'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-bold text-center my-10 text-white'>History</p>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-start mb-20'>
          <Card cardType={'saving'} />
          <Card cardType={'expense'} />
          <Card cardType={'investment'} />
          <Card cardType={'investment'} />
          <Card cardType={'saving'} />
          <Card cardType={'expense'} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
