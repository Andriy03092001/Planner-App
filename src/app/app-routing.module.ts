import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventSrartComponent } from './events/event-srart/event-srart.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  { path: "", redirectTo: "/events", pathMatch: 'full' },
  {
    path: "events",
    component: EventsComponent,
    children: [
      { path: "", component: EventSrartComponent },
      { path: ":id", component: EventDetailComponent },
    ]
  },
  { path: "requirements", component: RequirementsComponent },
  { path: "**", component: Page404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
