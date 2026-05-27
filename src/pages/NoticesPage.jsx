import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { notices } from "../data/notices";



function NoticesPage() {
  return (
    <>
      <Header />

      <main className="page-section">
        <p className="section-label">공지사항</p>
        <h1>새로운 소식과 일정을 알려드립니다</h1>
        <p className="page-desc">
          AI시니어협동조합의 프로그램, 모임, 교육 일정과 관련된 소식을 안내합니다.
        </p>

        <div className="notice-page-list">
          {notices.map((notice) => (
      <Link
        to={`/notices/${notice.id}`}
        className="notice-page-card"
        key={notice.id}
      >
       <span>{notice.category}</span>
       <h2>{notice.title}</h2>
       <p>{notice.desc}</p>
       <small>{notice.date}</small>
      </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NoticesPage;