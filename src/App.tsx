import React, { useState } from 'react';
import './App.css';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import customersData from './data/customers.json';

interface Customer {
  id: string;
  name: string;
  title: string;
  address: string;
}

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(customersData[0]);

  return (
    <div className="App">
      <div className="customer-list">
        <CustomerList 
          customers={customersData}
          selectedCustomerId={selectedCustomer ? selectedCustomer.id : null}
          setSelectedCustomer={setSelectedCustomer}
        />
      </div>
      <div className="customer-details">
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;
