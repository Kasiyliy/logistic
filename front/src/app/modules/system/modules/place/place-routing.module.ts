import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaceComponent} from "./place.component";
import {MainComponent} from "./components/main/main.component";


const routes: Routes = [{
    path: '',
    component: PlaceComponent,
    children: [
        {
            path: 'main',
            component: MainComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlaceRoutingModule {
}
