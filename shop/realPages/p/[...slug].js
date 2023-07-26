export default function PDP() {
  return (
    <div className="hero center-view bg-pdp">
    <p><b>Path</b>: shop/realPages/p/[...slug].js </p>
    <h1 className="title">
      {' '}
      <code>PDP!!!</code>
    </h1>
    <p className="description">And it works like a charm v2</p>

    <style jsx>{`
    :global(body) {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
    }
    .center-view {
      width: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .border-red {
      border: 1px solid red;
    }
    .bg-checkout {
      background-color: #f6c4c4;
    }
    nav {
      text-align: center;
      background-color: #3d7e19;
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
      background-color: #9cd49c;a
    }
    li {  
      display: flex;
      padding: 6px 8px;
      gap: 1rem;
    }
    a {
      color: #067df7;
      text-decoration: none;
      font-size: 16px;
      padding-right: 50px;
    }
  `}</style>
  </div>);
}
PDP.getInitialProps = async () => {
  return {};
};
