import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function ContactPage() {
  return (
    <>
      <Header />

      <main className="page-section">
        <p className="section-label">문의</p>

        <h1>문의 및 참여 신청</h1>

        <p className="page-desc">
          AI시니어협동조합은 시니어의 경험과 지혜를 AI와 연결하여
          새로운 배움과 활동을 만들어 가고 있습니다.
          <br />
          프로그램 참여, 강의 문의, 협력 제안, 조합 가입 문의는
          아래 방법으로 연락해 주시기 바랍니다.
        </p>

        <div className="program-action">
          <a
            href="https://forms.gle/Mdv15EjuxFbzhQaP7"
            target="_blank"
            rel="noreferrer"
          >
            <div className="about-content">
          
          <h2>연락처</h2>

           <p>대표메일 : info@aiseniors.kr</p>
           <p>홈페이지 : https://aiseniors.kr</p>
           <p>기관명 : AI시니어협동조합</p>
          </div>

            <button className="apply-button">
              참여 신청 및 문의하기
            </button>
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;