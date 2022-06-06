import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tracker } from '../model/tracker';
import { TrackerService } from '../service/tracker.service';



@Component({
  selector: 'app-track-application',
  templateUrl: './track-application.component.html',
  styleUrls: ['./track-application.component.css']
})
export class TrackApplicationComponent implements OnInit {

  submitted = false;
  id: number = 0;
  applicationid: number = 0;
  tracker: Tracker = new Tracker();
  



  constructor(private route: ActivatedRoute, private router: Router,
    private trackerService: TrackerService) { }
    
  ngOnInit() {

    this.tracker = new Tracker();
  }
    onSubmit() {
      this.submitted = true;
      this.getTracker(this.id,this.applicationid);    
    }
  getTracker(id:number,applicationid:number){

    this.trackerService.getTracker(this.id, this.applicationid)
      .subscribe((data: Tracker) => {
        console.log(data)
        this.tracker = data;
      }, (error: any) => console.log(error));

  }

}