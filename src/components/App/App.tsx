import { useState } from 'react';
import { initialDogs } from '../../data/dogs';
import DogsList from '../DogsList/DogsList';
import Button from '../Button/Button';

export default function App() {
  const [dogs, setDogs] = useState(initialDogs);

  const [isDogsListVisible, setisDogsListVisible] = useState(false);

  const toggleShowDogsList = () => {
    setisDogsListVisible(!isDogsListVisible);
  };

  const handleDelete = (id: number) => {
    const updatedDogs = dogs.filter(dog => dog.id !== id);
    setDogs(updatedDogs);
  };

  return (
    <>
      <Button
        type="button"
        textContent={isDogsListVisible ? 'Hide Dog List' : 'Show Dogs List'}
        handleClick={toggleShowDogsList}
      />
      {isDogsListVisible && (
        <DogsList dogs={dogs} handleFunction={handleDelete} />
      )}
    </>
  );
}
