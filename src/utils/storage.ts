export const getProgress = () => {
    return JSON.parse(localStorage.getItem("progress") || "[]");
  };
  
  export const saveProgress = (progress: string[]) => {
    localStorage.setItem("progress", JSON.stringify(progress));
  };
  