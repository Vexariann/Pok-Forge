import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <img
          className="logo"
          alt="PokeForge Logo"
          src="../src/assets/UI/PokeForgeLogo.png"
        ></img>
        <div className="headerItem">Teams</div>
        <div className="headerItem">Resources</div>
        <div className="headerItem">Damage Calc</div>
        <div className="headerItem">News</div>
        <div className="headerItem lastHeaderItem">Login</div>
      </div>
    </>
  );
}
