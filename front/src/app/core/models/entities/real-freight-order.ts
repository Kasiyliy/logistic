import {Place} from "./place";
import {User} from "./user";
import {CarType} from "./car-type";

export class RealFreightOrder {
    public id: number;
    public initial_place_id: number;
    public initial_place: Place;
    public start_date: string;
    public termination_place_id: number;
    public termination_place: Place;
    public finish_date: string;
    public distance: number;
    public height: number;
    public weight: number;
    public price: number;
    public price_for_distance: number;
    public description: string;
    public contact_information: string;
    public car_specific: string;
    public status: string;
    public real_end_date: string;
    public driver_user_id: number;
    public driver: User;
    public car_type_id: number;
    public car_type: CarType;
    public created_at: string;
    public updated_at: string;
}