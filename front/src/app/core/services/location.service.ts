import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class LocationService {
    getPosition(): Promise<any> {
        return new Promise((resolve, reject) => {

            navigator.geolocation.getCurrentPosition(resp => {

                    resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
                },
                err => {
                    reject(err);
                });
        });
    }


    calcCrow(lat1, lon1, lat2, lon2) {
        const R = 6371; // km
        const dLat = this.toRad(lat2 - lat1);
        const dLon = this.toRad(lon2 - lon1);
        lat1 = this.toRad(lat1);
        lat2 = this.toRad(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    }

    toRad(Value) {
        return Value * Math.PI / 180;
    }
}