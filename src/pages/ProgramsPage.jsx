import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import heroImage from "../assets/hero.jpg";
import lectureImage from "../assets/lecture.jpg";
import lecture2Image from "../assets/lecture2.jpg";
import projectImage from "../assets/project.jpg";
import { Link } from "react-router-dom";
import { programs } from "../data/programs";


function ProgramsPage() {
  return (
    <>
      <Header />

      <main className="page-section">
        <p className="section-label">프로그램</p>
        <h1>배움에서 다시 시작될 가능성</h1>
        <p className="page-desc">
          AI시니어협동조합은 시니어의 경험과 지혜가 AI와 만나 새로운 배움,
          일, 공동체 활동으로 이어지도록 돕습니다.
        </p>

        <div className="program-grid">
         {programs.map((program) => (
        <div className="program-card" key={program.id}>
        <img
        src={program.image}
        alt={program.title}
        className="program-image"
       />

      <p className="program-status">{program.status}</p>
      <h2>{program.title}</h2>
      <p>{program.desc}</p>

      <Link to={program.path}>
        <button>자세히 보기</button>
      </Link>
      </div>
     ))}
     </div>
      </main>

      <Footer />
    </>
  );
}

export default ProgramsPage;