import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'ticket',
    component: TicketComponent,
    data: { title: 'Ticket List' }
  },
  {
    path: 'ticket-detail/:id',
    component: TicketDetailComponent,
    data: { title: 'Ticket Details' }
  },
  {
    path: 'ticket-create',
    component: TicketCreateComponent,
    data: { title: 'Create Ticket' }
  },
  {
    path: 'ticket-edit/:id',
    component: TicketEditComponent,
    data: { title: 'Edit Ticket' }
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketDetailComponent,
    TicketCreateComponent,
    TicketEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
