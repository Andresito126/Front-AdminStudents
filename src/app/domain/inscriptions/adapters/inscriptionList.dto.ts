export interface InscriptionListDTO {
  inscriptions: {
    id: number;
    student_id: number;
    course_id: number;
    status: string;
  }[];
}