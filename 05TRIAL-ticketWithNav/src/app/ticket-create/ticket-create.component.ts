import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {

  ticket = {};
  createTicket = 'http://localhost:8084/create';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveTicket() {
    this.http.post(this.createTicket, this.ticket)
      .subscribe(res => {
          this.router.navigate(['/ticket']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
