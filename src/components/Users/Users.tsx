import { useState } from 'react';
import { getUsers } from '../../services/UsersAPI';
import type { User } from '../../types';
import Button from '../Button/Button';
import UserList from '../UserList/UserList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import AddUserForm from '../AddUserForm/AddUserForm';

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

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

  const showForm = () => {
    setIsShowForm(true);
  };

  const closeForm = () => {
    setIsShowForm(false);
  };

  return (
    <>
      {users.length > 0 ? (
        <>
          <UserList users={users} />
          {isShowForm ? (
            <AddUserForm onClose={closeForm} />
          ) : (
            <Button
              type="button"
              textContent="Add User"
              handleClick={showForm}
            />
          )}
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}
        </>
      ) : (
        <Button
          type="button"
          textContent="Show Users"
          handleClick={showUsers}
        />
      )}
    </>
  );
}
