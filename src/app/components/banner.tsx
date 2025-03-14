import Image from 'next/image';

const Banner = (props: { headerText: string }) => {
  return (
    <header className="flex flex-col md:flex-row items-center p-6 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm">
        <div className="w-full md:w-4/12 flex items-center justify-center mb-4 md:mb-0">
            <div className="relative overflow-hidden rounded-full shadow-lg p-1 bg-white dark:bg-gray-700">
              <Image 
                src="/logo.jpg" 
                alt="logo" 
                width={150} 
                height={150} 
                className="object-cover transition-transform hover:scale-105 duration-300"
                priority
              />
            </div>
        </div>
        <div className="w-full md:w-8/12 flex flex-col items-center md:items-start space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                {props.headerText }
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center md:text-left">
              Providing exceptional homes worldwide since 2023
            </p>
            
        </div>
    </header>
  );
};

export default Banner;
