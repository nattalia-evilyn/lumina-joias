import './styles.css';

export function Header() {
  return (
    <header className="header-container">
      <div className="logo">Lumina Joias</div>
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>Colares</li>
          <li>Brincos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}