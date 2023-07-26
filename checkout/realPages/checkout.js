import React from 'react';
import Head from 'next/head';

const Checkout = props => (
  <div>
    <Head>
      <title>checkout</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero bg-checkout center-page">
      <h1>checkout page</h1>
      <h3 className="title">This is a federated page owned by localhost:3000</h3>
      <span>
        {' '}
        Data from federated <pre>getInitalProps</pre>
      </span>
      <br />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
    <style jsx>{`
      .center-page {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
      }
      .hero {
        width: 100%;
        color: #333;
       
      }
      .bg-checkout {
        background-color: #f6c4c4;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);
Checkout.getInitialProps = async () => {
  const swapi = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
  return swapi;
};
export default Checkout;
