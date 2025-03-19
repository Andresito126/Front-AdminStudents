import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../domain/courses/models/course';
import { CourseGateway } from '../../../domain/courses/models/gateway/course_gateway';

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
    private _courseGateway: CourseGateway,
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
    this._courseGateway.getByID(id.toString()).subscribe((course: Course) => {
      this.courseForm.patchValue(course);
    });
  }

  onSubmit(): void {
    if (this.courseForm.invalid) return;

    const formValue = this.courseForm.value;

    // Transforma los datos para que coincidan con lo que espera el servidor
    const requestBody = {
      name: formValue.name,
      duration: +formValue.duration, // Convierte a número si es necesario
      available_slots: formValue.availableSlots, // Cambia availableSlots a available_slots
    };

    if (this.isEditMode && this.courseId) {
      this._courseGateway.update(this.courseId, requestBody).subscribe(
        () => this._router.navigate(['/courses']),
        (error) => console.error('Error al actualizar el curso:', error)
      );
    } else {
      this._courseGateway.save(requestBody).subscribe(
        () => this._router.navigate(['/courses']),
        (error) => console.error('Error al guardar el curso:', error)
      );
    }
  }
}