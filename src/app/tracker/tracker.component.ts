import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tracker } from '../model/tracker';
import { TrackerService } from '../service/tracker.service';


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  id: number = 0;
  applicationid: number = 0;
  tracker: Tracker = new Tracker();



  constructor(private route: ActivatedRoute, private router: Router,
    private trackerService: TrackerService) { }
    
  ngOnInit() {

    this.tracker = new Tracker();
    this.applicationid = this.route.snapshot.params['applicationid'];
    this.id = this.route.snapshot.params['id'];

    alert("id = " + this.id + "appid = " + this.applicationid)
    /* this.route.params
       .subscribe(
         (params: Params) => {
           this.id = +params['id'];
           this.applicationid = +params['applicationid'];*/
    this.trackerService.getTracker(this.id, this.applicationid)
      .subscribe((data: Tracker) => {
        console.log(data)
        this.tracker = data;
      }, (error: any) => console.log(error));

  }

}