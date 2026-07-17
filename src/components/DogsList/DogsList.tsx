import type { Dog } from '../../types';
import DogItem from '../DogItem/DogItem';

interface DogsListProps {
  dogs: Dog[];
  handleFunction: (id: number) => void;
}

export default function DogsList({ dogs, handleFunction }: DogsListProps) {
  return (
    <ul>
      {dogs.map(dog => {
        return (
          <li key={dog.id}>
            <DogItem dog={dog} handleDelete={handleFunction} />
          </li>
        );
      })}
    </ul>
  );
}
