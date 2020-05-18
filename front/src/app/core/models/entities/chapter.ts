import {Course} from './course';

export class Chapter {

  public id: number;
  public name: string;
  public course_id: number;
  public description: string;
  public course: Course;
}
