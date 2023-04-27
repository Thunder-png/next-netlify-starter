import React, { useEffect } from 'react';
import Head from 'next/head';


const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
    script.integrity = 'sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <div className="header">
      </div>
    </>
  );
};

export default Header;
