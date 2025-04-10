import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CourseRepository } from '../../domain/repositories/courses/course.repository';
import { CourseImplementationRepository } from './repositories/course-implementation.repository';

import { GetAllCourseUseCase } from '../../domain/useCases/courses/course-getAll.useCase';
import { CreateAllCoursesUseCase } from '../../domain/useCases/courses/course-create.useCase';
import { DeleteCourseUseCase } from '../../domain/useCases/courses/course-delete.useCase';
import { UpdateCourseUseCase } from '../../domain/useCases/courses/course-update.useCase';
import { GetByIdCourseUseCase } from '../../domain/useCases/courses/course-getById.useCase';



const getCoursesUseCaseFactory = (repo: CourseRepository) => new GetAllCourseUseCase(repo);
const createCourseUseCaseFactory = (repo: CourseRepository) => new CreateAllCoursesUseCase(repo);
const deleteCourseUseCaseFactory = (repo: CourseRepository) => new DeleteCourseUseCase(repo);
const updateCourseUseCaseFactory = (repo: CourseRepository) => new UpdateCourseUseCase(repo); 
const getCourseByIdUseCaseFactory = (repo: CourseRepository) => new GetByIdCourseUseCase(repo);

export const getCoursesUseCaseProvider = {
  provide: GetAllCourseUseCase,
  useFactory: getCoursesUseCaseFactory,
  deps: [CourseRepository],
};

export const createCourseUseCaseProvider = {
  provide: CreateAllCoursesUseCase,
  useFactory: createCourseUseCaseFactory,
  deps: [CourseRepository],
};

export const deleteCourseUseCaseProvider = {
  provide: DeleteCourseUseCase,
  useFactory: deleteCourseUseCaseFactory,
  deps: [CourseRepository],
};

export const updateCourseUseCaseProvider = {
  provide: UpdateCourseUseCase,
  useFactory: updateCourseUseCaseFactory,
  deps: [CourseRepository],
};

export const getCourseByIdUseCaseProvider = {
  provide: GetByIdCourseUseCase,
  useFactory: getCourseByIdUseCaseFactory,
  deps: [CourseRepository],
};



@NgModule({
  providers: [
    getCoursesUseCaseProvider, 
    createCourseUseCaseProvider,
    deleteCourseUseCaseProvider,
    updateCourseUseCaseProvider,
    getCourseByIdUseCaseProvider,
    {provide: CourseRepository, useClass: CourseImplementationRepository},
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CourseDataModule { }
