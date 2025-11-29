import './styles.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="btn-primary" onClick={onClick}>
      {text}
    </button>
  );
}