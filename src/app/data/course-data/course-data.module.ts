import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CourseRepository } from '../../domain/repositories/courses/course.repository';
import { CourseImplementationRepository } from './repositories/course-implementation.repository';

import { GetAllCourseUseCase } from '../../domain/useCases/courses/course-getAll.useCase';



const getCoursesUseCaseFactory = (repo: CourseRepository) => new GetAllCourseUseCase(repo);

export const getCoursesUseCaseProvider = {
  provide: GetAllCourseUseCase,
  useFactory: getCoursesUseCaseFactory,
  deps: [CourseRepository],
};


@NgModule({
  providers: [
    getCoursesUseCaseProvider,
    {provide: CourseRepository, useClass: CourseImplementationRepository},
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CourseDataModule { }
