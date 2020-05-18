import {Chapter} from './chapter';
import {LessonType} from './lesson-type';

export class Lesson {
  public id: number;
  public name: string;
  public content: string;
  public chapter_id: number;
  public lesson_type_id: number;
  public chapter: Chapter;
  public lesson_type: LessonType;
}
