import { Component, OnInit } from '@angular/core';

import questsData from "../_json/daily-quests.json";

interface DailyQuests {
  title: String;
  quests: Array<Quests>
}

interface Quests {
  name: String;
  npc: String;
  todo: Array<Quest>
}

interface Quest {
  name: String;
  complete: String;
  rewards: Array<Rewards>
}

interface Rewards {
  reward: String;
}

@Component({
  selector: 'app-daily-quests',
  templateUrl: './daily-quests.component.html',
  styleUrls: ['./daily-quests.component.css']
})
export class DailyQuestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quests: DailyQuests[] = questsData;
}
