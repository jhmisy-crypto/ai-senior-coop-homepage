
import heroImage from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-section">

  <div className="hero-image">
    <img
      src={heroImage}
      alt="시니어 활동"
    />
  </div>

  <div className="hero-text">
    <h1>
      시니어의 경험과 AI가 만나면,
      <br />
      새로운 가능성이 시작됩니다.
    </h1>

    <p>
      AI 교육과 공동체를 통해
      시니어의 새로운 도전과 연결을 지원합니다.
    </p>

    <div className="hero-buttons">
      <Link to="/programs">
        <button>프로그램 보기</button>
      </Link>

      <a
        href="https://forms.gle/Mdv15EjuxFbzhQaP7"
        target="_blank"
        rel="noreferrer"
      >
        <button>신청하기</button>
      </a>
    </div>
  </div>

</section>
  );
}

export default HeroSection;