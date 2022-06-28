import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VideoCard } from '../../models/videocard-component.model';

@Component({
  selector: 'app-videolist-component',
  templateUrl: './videolist-component.component.html',
  styleUrls: ['./videolist-component.component.css']
})
export class VideolistComponentComponent implements OnInit, OnChanges {

  @Input() searchBarDataFromChild: string = "";

public videoList: VideoCard[] = [ 
 new VideoCard("assets/images/thumbnail01.png", "The Coding Train", "1.7: git init and git add - Git and GitHub for Poets", "assets/icons/icon01.jpg", "1,8 k vues", 1234400000, "il y a 1 jour"),
 new VideoCard("assets/images/thumbnail02.png", "BGM channel", "Relaxing Jazz Piano Radio - Slow Jazz Music", "assets/icons/icon02.jpg", "715 k vues", 1234400000, "il y a 20 heures"),
 new VideoCard("assets/images/thumbnail03.png", "WB Kids", "Tom & Jerry | Classic Cartoon Compilation", "assets/icons/icon03.jpg", "2,4 M de vues", 1234400000, "il y a 3 ans"),
 new VideoCard("assets/images/thumbnail04.png", "BFMTV", "Eric Zemmour sur CNews interviewé par Christine Kelly", "assets/icons/icon04.jpg", "4,8 k vues", 1234400000, "il y a 4 jour"),
 new VideoCard("assets/images/thumbnail05.png", "ARTE", "Tortue marine - Sea turtle", "assets/icons/icon05.jpg", "415 k vues", 1234400000, "il y a 16 heures"),
 new VideoCard("assets/images/thumbnail06.png", "Envie de Bien Manger", "Pourquoi manger ce qu’on mange ?", "assets/icons/icon06.jpg", "1,5 M de vues", 1234400000, "il y a 1 an"),

];

videoListFiltered: VideoCard[] = [...this.videoList];

  constructor() { }

  ngOnChanges(): void {
    console.log("changed")
    this.videoListFiltered = this.videoList.filter(video => video.videoTitle.includes(this.searchBarDataFromChild));
  }

  ngOnInit(): void {  
  }
}
