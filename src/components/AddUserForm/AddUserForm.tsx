interface AddUserFormProps {
  onClose: () => void;
}
export default function AddUserForm({ onClose }: AddUserFormProps) {
  const handleSubmit = (formData: FormData) => {
    const name = formData.get('userName');
    const email = formData.get('userEmail');
    console.log({ name, email });
    onClose();
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="userName" placeholder="Enter your name" />
      <input type="email" name="userEmail" placeholder="Enter your email" />
      <button type="submit">Submit</button>
    </form>
  );
}
