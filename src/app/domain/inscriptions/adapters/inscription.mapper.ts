import { Inscription } from "../models/inscription";
import { InscriptionListDTO } from "./inscriptionList.dto";
export class InscriptionMapper {
  static fromDTO(dto: InscriptionListDTO): Inscription[] {
    return dto.inscriptions.map(
      (item) =>
        new Inscription(
          item.id,
          item.student_id,
          item.course_id,
          item.status
        )
    );
  }
}