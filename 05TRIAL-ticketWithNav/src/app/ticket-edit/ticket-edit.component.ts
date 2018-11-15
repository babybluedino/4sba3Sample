import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {

  ticket = {};
  defaultURL = 'http://localhost:8084/tickets/';
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTicket(this.route.snapshot.params['id']);
  }

  getTicket(id) {
    this.http.get(this.defaultURL + id).subscribe(data => {
      this.ticket = data;
    });
  }

  updateTicket(id, data) {
    this.http.put(this.defaultURL + id, data)
      .subscribe(res => {
          this.router.navigate(['/ticket']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
