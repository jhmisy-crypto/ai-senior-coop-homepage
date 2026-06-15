import React from "react";
import heroImage from "../assets/hero.jpg";
import lectureImage from "../assets/lecture.jpg";
import lecture2Image from "../assets/lecture2.jpg";
import meetingImage from "../assets/meeting.jpg";
import projectImage from "../assets/project.jpg";
import bookImage from "../assets/book.jpg";

function JoinPage() {
  return (
    <main className="join-page">
      <section className="join-hero landing-join-hero">
  <div className="join-hero-image">
    <img
      src={heroImage}
      alt="AI시니어협동조합 활동"
    />
  </div>

  <div className="join-hero-content">
    <p className="section-label">조합원 모집</p>

    <h1>
      경험이 지혜로,
      <br />
      지혜가 미래로
    </h1>

    <p>
      AI와 함께 배우고, 연결하고,
      다시 일하는 시니어 공동체
    </p>

    <a
      href="https://forms.gle/여기에구글폼주소"
      target="_blank"
      rel="noreferrer"
      className="join-apply-button"
    >
      조합원 가입 신청하기
    </a>
  </div>
</section>

      <section className="join-section">
        <h2>우리는 이런 분을 기다립니다</h2>

        <div className="join-card-list">
          <div className="join-card">AI를 배우고 싶은 시니어</div>
          <div className="join-card">평생의 경험과 지혜를 나누고 싶은 분</div>
          <div className="join-card">강의·코칭·상담 활동을 하고 싶은 분</div>
          <div className="join-card">새로운 프로젝트를 만들고 싶은 분</div>
          <div className="join-card">지역사회와 함께 성장하고 싶은 분</div>
        </div>

      </section>

      <section className="join-section join-benefit">
        <h2>조합원이 되면</h2>

        <div className="join-card-list">
          <div className="join-card">🎓 AI 교육 프로그램 우선 참여</div>
          <div className="join-card">🎤 AI강사 양성과정 참여 기회</div>
          <div className="join-card">🤝 협동조합 공동 프로젝트 참여</div>
          <div className="join-card">🌱 강의 및 사회공헌 활동 연계</div>
          <div className="join-card">🔗 조합원 네트워크 활용</div>
        </div>
      </section>

      <section className="join-section">
        <h2>가입 절차</h2>

        <div className="join-process-box">
          <span>① 가입 신청</span>
          <span>↓</span>
          <span>② 상담</span>
          <span>↓</span>
          <span>③ 출자금 납부</span>
          <span>↓</span>
          <span>④ 조합원 승인</span>
          <span>↓</span>
          <span>⑤ 활동 시작</span>
        </div>
      </section>

      <section className="join-message">
        <p>
          조합은 혼자서는 하기 어려운 일을
          <br />
          함께 할 수 있게 만드는 힘입니다.
        </p>

        <strong>
          AI시니어협동조합은 시니어의 경험을
          <br />
          미래 자산으로 바꾸는 공동체입니다.
        </strong>
      </section>

      <section className="join-apply">
        <h2>조합원 가입 신청</h2>

        <p>
          AI시니어협동조합과 함께
          <br />
          새로운 배움과 성장의 길을 시작해 보세요.
        </p>

        <a
  href="https://forms.gle/KEUhinveqV7Ro1zw6"
  target="_blank"
  rel="noreferrer"
  className="join-apply-button"
>
  조합원 가입 신청하기
</a>
      </section>

      <section className="join-programs">

  <h2>현재 진행 프로그램</h2>

  <div className="join-program-grid">

    <div className="join-program-card">
      <h3>생성형 AI 첫걸음</h3>
      <p>
        ChatGPT와 생성형 AI를 쉽고 안전하게 배우는
        입문 과정
      </p>
    </div>

    <div className="join-program-card">
      <h3>AI매직스쿨</h3>
      <p>
        AI와 함께 질문하고 기록하며
        나를 다시 발견하는 30일 성장 프로그램
      </p>
    </div>

    <div className="join-program-card">
      <h3>AI강사 양성과정</h3>
      <p>
        경험과 전문성을 AI와 연결하여
        새로운 강사 활동을 준비하는 과정
      </p>
      </div>

     </div>

    </section>

    <section className="join-gallery">

  <h2>함께 배우고 성장하는 현장</h2>

<p className="gallery-subtitle">
AI와 함께 배우고 연결되는 조합원들의 실제 활동 모습입니다.
</p>

  <p className="gallery-subtitle">
    AI와 함께 배우고 성장하는 조합원들의 활동 모습입니다.
  </p>

  <div className="join-gallery-grid">

    <img src={heroImage} alt="조합 활동 1" />
    <img src={lectureImage} alt="조합 활동 2" />
    <img src={projectImage} alt="조합 활동 3" />
    <img src={lecture2Image} alt="조합 활동 4" />

  </div>

</section>

      <section className="join-contact upgraded-contact">
  <h2>문의</h2>

  <div className="contact-info-card">
    <h3>AI시니어협동조합</h3>

    <p>
      경험이 지혜가 되고,
      <br />
      지혜가 미래가 되는 공동체
    </p>

    <div className="contact-lines">
      <p>이사장 : 이재현</p>
      <p>이메일 : jhmisy@gmail.com</p>
      <p>홈페이지 : www.aiseniors.kr</p>
    </div>
  </div>
</section>
    </main>
  );
}

export default JoinPage;