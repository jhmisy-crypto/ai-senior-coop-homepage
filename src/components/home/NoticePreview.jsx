import { Link } from "react-router-dom";
import { notices } from "../../data/notices";



function NoticePreview() {
  const previewNotices = notices.slice(0, 3);
  return (
    <section className="notice-section">
      <div className="notice-header">
        <div>
          <p>공지사항</p>
          <h2>새로운 소식과 일정을 알려드립니다</h2>
        </div>

        <button>더보기</button>
      </div>

      <div className="notice-list">
       {previewNotices.map((notice) => (
       <Link
        to={`/notices/${notice.id}`}
        className="notice-item"
        key={notice.id}
      >
      <span>{notice.date}</span>
      <strong>{notice.title}</strong>
      </Link>
    ))}
  </div>
    </section>
  );
}

export default NoticePreview;