import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./styles.css";

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

function ProductItem({ product }) {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
}

function CompanyItem({ company, defaultVisibility }) {
  const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}

//The List component where render prop pattern will be used
//Agenda - I want the List component to also render the name of companies
// and for each company, it should render a company Item

/* option-1 Use a custom hook to take this logic out
{
   const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen(isOpen => !isOpen);
    setIsCollapsed(false);
  }
}
Problem with this approach - can't use the UI of the List component
For that we might have to write individual components with the same UI 
which violates the DRY principle
*/

/*
Option - 2 To use the children prop in the App component where the List is passed down
as a child of the App component.
{
  function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        <List title="Products" items={products}>
          <ul className="list">
              {displayItems.map(product => (
                <ProductItem key={product.productName} product={product} />
              ))}
          </ul>
        </List>

        <List title="Companies" items={companies}>
          <ul className="list">
              {displayItems.map(company => (
                <CompanyItem key={company.companyName} company={company} />
              ))}
          </ul>
        </List>
      </div>
    </div>
  );

The problem with this approach is that we don't get the displayItems variable
by using the children prop. It will throw an error as displayItems is not defined there


So this is where render props pattern comes into play - refer the AppRenderProp.js file 
}




}




*/

function List({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen(isOpen => !isOpen);
    setIsCollapsed(false);
  }

  return (
    <div className="list-container">
      <div className="heading">
        <h2>{title}</h2>
        <button onClick={toggleOpen}>
          {isOpen ? <span>&or;</span> : <span>&and;</span>}
        </button>
      </div>
      {/* state-A. Here the List component has complete control over what to render
        as it is only rendering the ProductItem component for any product prop passed */}
      {isOpen && (
        <ul className="list">
          {displayItems.map(product => (
            <ProductItem key={product.productName} product={product} />
          ))}
        </ul>
      )}

      <button onClick={() => setIsCollapsed(isCollapsed => !isCollapsed)}>
        {isCollapsed ? `Show all ${items.length}` : "Show less"}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        <List title="Products" items={products} />
      </div>
    </div>
  );
}

// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
function ProductList({ title, items }) {
  return (
    <ul className="list">
      {items.map(product => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}
