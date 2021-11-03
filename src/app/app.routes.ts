import { Routes } from '@angular/router';
import { AboutComponent } from '@src/app/pages/about/about.component';
import { MovieListComponent } from '@src/app/pages/movie-list/movie-list.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full',
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
