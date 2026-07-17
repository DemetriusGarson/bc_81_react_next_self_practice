import type { Address } from '../../types';

interface AddressInfoProps {
  address: Address;
}
export default function AddressInfo({ address }: AddressInfoProps) {
  return (
    <>
      <p>Country: {address.country}</p>
      <p>City: {address.city}</p>
      <p>Address: {address.street}</p>
    </>
  );
}
