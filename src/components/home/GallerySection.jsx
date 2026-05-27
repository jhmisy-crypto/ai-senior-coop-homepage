import lectureImage from "../../assets/lecture.jpg";
import meetingImage from "../../assets/meeting.jpg";
import projectImage from "../../assets/project.jpg";

const galleryItems = [
  {
    image: lectureImage,
    title: "AI 강의 현장",
  },
  {
    image: meetingImage,
    title: "함께 배우는 시간",
  },
  {
    image: projectImage,
    title: "프로젝트 활동",
  },
];

function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="section-heading">
        <p>활동 사진</p>
        <h2>함께 배우고 성장하는 현장</h2>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div className="gallery-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-caption">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;