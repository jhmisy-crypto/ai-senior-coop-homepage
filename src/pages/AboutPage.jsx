import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function AboutPage() {
  return (
    <>
      <Header />
      <main className="page-section">
        
         <p className="section-label">소개</p>
         <h1 style={{ lineHeight: "1.4" }}>
          경험이 지혜로, 지혜가 미래로
         </h1>

        <p className="page-desc">
         AI시니어협동조합은 시니어의 경험과 지혜를 AI와 연결하여
         새로운 배움과 새로운 일을 만들어가는 협동조합입니다.
       <br />
         우리는 시니어가 AI 시대의 창작자, 강사, 멘토,
         공동체 리더로 성장할 수 있도록 함께합니다.
        </p>

  <div className="about-content">
    <h2>주요 사업</h2>

    <ul>
     <li>생성형 AI 교육 및 실습 프로그램 운영</li>
     <li>시니어 AI 리더 양성</li>
     <li>전자책 · 기록 · 콘텐츠 제작 지원</li>
     <li>시니어 강사 및 전문가 네트워크 구축</li>
     <li>지역사회 협력 프로젝트 추진</li>
     <li>시니어 일자리 및 사회참여 활동 지원</li>
    </ul>
  </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;