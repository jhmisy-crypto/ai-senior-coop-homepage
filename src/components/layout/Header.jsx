import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="logo-area">
        <strong>AI시니어협동조합</strong>
      </div>

        <nav className="nav-menu">
  <Link to="/">홈</Link>
  <Link to="/about">소개</Link>
  <Link to="/programs">프로그램</Link>
  <Link to="/join">조합원 모집</Link>
  <Link to="/notices">공지사항</Link>
  <Link to="/resources">자료실</Link>
  <Link to="/contact">문의</Link>
  
      </nav>
    </header>
  );
}

export default Header;