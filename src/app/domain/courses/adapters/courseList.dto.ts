export interface CourseListDTO {
    courses: {
      id: number;
      name: string;
      duration: string;
      availableSlots: number;
    }[];
  }