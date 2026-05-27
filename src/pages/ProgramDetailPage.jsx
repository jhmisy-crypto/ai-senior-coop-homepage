import { useParams, Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { programs } from "../data/programs";

function ProgramDetailPage() {
  const { id } = useParams();
  const program = programs.find((item) => item.id === id);

  if (!program) {
    return (
      <>
        <Header />
        <main className="page-section">
          <h1>프로그램을 찾을 수 없습니다.</h1>
          <Link to="/programs">프로그램 목록으로 돌아가기</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="page-section">
        <img
          src={program.image}
          alt={program.title}
          className="program-detail-image"
        />

        <p className="section-label">{program.title}</p>
        <h1>{program.subtitle}</h1>
        <p className="page-desc">{program.desc}</p>

        <div className="detail-box">
          <h2>프로그램 개요</h2>
          <p>{program.overview}</p>

          <h2>추천 대상</h2>
          <p>{program.target}</p>

          <h2>진행 방식</h2>
          <p>{program.method}</p>
        </div>

        <div className="program-action">
          <a
            href="https://forms.gle/Mdv15EjuxFbzhQaP7"
            target="_blank"
            rel="noreferrer"
          >
            <button className="apply-button">신청하기</button>
          </a>
        </div>

        <Link to="/programs" className="back-link">
          프로그램 목록으로 돌아가기
        </Link>
      </main>

      <Footer />
    </>
  );
}

export default ProgramDetailPage;