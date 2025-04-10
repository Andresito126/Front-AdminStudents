export interface CourseAttributes {
    id: number;
    name: string;
    duration: number;
    available_slots: number;
  }
  
  export interface Course {
    id: number;
    name: string;
    duration: number;
    available_slots: number;
  }
  
  export interface ResponseCourses {
    courses: Course[];
  }
  