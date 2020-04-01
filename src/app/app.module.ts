import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { RequirementEditComponent } from './requirements/requirement-edit/requirement-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    RequirementsComponent,
    EventListComponent,
    EventDetailComponent,
    EventItemComponent,
    RequirementEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
