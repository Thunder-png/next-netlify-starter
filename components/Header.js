import React, { useEffect } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.integrity = 'sha384-KyZXEAg3QhqLMpG8r+Knujsl5MSJz7akZuv0w1B03RzPU5Pf/++7mTDkxdk9O3UG';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha384-7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt//"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="header">
        <h1>Next.js Header</h1>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </>
  );
};

export default Header;
