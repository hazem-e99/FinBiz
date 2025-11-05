import React, { useState } from 'react';

const NewsletterInput = ({ placeholder = "Enter email address", buttonText = "Join" }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center bg-[#1A1A1A] border border-[#333333] rounded-lg overflow-hidden transition-colors duration-200 hover:border-[#A3DC2F]"
      style={{
        width: '487.5px',
        height: '55px',
        paddingTop: '17px',
        paddingRight: '16px',
        paddingBottom: '17px',
        paddingLeft: '20px',
        gap: '13px',
      }}
    >
      {/* Email Input */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="flex-1 bg-transparent border-none outline-none placeholder:text-white"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          color: '#FAFAFA',
        }}
      />

      {/* Join Button */}
      <button
        type="submit"
        className="bg-[#A3DC2F] hover:bg-[#92c925] text-white font-semibold transition-colors duration-200"
        style={{
          width: '175.55px',
          height: '55px',
          padding: '16px',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 600,
          marginTop: '-17px',
          marginBottom: '-17px',
          marginRight: '-16px',
        }}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default NewsletterInput;

