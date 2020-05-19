import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FreightRoutingModule} from './freight-routing.module';
import {FreightComponent} from './freight.component';
import {AddFreightComponent} from './components/add-freight/add-freight.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListFreightComponent } from './components/list-freight/list-freight.component';
import { FreightOrdersComponent } from './components/freight-orders/freight-orders.component';


@NgModule({
    declarations: [FreightComponent, AddFreightComponent, ListFreightComponent, FreightOrdersComponent],
    imports: [
        CommonModule,
        FreightRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class FreightModule {
}
