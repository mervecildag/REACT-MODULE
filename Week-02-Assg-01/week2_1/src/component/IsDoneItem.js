const IsDoneItem = () => {
  return (
      <div data-testid = "is-done-item" className= "IsDoneItem"> 
        <ul className="list-group">
          <li className="list-group-item"><p className = "d-flex justify-content-between"><del className="text-secondary">milk</del> <i className="bi bi-trash text-danger fs-5"></i></p> </li>
          <li className="list-group-item"><p className = "d-flex justify-content-between"><del className="text-secondary">english exam</del> <i className="bi bi-trash text-danger fs-5"></i></p> </li>
          <li className="list-group-item"><p className = "d-flex justify-content-between"><del className="text-secondary">js practical exam</del> <i className="bi bi-trash text-danger fs-5"></i></p> </li>
        </ul>
      </div>
    
  );
};

export default IsDoneItem;