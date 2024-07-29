import React, { useEffect, useState } from 'react';
import ServiceCard from "../Components/ServiceCard"; 
import '../Components/Service.css'; 

export const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data/service');
        const data = await response.json();
        console.log('Fetched services data:', data); 
        setServices(data.msg); 
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="services-heading"> Services</h1>
        <div className="grid-three-cols">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
