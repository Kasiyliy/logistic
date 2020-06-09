import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../../../environments/environment";
import * as mapboxgl from "mapbox-gl";
import {Place} from "../../../../../../core/models/entities/place";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlaceService} from "../../../../../../core/services/place.service";
import {ToastrService} from "ngx-toastr";
import {CarType} from "../../../../../../core/models/entities/car-type";
import {CarTypeService} from "../../../../../../core/services/car-type.service";
import {FreightOrder} from "../../../../../../core/models/entities/freight-order";
import {User} from "../../../../../../core/models/entities/user";
import {UserService} from "../../../../../../core/services/user.service";
import {Role} from "../../../../../../core/models/entities/role";
import {LocationService} from "../../../../../../core/services/location.service";
import {FreightOrderService} from "../../../../../../core/services/freight-order.service";

export class Route {
    public lng1: number;
    public lng2: number;
    public lat1: number;
    public lat2: number;
}

@Component({
    selector: 'app-add-freight',
    templateUrl: './add-freight.component.html',
    styleUrls: ['./add-freight.component.css']
})
export class AddFreightComponent implements OnInit {
    route: Route = new Route();
    places: Place[] = [];
    carTypes: CarType[] = [];
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 43.30501195673838;
    lng = 76.93238495134216;
    marker: mapboxgl.Marker;
    freightOrder = new FreightOrder();
    addFreightOrderFormGroup: FormGroup;
    drivers: User[] = [];
    initialMarker: mapboxgl.Marker;
    terminationMarker: mapboxgl.Marker;

    constructor(private placeService: PlaceService,
                private toastrService: ToastrService,
                private carTypeService: CarTypeService,
                private locationService: LocationService,
                private userService: UserService,
                private freightOrderService: FreightOrderService,
                private builder: FormBuilder) {
    }

    ngOnInit(): void {
        this.initForm();
        this.initMap();
        this.loadData();
    }

    public initForm() {
        this.addFreightOrderFormGroup = this.builder.group({
            initialPlace: [null, [Validators.required]],
            startDate: [null, [Validators.required]],
            terminationPlace: [null, [Validators.required]],
            finishDate: [null, [Validators.required]],
            distance: [null, [Validators.required]],
            height: [null, [Validators.required]],
            width: [null, [Validators.required]],
            weight: [null, [Validators.required]],
            price: [null, [Validators.required]],
            priceForDistance: [null, [Validators.required]],
            description: [null, [Validators.required]],
            contactInformation: [null, [Validators.required]],
            is_own: [false, [Validators.required]],
            driverId: [null, [Validators.required]],
            carTypeId: [null, [Validators.required]],
            carSpecific: [null, [Validators.required]],
        });

        this.addFreightOrderFormGroup.get('initialPlace').valueChanges
            .subscribe(perf => {
                this.initialMarker = this.putMarker(perf.lng, perf.lat, this.initialMarker);
                this.route.lat1 = perf.lat;
                this.route.lng1 = perf.lng;
                this.putLine(this.route);
            });

        this.addFreightOrderFormGroup.get('terminationPlace').valueChanges
            .subscribe(perf => {
                this.terminationMarker = this.putMarker(perf.lng, perf.lat, this.terminationMarker);
                this.route.lat2 = perf.lat;
                this.route.lng2 = perf.lng;
                this.putLine(this.route);
            });

        this.addFreightOrderFormGroup.get('priceForDistance').valueChanges
            .subscribe(perf => {
                let distance = this.addFreightOrderFormGroup.get('distance').value;
                if (distance && perf) {
                    this.calcPrice(+distance, +perf);
                }
            });
        this.addFreightOrderFormGroup.get('distance').valueChanges
            .subscribe(perf => {
                let distance = this.addFreightOrderFormGroup.get('priceForDistance').value;
                if (distance && perf) {
                    this.calcPrice(+distance, +perf);
                }
            });
    }

    public calcPrice(distance, priceForDistance) {
        this.addFreightOrderFormGroup.patchValue({
            price: distance * priceForDistance
        });
    }

    public loadData() {
        this.placeService.getPlaces().subscribe(perf => {
            this.places = perf;
        });
        this.carTypeService.getCarTypes().subscribe(perf => {
            this.carTypes = perf;
        });

        this.userService.getUserByRoleId(Role.ROLE_DRIVER).subscribe(perf => {
            this.drivers = perf;
        });
    }

    public initMap() {


        if (!Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").get()) {
            Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
        }

        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 3,
            center: [this.lng, this.lat]
        });

        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.mapFlyTo(this.lng, this.lat);
            });
        }
    }

    public mapFlyTo(lng, lat) {
        this.map.flyTo({
            center: [this.lng, this.lat]
        });
    }

    public putMarker(lng, lat, marker) {
        if (marker) {
            marker.remove();
        }
        return new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(this.map);
    }

    public putLine(route: Route) {

        if (!(route.lat1 && route.lat2 && route.lng1 && route.lng2)) {
            return;
        }

        if (this.map.getSource('route')) {
            this.map.removeSource('route');
        }
        if (this.map.getLayer('route')) {
            this.map.removeLayer('route');
        }
        this.map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [route.lng1, route.lat1],
                        [route.lng2, route.lat2],
                    ]
                }
            }
        });
        this.map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#888',
                'line-width': 8
            }
        });
        const distance = this.locationService.calcCrow(route.lat1, route.lng1, route.lat2, route.lng2);
        this.addFreightOrderFormGroup.patchValue({
            distance: distance
        });
    }

    addFreightOrder() {
        const freightOrder = this.addFreightOrderFormGroup.getRawValue() as any;
        freightOrder.initial_place_id = freightOrder.initialPlace.id;
        freightOrder.termination_place_id = freightOrder.terminationPlace.id;
        freightOrder.start_date = freightOrder.startDate;
        freightOrder.finish_date = freightOrder.finishDate;
        freightOrder.price_for_distance = freightOrder.priceForDistance;
        freightOrder.contact_information = freightOrder.contactInformation;
        freightOrder.car_specific = freightOrder.carSpecific;
        freightOrder.driver_user_id = freightOrder.driverId;
        freightOrder.car_type_id = freightOrder.carTypeId;
        this.freightOrderService.createFreightOrder(freightOrder).subscribe(perf => {
            this.addFreightOrderFormGroup.reset();
            this.toastrService.success('Успешно!');
        }, err => {
            this.toastrService.error('Ошибка!');
            console.log(err);
        })
    }
}
