function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <p>문의하기</p>

        <h2>
          궁금한 점이 있으신가요?
          <br />
          편하게 문의하세요.
        </h2>

        <div className="contact-buttons">
  <a href="tel:010-0000-0000">
    <button>전화통화</button>
  </a>

  <a
    href="https://open.kakao.com/"
    target="_blank"
    rel="noreferrer"
  >
    <button>카카오톡 문의</button>
  </a>

  <a href="mailto:ailc@example.com">
    <button>이메일 문의</button>
  </a>
</div>
      </div>
    </section>
  );
}

export default ContactSection;