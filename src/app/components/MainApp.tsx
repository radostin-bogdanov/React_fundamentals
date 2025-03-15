import Banner from "./banner"; 
import HouseList from "./houseList";

export default function MainApp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-8 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Banner headerText="Dream Home Finder" />
        <HouseList />
      </div>
    </div>
  );
} 