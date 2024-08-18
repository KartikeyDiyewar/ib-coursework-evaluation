import { create } from "zustand";

interface Coursework {
  name: string;
  size: number;
  lastModified: number;
  content: string; // Store file content as Base64 string
  file: File; // Store the actual file object
  subject: string;
  wordCount: number;
}

interface CourseworkState {
  courseworkList: Coursework[];
  addCoursework: (coursework: Coursework) => void;
  loadCoursework: () => void;
}

const LOCAL_STORAGE_KEY = "courseworkList";

export const useCourseworkStore = create<CourseworkState>((set) => ({
  courseworkList: [],

  addCoursework: (coursework: Coursework) => {
    set((state) => {
      const updatedList = [...state.courseworkList, coursework];

      // Save to local storage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedList));

      return { courseworkList: updatedList };
    });
  },

  loadCoursework: () => {
    const savedCoursework = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedCoursework) {
      set({ courseworkList: JSON.parse(savedCoursework) });
    }
  },
}));
