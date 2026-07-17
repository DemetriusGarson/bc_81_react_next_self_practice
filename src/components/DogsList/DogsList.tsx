import type { Dog } from '../../types';
import DogsItem from '../DogsItem/DogsItem';

interface DogsListProps {
  dogs: Dog[];
}

export default function DogsList({ dogs }: DogsListProps) {
  return (
    <ul>
      {dogs.map(dog => {
        return (
          <li key={dog.id}>
            <DogsItem dog={dog} />
          </li>
        );
      })}
    </ul>
  );
}
