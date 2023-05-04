import { Component, OnInit } from '@angular/core';

import fishsetData from "../_json/special-sets/fish-sets/fish-set-hats.json";
import fishsetData1 from "../_json/special-sets/fish-sets/fish-set-costumes.json";
import fishsetData2 from "../_json/special-sets/fish-sets/fish-set-skins.json";
import fishsetData3 from "../_json/special-sets/fish-sets/fish-set-pets.json";
import fishsetData4 from "../_json/special-sets/fish-sets/fish-set-titles.json";
import fishsetData5 from "../_json/special-sets/fish-sets/fish-set-buffs.json";






interface ActFourSet {
  regular: Array<Regular>;

}
interface ActFourSet1 {
  regular: Array<Regular>;

}


interface Regular {
  name: String;
  img: String;
  location: String;
}
@Component({
  selector: 'app-fish-set',
  templateUrl: './fish-set.component.html',
  styleUrls: ['./fish-set.component.css']
})
export class FishSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  
  actfourset: ActFourSet[] = fishsetData;
  actfourset1: ActFourSet[] = fishsetData1;
  actfourset2: ActFourSet[] = fishsetData2;
  actfourset3: ActFourSet[] = fishsetData3;
  actfourset4: ActFourSet[] = fishsetData4;
  actfourset5: ActFourSet[] = fishsetData5;
}
