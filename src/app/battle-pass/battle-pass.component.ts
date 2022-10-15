import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-battle-pass',
  templateUrl: './battle-pass.component.html',
  styleUrls: ['./battle-pass.component.css']
})
export class BattlePassComponent implements OnInit {

  battlePass = [
    {
      dates: "First Quests : ",
      pvpQuests: [
        { quest: "Participate to Caligor 2 time.", number: "1." },
        { quest: "Kill [10] peoples in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Participate to the Instant combat 1 time.", number: "1." },
        { quest: "Successfully complete the raid [Zenas] x25.", number: "2." },
      ],
      rewards: [
        { reward: "- 100x Amulet Box (x4)." },
        { reward: "- 500x Giant Lump of Gold." },
        { reward: "- 1x Random BP Box." },
      ]
    },
    {
      dates: "Second Quests : ",
      pvpQuests: [
        { quest: "Participate to the A4 World Boss 1 time.", number: "1." },
        { quest: "Kill [15] peoples in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Participate to the World Boss 1 time.", number: "1." },
        { quest: "Successfully complete the raid [Fernon] x50.", number: "2." },
      ],
      rewards: [
        { reward: "- 100x Random SP Box (Get a random sp7/8 from all classes)." },
        { reward: "- 750x Giant Lump of Gold." },
        { reward: "- 1x Random BP Box." },
      ]
    },
    {
      dates: "Third Quests : ",
      pvpQuests: [
        { quest: "Participate to the A4 World Boss 1 time.", number: "1." },
        { quest: "Successfully complete the raid [Maru] x50.", number: "2." },
      ],
      pveQuests: [
        { quest: "Participate to the RBB 1 time.", number: "1." },
        { quest: "Participate in [2] raids in A4.", number: "2." },
      ],
      rewards: [
        { reward: "- 15x Dragon Gem." },
        { reward: "- 1000x Giant Lump of Gold." },
        { reward: "- 1x Random BP Box." },
      ]
    },
    {
      dates: "Fourth Quests : ",
      pvpQuests: [
        { quest: "Participate to the AOT 1 time.", number: "1." },
        { quest: "Kill [20] peoples in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Participate to the Meteorite Game 1 time.", number: "1." },
        { quest: "Successfully complete the raid [Belial] x25.", number: "2." },
      ],
      rewards: [
        { reward: "- 100x Perfections." },
        { reward: "- 1250x Giant Lump of Gold." },
        { reward: "- 1x Random BP Box." },
      ]
    },
    {
      dates: "Fifth Quests : ",
      pvpQuests: [
        { quest: "Participate to the Color Pvp 2 time.", number: "1." },
        { quest: "Participate in [4] raids in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Participate to the p8.1 world boss 1 time.", number: "1." },
        { quest: "Successfully complete the raid [Paimon] x25.", number: "2." },
      ],
      rewards: [
        { reward: "- 9999x Angel feathers." },
        { reward: "- 1500x Giant Lump of Gold." },
        { reward: "- 1x Random BP Box." },
      ]
    },
    {
      dates: "Sixth Quests : ",
      pvpQuests: [
        { quest: "Participate to A4 World Boss 2 time.", number: "1." },
        { quest: "Kill [25] peoples in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Participate to the Bomb Runner 1 time.", number: "1." },
        { quest: "Successfully complete the raid [Sandstorm] x25.", number: "2." },
      ],
      rewards: [
        { reward: "- 5x Blood red Ruby." },
        { reward: "- 1750x Giant Lump of Gold." },
        { reward: "- 1x Random BP Box." },
      ]
    },
    {
      dates: "Seventh Quests : ",
      pvpQuests: [
        { quest: "Participate to Caligor 4 time.", number: "1." },
        { quest: "Kill [100] peoples in A4.", number: "2." },
        { quest: "Participate in [6] raids in A4.", number: "3." },
      ],
      pveQuests: [
        { quest: "Participate to the Color PVP 2 times.", number: "1." },
        { quest: "Successfully complete the raid [Ibrahim] x5.", number: "2." },
        { quest: "Successfully complete the raid [Hardcore] x5.", number: "3." },
      ],
      rewards: [
        { reward: "- 10x Caligor Winning Side Chest." },
        { reward: "- 10x Event Ticket." },
        { reward: "- 2000x Giant Lump of Gold." },
        { reward: "- 5x Random BP Box." },
        { reward: "- 1x Wings Box." },
        { reward: "- 1x Old Event Box." },
      ]
    },
  ]

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
}
