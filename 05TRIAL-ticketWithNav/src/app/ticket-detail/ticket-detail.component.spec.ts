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

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getTicketDetail(this.route.snapshot.params['id']);
  }

  getTicketDetail(id) {
    this.http.get('/tickets/' + id).subscribe(data => {
      this.ticket = data;
    });
  }
  deleteTicket(id) {
    this.http.delete('/tickets/' + id)
      .subscribe(res => {
          this.router.navigate(['/ticket']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
