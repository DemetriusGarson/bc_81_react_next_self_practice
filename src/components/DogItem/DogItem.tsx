import { useState } from 'react';
import type { Dog } from '../../types';
import AddressInfo from '../AddressInfo/AddressInfo';
import Button from '../Button/Button';

interface DogProps {
  dog: Dog;
  handleDelete: (id: number) => void;
}

export default function DogsItem({ dog, handleDelete }: DogProps) {
  const [isAddressVisible, setIsAddressVisible] = useState(false);
  const handleShowAddress = () => {
    setIsAddressVisible(true);
  };
  return (
    <>
      <img src={dog.avatar} alt={dog.name} />
      <h2> Name:{dog.name}</h2>
      <p> Age:{dog.age}</p>
      <p> Breed: {dog.breed}</p>
      <Button
        type="button"
        textContent="Delete"
        handleClick={() => handleDelete(dog.id)}
      />

      {isAddressVisible ? (
        <AddressInfo address={dog.address} />
      ) : (
        <Button
          handleClick={handleShowAddress}
          type="button"
          textContent="Show address"
        />
      )}
    </>
  );
}
