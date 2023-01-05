import React from "react";  // Import the React library
import Title from "../components/Title";  // Import the Title component from the "../components/Title" directory

function Children({ user }) {
  const renderChildList = () => {
    return user.children.map(child=>
      {
        return (
          <div>
            <img src={child.avatar} alt="" data-testid="child-avatar"></img>
            <p>First name : {child.firstName}</p>
            <p>Gender : {child.gender}</p>
            <p>Birthday : {child.birthday}</p>
          </div>
        )
      })
  }
  return (
    <div>
      {Title({title:"children",number: user.children.length})}

      <div className="d-flex justify-content-around">
          {renderChildList()}
      </div>
    </div>
  );
}

export default Children;
