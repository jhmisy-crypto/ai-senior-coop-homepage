import meetingImage from "../assets/meeting.jpg";
import projectImage from "../assets/project.jpg";
import bookImage from "../assets/book.jpg";

export const resources = [
  {
    id: 1,
    category: "pdf",
    type: "PDF",
    title: "AI매직스쿨 안내자료",
    desc: "AI매직스쿨의 개요와 참여 방법을 소개하는 안내자료입니다.",
    image: meetingImage,
    link: "/files/ai-magic-school-guide.pdf",
    buttonText: "자료 보기",
  },
  {
    id: 2,
    category: "ebook",
    type: "전자책",
    title: "AI와 함께 걷는 질문의 길",
    desc: "질문과 성찰을 중심으로 AI 시대의 삶을 다시 바라보는 전자책입니다.",
    image: bookImage,
    link: "https://magic.ailc.kr/",
    buttonText: "자료 보기",
  },
  {
    id: 3,
    category: "link",
    type: "링크",
    title: "AI마법학교 앱",
    desc: "30일 질문과 기록 여정을 직접 체험할 수 있는 웹앱입니다.",
    image: projectImage,
    link: "https://hero.ailc.kr/",
    buttonText: "바로가기",
  },
];