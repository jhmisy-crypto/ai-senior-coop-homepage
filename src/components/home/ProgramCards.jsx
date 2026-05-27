import { Link } from "react-router-dom";
import { programs } from "../../data/programs";

function ProgramCards() {
  return (
    <section className="program-section">
      <div className="section-heading">
        <p>대표 프로그램</p>
        <h2>배움에서 다시 시작되는 가능성</h2>
      </div>

      <div className="program-grid">
        {programs.map((program) => (
          <div className="program-card" key={program.id}>
            <img
              src={program.image}
              alt={program.title}
              className="program-image"
            />

            <span>{program.status}</span>

            <h3>{program.title}</h3>

            <p>{program.desc}</p>

            <Link to={program.path}>
              <button>자세히 보기</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramCards;