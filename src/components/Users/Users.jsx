import { Link, Outlet } from "react-router-dom";
import "./Users.css";
import { UsersContext } from "../../context/usersContext";
import { useContext } from "react";

const Users = () => {
  // const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  const { users } = useContext(UsersContext);
  return (
    <div
      className="Users"
      style={{
        display: "flex",
        height: "500px",
        border: "1px solid black",
        width: "500px",
        padding: "10px",
      }}
    >
      <div style={{ width: "50%" }}>
        {users.map((user, index) => (
          <Link key={index} to={`userDetails/${user.userName}`}>
            <div key={index}>{user.userName}</div>
          </Link>
        ))}
      </div>
      <div style={{ width: "50%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Users;
