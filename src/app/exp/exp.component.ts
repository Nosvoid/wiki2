import { Component, OnInit } from '@angular/core';


import expData1 from "../_json/special-sets/exp/exp-costumes.json";
import expData2 from "../_json/special-sets/exp/exp-pets.json";
import expData3 from "../_json/special-sets/exp/exp-skins.json";
import expData4 from "../_json/special-sets/exp/exp-titles.json";
import expData5 from "../_json/special-sets/exp/exp-buffs.json";






interface Exp {
  regular: Array<Regular>;

}
interface Exp1 {
  regular: Array<Regular>;

}


interface Regular {
  name: String;
  img: String;
  location: String;
}
@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  
  
  exp1: Exp[] = expData1;
  exp2: Exp[] = expData2;
  exp3: Exp[] = expData3;
  exp4: Exp[] = expData4;
  exp5: Exp[] = expData5;
}
