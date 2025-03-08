export class Course {
  constructor(
    public id: number,
    public name: string,
    public duration: string,
    public availableSlots: number
  ) {}
}