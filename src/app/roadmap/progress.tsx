export const getProgress = (): string[] => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("progress") || "[]");
    }
    return [];
  };
  
  export const saveProgress = (progress: string[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("progress", JSON.stringify(progress));
    }
  };