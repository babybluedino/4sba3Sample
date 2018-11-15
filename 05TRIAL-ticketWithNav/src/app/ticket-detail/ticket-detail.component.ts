import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket = {};
  defaultURL = 'http://localhost:8084/tickets/';
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getTicketDetail(this.route.snapshot.params['id']);
  }

  getTicketDetail(id) {
    this.http.get(this.defaultURL + id).subscribe(data => {
      this.ticket = data;
    });
  }
  deleteTicket(id) {
    this.http.delete(this.defaultURL + id)
      .subscribe(res => {
          this.router.navigate(['/ticket']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
