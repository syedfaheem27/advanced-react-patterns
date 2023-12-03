import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

const Accordion = ({ children }) => {
  const [id, setId] = useState(null);

  return (
    <AccordionContext.Provider value={{ id, setId }}>
      {children}
    </AccordionContext.Provider>
  );
};

const Title = ({ title, recievedId }) => {
  const { setId, id } = useContext(AccordionContext);
  return (
    <div className="accordion-heading">
      <p>{title} </p>
      <button
        onClick={() =>
          setId((id) => {
            return id !== recievedId ? recievedId : null;
          })
        }
      >
        {id === recievedId ? "-" : "+"}
      </button>
    </div>
  );
};

const Body = ({ content, recievedId }) => {
  const { id } = useContext(AccordionContext);

  if (id !== recievedId) return null;

  return (
    <div className="accordion-content">
      <p>{content}</p>
    </div>
  );
};

Accordion.Title = Title;
Accordion.Body = Body;

export default Accordion;
