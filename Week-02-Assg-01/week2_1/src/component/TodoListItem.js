const TodoList = () => {
  return (
    <div data-testid = "todo-list">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">go shopping <i className="bi bi-arrow-right-square-fill text-success fs-5"></i></li>
        <li className="list-group-item d-flex justify-content-between">school <i className="bi bi-arrow-right-square-fill text-success fs-5"></i></li>
        <li className="list-group-item d-flex justify-content-between">take drugs <i className="bi bi-arrow-right-square-fill text-success fs-5"></i></li>
        <li className="list-group-item d-flex justify-content-between">birthday party <i className="bi bi-arrow-right-square-fill text-success fs-5"></i></li>
        <li className="list-group-item d-flex justify-content-between">learn react <i className="bi bi-arrow-right-square-fill text-success fs-5"></i></li>
      </ul>
    </div>
  );
};

export default TodoList;
