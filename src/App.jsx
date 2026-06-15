import ProgramDetailPage from "./pages/ProgramDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import NoticesPage from "./pages/NoticesPage";
import "./App.css";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import JoinPage from "./pages/JoinPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/programs/:id" element={<ProgramDetailPage />} />
        <Route path="/notices/:id" element={<NoticeDetailPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;