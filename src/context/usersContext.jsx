import { createContext, useState } from "react";
import { usersList } from "../consts/usersList";
const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersList);

  const deleteUserByName = (name) => {
    const newUsers = users.filter((user) => user.userName !== name);
    setUsers(newUsers);
  };

  return (
    <UsersContext.Provider value={{ users, setUsers, deleteUserByName }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
