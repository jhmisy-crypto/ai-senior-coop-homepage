import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function ContactPage() {
  return (
    <>
      <Header />

      <main className="page-section">
        <p className="section-label">문의</p>

        <h1>문의 페이지 준비 중입니다</h1>

        <p className="page-desc">
          AI시니어협동조합은 현재 설립 절차를 진행 중입니다.
          <br />
          문의 및 참여 신청은 아래 신청폼을 통해 남겨주세요.
        </p>

        <div className="program-action">
          <a
            href="https://forms.gle/Mdv15EjuxFbzhQaP7"
            target="_blank"
            rel="noreferrer"
          >
            <button className="apply-button">
              신청 및 문의하기
            </button>
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;