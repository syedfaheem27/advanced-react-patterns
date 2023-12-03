import React from "react";
import Accordion from "./Accordion";
import { data } from "./Data";

const AccordionContainer = () => {
  return (
    <>
      <h1>Accordion using the compound component pattern</h1>

      <Accordion>
        {data.map((acc) => {
          return (
            <React.Fragment key={acc.id}>
              <Accordion.Title title={acc.title} recievedId={acc.id} />
              <Accordion.Body recievedId={acc.id} content={acc.content} />
            </React.Fragment>
          );
        })}
      </Accordion>
    </>
  );
};

export default AccordionContainer;
