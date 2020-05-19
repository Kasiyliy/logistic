import {Component, OnInit} from '@angular/core';
import {Place} from "../../../../../../core/models/entities/place";
import {PlaceService} from "../../../../../../core/services/place.service";
import * as mapboxgl from "mapbox-gl";
import {LocationService} from "../../../../../../core/services/location.service";
import {environment} from "../../../../../../../environments/environment";
import {fromPromise} from "rxjs/internal-compatibility";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    places: Place[] = [];
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 43.30501195673838;
    lng = 76.93238495134216;
    addPlaceFormGroup: FormGroup;
    marker: mapboxgl.Marker;

    constructor(private placeService: PlaceService,
                private toastrService: ToastrService,
                private builder: FormBuilder,
                private locationService: LocationService) {
    }

    ngOnInit(): void {

        this.initForm();
        this.initMap();
        this.loadData();
    }

    public loadData() {
        this.placeService.getPlaces().subscribe(perf => {
            this.places = perf;
        })
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

        this.map.on('click', (event) => {
            const lat = event.lngLat.lat;
            const lng = event.lngLat.lng;
            this.putMarker(lng, lat);
            if (this.addPlaceFormGroup) {
                this.addPlaceFormGroup.patchValue({
                    'lat': lat,
                    'lng': lng,
                })
            }
        });


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
        this.putMarker(lng, lat);
    }

    public putMarker(lng, lat) {
        if (this.marker) {
            this.marker.remove();
        }
        this.marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(this.map);
    }

    public initForm() {
        this.addPlaceFormGroup = this.builder.group({
            name: [null, [Validators.required]],
            lat: [null, [Validators.required]],
            lng: [null, [Validators.required]],
        });
    }

    public createPlace() {
        const place = this.addPlaceFormGroup.getRawValue() as Place;
        this.placeService.createPlace(place).subscribe(perf => {
            this.toastrService.success('Новая точка добавлена успешно!');
            this.places.push(perf);
            this.addPlaceFormGroup.reset();
        }, err => {
            this.toastrService.error('Ошибка! Не удалось добавить точку!');
            console.log(err);
        })
    }
}
