import { Component, OnInit } from '@angular/core';

import contentcreatorsData from "../_json/crew/content-creators.json";

interface ContentCreators {
  name: String;
  yt: String;
  twitch: String;
  ytlink: String;
  twitchlink: String;
  rank: String;
  rankimg: String;
  rankclass: String;
  ytclass: String;
  twitchclass: String;
}

@Component({
  selector: 'app-content-creators',
  templateUrl: './content-creators.component.html',
  styleUrls: ['./content-creators.component.css']
})
export class ContentCreatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contentcreators: ContentCreators[] = contentcreatorsData;
}
