import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="/images/design.png" alt="Service" className="service-image" width={200} />
      </div>
      <div className="card-details">
        <div className="service-meta">
          <p>{service.provider}</p>
          <p>{service.price}</p>
        </div>
        <h2>{service.service}</h2>
        <div className="grid">
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
