import React from 'react';
import Navbar from '../shared/Navbar';
import OrdersTable from './components/OrdersTable';

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen bg-orange-200 flex flex-col">
      <Navbar login={true} />
      <div className="flex-grow max-h-screen overflow-y-auto p-4">
        <div className="">
          <OrdersTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
