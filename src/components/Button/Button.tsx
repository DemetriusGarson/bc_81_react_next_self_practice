interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  textContent: string;
  handleClick: () => void;
}

export default function Button({
  type,
  textContent,
  handleClick,
}: ButtonProps) {
  return (
    <button onClick={handleClick} type={type}>
      {textContent}
    </button>
  );
}
