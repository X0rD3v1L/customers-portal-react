import React from 'react';

interface Customer {
  id: string;
  name: string;
  title: string;
  address: string;
}

interface Props {
  customers: Customer[];
  selectedCustomerId: string | null;
  setSelectedCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
}

const CustomerList: React.FC<Props> = ({ customers, selectedCustomerId, setSelectedCustomer }) => {
  return (
    <div className="customer-cards-list">
      {customers.map(customer => (
        <div key={customer.id}
            onClick={() => setSelectedCustomer(customer)}
            className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}>
          <h2>{customer.name}</h2>
          <p>{customer.title}</p>
          <p>{customer.address}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
