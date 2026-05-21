import { getLessonsBySection } from "../data/lessons.js";
import LessonCard from "../components/LessonCard.jsx";

export default function Home() {
  const sections = getLessonsBySection();

  return (
    <>
      <h1 className="page-title">Beginner Japanese Grammar</h1>
      <p className="page-intro">
        Short lessons and practice exercises for people who already know
        hiragana and very basic phrases. Start with sentence structure, then
        particles, then conjugation.
      </p>
      {sections.map((section) => (
        <section key={section.category} className="lesson-section">
          <h2 className="lesson-section-title">{section.title}</h2>
          <ul className="lesson-list">
            {section.lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
