import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import chairmanImage from "../assets/chairman.jpg";
import activityImage from "../assets/chairman-activity.jpg";

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

        <section className="chairman-profile">
          <img
            src={chairmanImage}
            alt="이재현 이사장"
            className="chairman-image"
          />

          <h2>이재현</h2>
          <p>
            AI시니어협동조합 이사장
            <br />
            AI리더십센터 대표
          </p>
        </section>

        <section className="about-content">
          <h2>이사장 인사말</h2>

          <p>
            안녕하십니까.
            <br />
            AI시니어협동조합 이사장 이재현입니다.
          </p>

          <p>
            AI는 세상을 빠르게 변화시키고 있습니다. 그러나 기술의 발전이
            인간의 성장을 대신할 수는 없습니다. 오히려 AI 시대일수록 인간의
            경험과 지혜는 더욱 소중한 가치가 됩니다.
          </p>

          <p>
            AI시니어협동조합은 시니어가 자신의 경험을 새로운 가치로 전환하고,
            AI와 함께 새로운 꿈과 가능성을 만들어 갈 수 있다는 믿음에서
            출발했습니다.
          </p>

          <p>
            우리는 생성형 AI 교육, 콘텐츠 제작, 전자책 출판, 시니어 강사 양성,
            공동체 활동을 통해 시니어가 다시 배우고, 다시 도전하고, 다시
            사회와 연결될 수 있도록 돕고자 합니다.
          </p>

          <p>
            “경험이 지혜로, 지혜가 미래로” 이어지는 길을 함께 만들어 가겠습니다.
          </p>

          <p>
            감사합니다.
            <br />
            AI시니어협동조합 이사장 이재현
          </p>
        </section>

        <section className="about-photo-section">
          <img
            src={activityImage}
            alt="AI시니어협동조합 학습모임"
            className="about-activity-image"
          />

          <p>
            함께 배우고 성장하는 AI 공동체 활동
          </p>
        </section>

        <section className="about-content">
          <h2>주요 사업</h2>

          <p>생성형 AI 교육 및 실습 프로그램 운영</p>
          <p>시니어 AI 리더 양성</p>
          <p>전자책 · 기록 · 콘텐츠 제작 지원</p>
          <p>시니어 강사 및 전문가 네트워크 구축</p>
          <p>지역사회 협력 프로젝트 추진</p>
          <p>시니어 일자리 및 사회참여 활동 지원</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;