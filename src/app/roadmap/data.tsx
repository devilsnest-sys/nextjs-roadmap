export type LessonType = {
    id: string;
    title: string;
    description: string;
    link: string;
  };
  
  export const roadmapData: LessonType[] = [
    { id: "1", title: "Introduction to Python", description: "Learn Python basics", link: "/lesson1" },
    { id: "2", title: "Variables and Data Types", description: "Understanding data types", link: "/lesson2" },
    { id: "3", title: "Control Flow", description: "Loops and conditionals", link: "/lesson3" }
  ];
  