import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import ApplicationsSection from '../components/ApplicationsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <ApplicationsSection />
    </div>
  );
};

export default HomePage;