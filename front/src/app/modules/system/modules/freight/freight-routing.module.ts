import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FreightComponent} from "./freight.component";
import {AddFreightComponent} from "./components/add-freight/add-freight.component";
import {ListFreightComponent} from "./components/list-freight/list-freight.component";


const routes: Routes = [
    {
        path: '',
        component: FreightComponent,
        children: [
            {
                path: 'create-freight',
                component: AddFreightComponent
            },
            {
                path: 'list-freight',
                component: ListFreightComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FreightRoutingModule {
}
