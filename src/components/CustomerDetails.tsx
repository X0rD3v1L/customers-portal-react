import React from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import LoadingImage from "../assets/loader.gif";
interface Customer {
  id: string;
  name: string;
  title: string;
  address: string;
}

interface Props {
  customer: Customer;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  const { photos, error } = useFetchPhotos(customer.id);

  return (
    <div className="customer-details-container">
      <h2>{customer.name} details here</h2>
      <p>{customer.address}</p>
      {error && <p className="error-message">{error}</p>}
      {!error && (
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <img key={index} loading="lazy" src={photo || LoadingImage} alt="Customer" />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;