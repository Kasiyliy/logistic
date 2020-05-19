import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlaceRoutingModule} from './place-routing.module';
import {PlaceComponent} from './place.component';
import {MainComponent} from './components/main/main.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [PlaceComponent, MainComponent],
    imports: [
        CommonModule,
        PlaceRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class PlaceModule {
}
