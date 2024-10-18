import React, { useState, useEffect } from 'react';

interface AgeVerificationProps {
  onVerified: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerified }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleVerify = () => {
    setIsOpen(false);
    onVerified();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Age Verification</h2>
        <p className="mb-6 text-center">
          You must be 21 years or older to enter this website. Please confirm your age.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleVerify}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            I am 21 or older
          </button>
          <button
            onClick={() => window.location.href = 'https://www.google.com'}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition duration-300"
          >
            I am under 21
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;