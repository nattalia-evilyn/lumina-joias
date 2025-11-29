import { Button } from '../Button';
import './styles.css';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

export function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <Button text="Comprar" />
      </div>
    </div>
  );
}