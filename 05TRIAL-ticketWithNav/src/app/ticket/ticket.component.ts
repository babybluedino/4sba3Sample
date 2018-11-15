import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets: any;
  allTickets = 'http://localhost:8084/';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.allTickets).subscribe(data => {
      this.tickets = data;
    });
  }
}
