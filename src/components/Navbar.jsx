export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <div className="brand-mark">O</div>
        <div>
          <strong>outokumpu</strong>
          <span>ESG prototype</span>
        </div>
      </a>

      <nav>
        <a href="#dashboard">Dashboard</a>
        <a href="#sustainability">Sustainability</a>
        <a href="#ai">AI insights</a>
      </nav>
    </header>
  );
}
