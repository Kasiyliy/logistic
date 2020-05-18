import {Role} from './role';

export class User {
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public password: string;
    public email_verified_at: string;
    public created_at: string;
    public updated_at: string;
    public deleted_at: string;
    public role_id: number;
    public role: Role;
}
