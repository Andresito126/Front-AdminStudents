import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../domain/courses/models/course';
import { CourseGateway } from '../../../domain/courses/models/gateway/course_gateway';
import { CreateAllCoursesUseCase } from '../../../domain/useCases/courses/course-create.useCase';
import { CourseModel } from '../../../domain/models/courses/course.model';
import { GetByIdCourseUseCase } from '../../../domain/useCases/courses/course-getById.useCase';
import { CreateCourseModel } from '../../../domain/models/courses/createCourse.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  isEditMode = false;
  courseId: number | undefined;

  constructor(
    private _fb: FormBuilder,
    private _getCourseByIdUC: GetByIdCourseUseCase,
    private _createCourseUC: CreateAllCoursesUseCase,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.courseForm = this._fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      availableSlots: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.courseId = +this._route.snapshot.paramMap.get('id')!;
    if (this.courseId) {
      this.isEditMode = true;
      this.loadCourse(this.courseId);
    }
  }

  loadCourse(id: number): void {
    this._getCourseByIdUC.execute(id).subscribe((course: CourseModel) => {
      this.courseForm.patchValue(course); // Rellenamos el formulario con los datos obtenidos
    });
  }

  onSubmit(): void {
    if (this.courseForm.invalid) return;

    const formValue = this.courseForm.value;

    // Creamos el objeto para enviar a la API (sin id en la creación)
    const courseToSave: CourseModel = {
      id: this.isEditMode ? this.courseId! : 0, // Si estamos en edición, ponemos el id, si no, ponemos 0 o undefined
      name: formValue.name,
      duration: +formValue.duration,
      availableSlots: formValue.availableSlots,
    };

    if (this.isEditMode && this.courseId) {
      // Si estamos en modo de edición, actualizamos el curso
      this._createCourseUC.execute(courseToSave).subscribe(
        () => this._router.navigate(['/courses']),
        (error) => console.error('Error al actualizar el curso:', error)
      );
    } else {
      // Si estamos en modo de creación, guardamos el nuevo curso
      this._createCourseUC.execute(courseToSave).subscribe(
        () => this._router.navigate(['/courses']),
        (error) => console.error('Error al guardar el curso:', error)
      );
    }
  }

  
  
}
