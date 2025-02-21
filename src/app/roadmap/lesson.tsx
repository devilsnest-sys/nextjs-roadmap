import { LessonType } from "./data";
import { Toast } from "@/components/toast";
import Avatar from "@/components/avatar";
import styles from "../../styles/styles.module.css";

interface LessonProps {
  lesson: LessonType;
  isCompleted: boolean;
  onComplete: () => void;
}

export default function Lesson({ lesson, isCompleted, onComplete }: LessonProps) {
  const handleClick = () => {
    onComplete();
    Toast({ message: `Navigating to ${lesson.title}...`, type: "info" });
  };

  return (
    <div className={`${styles.lesson} ${isCompleted ? styles.completed : ""}`} onClick={handleClick}>
      {isCompleted && <Avatar />}
      <h3>{lesson.title}</h3>
    </div>
  );
}
