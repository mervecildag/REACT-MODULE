import React from "react";  // Import the React library
import Title from "../components/Title";  // Import the Title component from the "../components/Title" directory

// The Friends function takes in a "user" prop and returns a JSX element
function Friends({ user }) {
  const renderFriendsList = () => {
    return user.friends.map(friend=>
      {
        return (
          <div data-testid="friend-card">
            <img src={friend.avatar} alt=""></img>
            <p>first name: {friend.firstName}</p>
            <p>Gender: {friend.gender}</p>
            <p>birthday: {friend.birthday}</p>
            <p>Phone: {friend.phone}</p>
          </div>
        )
      })
  }

  return (
    <div>
      {Title({title:"friends",number: user.friends.length})}

      <div className="d-flex justify-content-around">
          {renderFriendsList()}
      </div>
    </div>
  );
}

export default Friends;  // Export the Friends component
