import { useParams, Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { notices } from "../data/notices";


function NoticeDetailPage() {
  const { id } = useParams();
  const notice = notices.find((item) => item.id === id);

  if (!notice) {
    return (
      <>
        <Header />
        <main className="page-section">
          <h1>공지사항을 찾을 수 없습니다.</h1>
          <Link to="/notices">공지사항 목록으로 돌아가기</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="page-section">
        <p className="section-label">{notice.category}</p>
        <h1>{notice.title}</h1>
        <p className="page-desc">{notice.date}</p>

        <div className="notice-detail-box">
          <p>{notice.content}</p>
        </div>

        <Link to="/notices" className="back-link">
          공지사항 목록으로 돌아가기
        </Link>
      </main>

      <Footer />
    </>
  );
}

export default NoticeDetailPage;