import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import { BookComponent } from './book/book.component';
import { PeopleComponent } from './people/people.component';
import { ToursComponent } from './tours/tours.component';
import { AboutComponent } from './about/about.component';
import { LocalKidsComponent } from './local-kids/local-kids.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: './home/home.component', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'abouts', component: AboutComponent },
  { path: 'kids', component: LocalKidsComponent },
  { path: 'book', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
