import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

import battlePassData from "../_json/battle-pass.json";

interface BattlePass {
  quests: String;
  todo: Array<Todo>;
  rewards: Array<Rewards>
}

interface Todo {
  quest: String;
}
interface Rewards {
  reward: String;
}

@Component({
  selector: 'app-battle-pass',
  templateUrl: './battle-pass.component.html',
  styleUrls: ['./battle-pass.component.css']
})
export class BattlePassComponent implements OnInit {

  openBPQuests() {
    $(document).ready(function() {
      $('.open-quests').click(function(event){
        let btn = event.target;
        let nextChild = btn.nextElementSibling;

        if(nextChild?.classList.contains('display-none')) {
          nextChild.classList.remove('display-none');
          nextChild.classList.add('display-grid');
        } else if(nextChild?.classList.contains('display-grid')) {
          nextChild.classList.remove('display-grid');
          nextChild.classList.add('display-none');
        }
      });
    });
  }

  constructor() { }

  ngOnInit(): void {
    this.openBPQuests();
  }

  battlepass: BattlePass[] = battlePassData;
}
