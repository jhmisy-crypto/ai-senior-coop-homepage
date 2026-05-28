import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function AboutPage() {
  return (
    <>
      <Header />
      <main className="page-section">
        
         <p className="section-label">소개</p>
         <h1 style={{ lineHeight: "1.4" }}>
          AI와 함께 시니어의 새로운 가능성을 만들어갑니다
         </h1>

        <p className="page-desc">
          AI시니어협동조합은 현재 설립 절차를 진행 중입니다.
        <br />
         시니어의 경험과 지혜가 AI와 만나
         새로운 배움과 활동으로 이어지는 공동체를 준비하고 있습니다.
        </p>

  <div className="about-content">
    <h2>우리가 준비하는 것</h2>

    <ul>
      <li>AI 기초교육 및 실습 프로그램</li>
      <li>시니어 AI 리더 양성</li>
      <li>전자책 · 기록 · 콘텐츠 활동</li>
      <li>지역 기반 커뮤니티와 협력 프로젝트</li>
    </ul>
  </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;