const resources = ["AI 활용 가이드", "강의자료", "전자책 자료", "추천 영상"];

function ResourcePreview() {
  return (
    <section className="resource-section">
      <div className="resource-box">
        <p>자료실</p>
        <h2>배움에 필요한 자료를 한곳에 모았습니다</h2>

        <div className="resource-tags">
          {resources.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <button>자료실 바로가기</button>
      </div>
    </section>
  );
}

export default ResourcePreview;