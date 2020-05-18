import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChapterComponent} from './chapter.component';
import {ChapterListComponent} from './components/chapter-list/chapter-list.component';
import {ChapterAddComponent} from './components/chapter-add/chapter-add.component';
import {ChapterEditComponent} from './components/chapter-edit/chapter-edit.component';

const routes: Routes = [
  {
    path: ':id',
    component: ChapterComponent,
    children: [
      {
        path: '',
        component: ChapterListComponent
      },
      {
        path: 'add',
        component: ChapterAddComponent
      },
      {
        path: 'edit/:chapter_id',
        component: ChapterEditComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterRoutingModule {
}
