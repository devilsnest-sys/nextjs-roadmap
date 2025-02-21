"use client";

import { useState, useEffect } from "react";
import { getProgress, saveProgress } from "@/utils/storage";

export const useProgress = () => {
  const [progress, setProgress] = useState<string[]>([]);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const markCompleted = (lessonId: string) => {
    const newProgress = [...progress, lessonId];
    setProgress(newProgress);
    saveProgress(newProgress);
  };

  return { progress, markCompleted };
};
