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
      className="flex items-center gap-[13px] bg-transparent"
      style={{
        width: '487.5px',
        height: '55px',
      }}
    >
      {/* Email Input */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="flex-1 h-full bg-transparent border border-[#333333] rounded-lg outline-none transition-colors duration-200 focus:border-[#A3DC2F]"
        style={{
          paddingTop: '17px',
          paddingRight: '16px',
          paddingBottom: '17px',
          paddingLeft: '20px',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          color: '#FAFAFA',
        }}
      />

      {/* Join Button */}
      <button
        type="submit"
        className="h-full px-8 bg-[#A3DC2F] hover:bg-[#92c925] text-[#0F0F0F] font-semibold rounded-lg transition-colors duration-200"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 600,
        }}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default NewsletterInput;

