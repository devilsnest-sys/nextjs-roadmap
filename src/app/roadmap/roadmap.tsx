"use client";

import { useState } from "react";
import Lesson from "./lesson";
import { roadmapData } from "./data";
import { useProgress } from "../hooks/useProgress";

import styles from "../../styles/styles.module.css";

export default function Roadmap() {
  const { progress, markCompleted } = useProgress();
  
  return (
    <div className={styles.roadmapContainer}>
      {roadmapData.map((lesson, index) => (
        <Lesson
          key={lesson.id}
          lesson={lesson}
          isCompleted={progress.includes(lesson.id)}
          onComplete={() => markCompleted(lesson.id)}
        />
      ))}
    </div>
  );
}
