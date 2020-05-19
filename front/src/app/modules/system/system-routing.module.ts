import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';

const routes: Routes = [
    {
        path: '',
        component: SystemComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'users',
                loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
            },
            {
                path: 'freights',
                loadChildren: () => import('./modules/freight/freight.module').then(m => m.FreightModule),
            },
            {
                path: 'places',
                loadChildren: () => import('./modules/place/place.module').then(m => m.PlaceModule),
            },
            {
                path: 'error',
                loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule),
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {
}
