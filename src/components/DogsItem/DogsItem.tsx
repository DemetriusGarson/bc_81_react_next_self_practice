import type { Dog } from '../../types';

interface DogProps {
  dog: Dog;
}

export default function DogsItem({ dog }: DogProps) {
  return (
    <>
      <img src={dog.avatar} alt={dog.name} />
      <h2> Name:{dog.name}</h2>
      <p> Age:{dog.age}</p>
      <p> Breed: {dog.breed}</p>
    </>
  );
}
