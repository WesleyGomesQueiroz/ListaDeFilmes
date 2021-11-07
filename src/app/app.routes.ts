import { Routes } from '@angular/router';
import { AboutComponent } from '@src/app/pages/about/about.component';
import { MovieFormComponent } from '@src/app/pages/movie-form/movie-form.component';
import { MovieListComponent } from '@src/app/pages/movie-list/movie-list.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies/2/edit',
    pathMatch: 'full',
  },
  {
    path: "movies/:id/edit",
    component: MovieFormComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "movies",
    component: MovieListComponent
  }
];
