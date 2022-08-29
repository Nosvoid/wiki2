import { Component, OnInit } from '@angular/core';

// Json files
import bombrunnerData from "../_json/schedule/bombrunner.json";
import caligorData from "../_json/schedule/caligor.json";
import colorpvpData from "../_json/schedule/colorpvp.json";
import famdungeonData from "../_json/schedule/famdungeon.json";
import icData from "../_json/schedule/instantcombat.json";
import meteoriteData from "../_json/schedule/meteorite.json";
import rbbData from "../_json/schedule/rbb.json";
import talentarenaData from "../_json/schedule/talentarena.json";
import wbData from "../_json/schedule/wb.json";
import wba4Data from "../_json/schedule/wba4.json";
import wb81Data from "../_json/schedule/wb81.json";

interface BombRunner {
  hour: String;
}
interface Caligor {
  hour: String;
}
interface ColorPvp {
  hour: String;
}
interface FamDungeon {
  hour: String;
}
interface Ic {
  hour: String;
}
interface Meteorite {
  hour: String;
}
interface Rbb {
  hour: String;
}
interface TalentArena {
  hour: String;
}
interface WorldBoss {
  hour: String;
}
interface WorldBossA4 {
  hour: String;
}
interface WorldBoss81 {
  hour: String;
}

function openEvent() {
  let btn = document.querySelectorAll('.open-event');
  
  btn.forEach(element => {
    element.addEventListener('click', () => {
      let next = element.nextElementSibling;

      if(next?.classList.contains('display-none')) {
        next.classList.remove('display-none');
        next.classList.add('display-grid');
      } else if(next?.classList.contains('display-grid')) {
        next.classList.remove('display-grid');
        next.classList.add('display-none');
      }
    });
  });
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    openEvent();
  }

  bombrunner : BombRunner[] = bombrunnerData;
  caligor : Caligor[] = caligorData;
  colorpvp : ColorPvp[] = colorpvpData;
  famdungeon : FamDungeon[] = famdungeonData;
  instantcombat : Ic[] = icData;
  meteorite : Meteorite[] = meteoriteData;
  rbb : Rbb[] = rbbData;
  talentarena : TalentArena[] = talentarenaData;
  worldboss : WorldBoss[] = wbData;
  worldbossa4 : WorldBossA4[] = wba4Data;
  worldboss81 : WorldBoss81[] = wb81Data;
}
