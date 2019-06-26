import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlacesComponent } from './places/places.component';
import { PictureHeaderComponent } from './picture-header/picture-header.component';
import { FooterComponent } from './footer/footer.component';
import { BookComponent } from './book/book.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { PlaceItemComponent } from './places/place-list/place-item/place-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { PlaceShowComponent } from './places/place-show/place-show.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlaceButtonComponent } from './places/place-list/place-button/place-button.component';
import { PeopleComponent } from './people/people.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleItemComponent } from './people/people-item/people-item.component';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule, MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule, MatRadioModule, MatStepperModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacesComponent,
    PictureHeaderComponent,
    FooterComponent,
    BookComponent,
    ContactUsComponent,
    PlaceDetailComponent,
    PlaceListComponent,
    PlaceItemComponent,
    PlaceShowComponent,
    PlaceButtonComponent,
    PeopleComponent,
    PeopleListComponent,
    PeopleItemComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    BsDatepickerModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
