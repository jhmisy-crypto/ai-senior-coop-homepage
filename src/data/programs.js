import lectureImage from "../assets/lecture.jpg";
import lecture2Image from "../assets/lecture2.jpg";
import meetingImage from "../assets/meeting.jpg";
import projectImage from "../assets/project.jpg";

export const programs = [
  {
    id: "ai-magic-school",
    status: "운영 준비 중",
    title: "AI매직스쿨",
    desc: "AI와 함께 질문하고 기록하며 나를 다시 발견하는 30일 여정",
    subtitle: "AI와 함께 나를 다시 발견하는 30일 여정",
    overview: "AI매직스쿨은 생성형 AI와의 대화를 통해 삶의 경험을 정리하고, 새로운 배움과 실천으로 연결하는 30일 자기 발견 과정입니다.",
    target: "AI를 처음 접하는 시니어, 자신의 경험을 다시 정리하고 싶은 분, 새로운 프로젝트를 시작하고 싶은 분에게 적합합니다.",
    method: "질문, 기록, 대화, 성찰을 중심으로 진행되며 온라인과 오프라인 교육으로 확장할 수 있습니다.",
    image: lectureImage,
    path: "/programs/ai-magic-school",
  },
  {
    id: "basic-ai",
    status: "모집 예정",
    title: "AI기초교육",
    desc: "챗GPT와 생성형 AI를 안전하고 쉽게 익히는 입문 과정",
    subtitle: "생성형 AI를 쉽고 안전하게 시작하는 첫걸음",
    overview: "AI기초교육은 ChatGPT를 중심으로 생성형 AI의 기본 원리와 실제 활용법을 쉽고 친절하게 배우는 입문 과정입니다.",
    target: "AI가 어렵게 느껴지는 시니어, 업무와 일상에 AI를 활용하고 싶은 분에게 적합합니다.",
    method: "실습 중심으로 진행되며 스마트폰과 노트북을 활용하여 직접 질문하고 답변을 경험합니다.",
    image: lecture2Image,
    path: "/programs/basic-ai",
  },
  {
    id: "ai-teacher",
    status: "기획 중",
    title: "AI강사양성과정",
    desc: "시니어가 자신의 경험을 바탕으로 AI 교육자로 성장하는 과정",
    subtitle: "경험이 다시 교육이 되는 AI 시대",
    overview: "AI강사양성과정은 시니어의 삶과 전문 경험을 AI와 연결하여 새로운 교육 콘텐츠와 강의 활동으로 확장하는 과정입니다.",
    target: "퇴직 후 강의와 교육 활동을 이어가고 싶은 시니어, 자신만의 콘텐츠를 만들고 싶은 분에게 적합합니다.",
    method: "AI 활용 실습, 강의 설계, 콘텐츠 제작, 발표와 피드백 중심으로 진행됩니다.",
    image: meetingImage,
    path: "/programs/ai-teacher",
  },
  {
    id: "senior-project",
    status: "준비 중",
    title: "시니어 프로젝트",
    desc: "개인의 꿈과 경험을 AI와 함께 실제 결과물로 만드는 실습 과정",
    subtitle: "생각을 프로젝트로 연결하는 실전 과정",
    overview: "시니어 프로젝트 과정은 자신의 아이디어와 경험을 실제 프로젝트, 전자책, 강의, 커뮤니티 활동으로 연결하는 실전형 프로그램입니다.",
    target: "막연한 아이디어를 실제 결과물로 만들고 싶은 시니어, 자신만의 브랜드를 만들고 싶은 분에게 적합합니다.",
    method: "AI 코칭, 프로젝트 설계, 실행 점검, 결과 공유 중심으로 운영됩니다.",
    image: projectImage,
    path: "/programs/senior-project",
  },
];