import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About GravityFlow</h1>
        <div className="max-w-3xl mx-auto">
          <p className="mb-6">
            GravityFlow is a revolutionary beverage system that harnesses the power of gravity to deliver an unparalleled drinking experience. Founded in 2024, our mission is to transform the way people enjoy their favorite drinks.
          </p>
          <p className="mb-6">
            Our patented technology allows for a smooth, controlled pour that enhances the flavors and aromas of any beverage. Whether you're a coffee connoisseur, a mixology enthusiast, or simply someone who appreciates the finer things in life, GravityFlow offers a unique and satisfying way to indulge in your drink of choice.
          </p>
          <p className="mb-6">
            At GravityFlow, we're committed to innovation, quality, and sustainability. Our devices are crafted from premium materials and designed to last, reducing waste and ensuring that you can enjoy the perfect pour for years to come.
          </p>
          <p>
            Join us in revolutionizing the world of beverages, one gravity-powered pour at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;