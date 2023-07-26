import React from 'react';
import Link from 'next/link';


const Nav = () => (
  <nav>

  <p><b>Path</b>: home/components/nav.js </p>
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
        <Link href="/shop">
          Shop
        </Link>
        <Link href="/p/something">
          Federated Catch All
        </Link>
        <Link href="/checkout">
          Checkout
        </Link>
      </li>

    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        background-color: #119bc0;
        padding: 2px
      }
      ul {
        display: flex;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
      }
      nav > ul {
        padding: 4px 16px;
        background-color: #119bc0;
        border: 1px solid white;
      }
      li {  
        display: flex;
        padding: 6px 8px;
        gap: 1rem;
      }
      a {
        color: green;
        text-decoration: none;
        font-size: 16px;
        padding-right: 50px;
      }
    `}</style>
  </nav>
);

export default Nav;
