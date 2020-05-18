import {User} from './user';

export class Team {
  public id: number;
  public name: string;
  public coach_id: number;
  public coach: User;
}
