import { Component, OnInit, Input } from '@angular/core';
import { VideoCard } from '../../models/videocard-component.model';

@Component({
  selector: 'app-videocard-component',
  templateUrl: './videocard-component.component.html',
  styleUrls: ['./videocard-component.component.css']
})
export class VideocardComponentComponent implements OnInit {

  @Input() videoListItemChild: VideoCard = new VideoCard (

    "",
    "",
    "",
    "",
    "",
    0,
    "",
  )
  constructor() { }

  ngOnInit(): void {
  }
};

