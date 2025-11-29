import { Button } from '../Button';
import './styles.css';

export function HeroBanner() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Elegância que brilha em você</h1>
        <p>Descubra nossa nova coleção de ouro 18k e pedras naturais.</p>
        <Button text="Ver Coleção" />
      </div>
    </section>
  );
}