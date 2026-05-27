import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { resources } from "../data/resources";

function ResourcesPage() {
  return (
    <>
      <Header />

      <main className="page-section">
        <p className="section-label">자료실</p>
        <h1>배움과 실천을 돕는 자료를 모았습니다</h1>
        <p className="page-desc">
          AI시니어협동조합의 강의자료, 회수, 전자책, 활동 자료를 이곳에서 찾을 수 있습니다.
        </p>

        <div className="resource-page-list">
          {resources.map((resource) => (
            <div className="resource-page-card" key={resource.id}>
              <img
                src={resource.image}
                alt={resource.title}
                className="resource-image"
              />

              <span>{resource.type}</span>
              <h2>{resource.title}</h2>
              <p>{resource.desc}</p>

              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
              >
                <button>{resource.buttonText}</button>
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ResourcesPage;