export interface CourseListDTO {
  courses: {
    id: number;
    name: string;
    duration: number;
    available_slots: number;
  }[];
}