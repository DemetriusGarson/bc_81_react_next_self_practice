import { useState } from 'react';
import { getUsers } from '../../services/API';
import type { User } from '../../types';
import Button from '../Button/Button';
import UserList from '../UserList/UserList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const showUsers = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await getUsers();
      setUsers(data);
      console.log(users);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {users.length > 0 ? (
        <UserList users={users} />
      ) : (
        <Button
          type="button"
          textContent="Show Users"
          handleClick={showUsers}
        />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {/* <button onClick={getUsers}>Show Users</button> */}
    </>
  );
}
