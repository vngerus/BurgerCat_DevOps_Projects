import React from 'react';
import Navbar from '../shared/Navbar';
import OrdersTable from './components/OrdersTable';


const Dashboard: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar login={true} />
      <OrdersTable />
    </div>
  );
};

export default Dashboard;