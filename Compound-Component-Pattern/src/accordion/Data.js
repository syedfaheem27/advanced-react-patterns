const data = Array.from({ length: 3 }, (_, id) => {
  return {
    id,
    title: `Accordion title - ${id}`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam perferendis, iure excepturi temporibus at qui libero repellat sequi quaerat?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur in repellendus eaque tempora modi recusandae autem delectus harum voluptatibus esse.`,
  };
});
export { data };
