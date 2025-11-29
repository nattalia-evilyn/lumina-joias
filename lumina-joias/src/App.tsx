import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';

// CSS para o container dos produtos (apenas para organizar a vitrine)
import './App.css'; 

function App() {
  return (
    <div>
      <Header />
      
      <main>
        <HeroBanner />

        <section className="products-container">
          <h2 className="section-title">Destaques da Semana</h2>
          
          <div className="grid-products">
            <ProductCard 
              title="Colar Ouro Delicado" 
              price="R$ 299,90"
              image="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=500&auto=format&fit=crop"
            />
            <ProductCard 
              title="Anel Solitário Prata" 
              price="R$ 159,90"
              image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop"
            />
            <ProductCard 
              title="Brincos de Pérola" 
              price="R$ 189,00"
              image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=500&auto=format&fit=crop"
            />
            <ProductCard 
              title="Pulseira Elo Português" 
              price="R$ 420,00"
              image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=500&auto=format&fit=crop"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;