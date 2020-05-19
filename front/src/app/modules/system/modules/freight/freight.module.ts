import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FreightRoutingModule} from './freight-routing.module';
import {FreightComponent} from './freight.component';
import {AddFreightComponent} from './components/add-freight/add-freight.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [FreightComponent, AddFreightComponent],
    imports: [
        CommonModule,
        FreightRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class FreightModule {
}
