import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userName } = useParams();
  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  const user = usersList.find((user) => user.userName === userName);

  return (
    <div>
      {user ? (
        <>
          <h2>{user.userName}</h2>
          <p>Age: {user.userAge}</p>
          <p>Is Vegan: {user.isVegan}</p>
          {/* Add more user details here */}
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetails;
