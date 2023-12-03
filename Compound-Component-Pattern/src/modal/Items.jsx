import Modal from "./Modal";

const mockData = Array.from({ length: 3 }, (_, id) => {
  return {
    id,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, veniam!",
  };
});

const Items = () => {
  return (
    <Modal>
      <div className="items">
        {mockData.map((data) => (
          <div key={data.id}>
            <div>{data.title}</div>
            <Modal.Action openModal={(callback) => callback(data.id)}>
              <button>Edit</button>
              <button>Delete</button>
            </Modal.Action>
            <Modal.Body id={data.id}>
              <div>Modal</div>
            </Modal.Body>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default Items;
