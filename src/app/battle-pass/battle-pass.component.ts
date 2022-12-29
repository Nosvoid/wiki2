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
      dates: "First Quests : 11 December to the 13 December",
      pvpQuests: [
        { quest: "Participate to Caligor 2 time.", number: "1." },
        { quest: "Kill [10] peoples in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Successfully complete the raid [Santa Claus] x30.", number: "1." },
        { quest: "Participate in the Winter World Boss 1 time.", number: "2." },
      ],
      rewards: [
        { reward: "- 2x White Walker Box." },
        { reward: "- 500x Giant Lump of Gold." },
        { reward: "- 2x Deluxe Christmas Box." },
        { reward: "- 1x Winter Box." }
      ]
    },
    {
      dates: "Second Quests : 14 December to the 16 December",
      pvpQuests: [
        { quest: "Participate to the A4 World Boss 1 time.", number: "1." },
        { quest: "Kill [15] peoples in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Kill [100] \"Snowman\" in the Winter Farm Map.", number: "1." },
        { quest: "Participate in the Winter World Boss 1 time.", number: "2." },
      ],
      rewards: [
        { reward: "- 100x Amulet Box (x4)" },
        { reward: "- 750x Giant Lump of Gold." },
        { reward: "- 1x Winter Box." },
      ]
    },
    {
      dates: "Third Quests : 17 December to the 19 December",
      pvpQuests: [
        { quest: "Participate to the Color Pvp 2 times.", number: "1." },
        { quest: "Participate in [4] raids in A4.", number: "2." },
        
      ],
      pveQuests: [
        { quest: "Successfully complete the raid [Santa Claus] x60.", number: "1." },
        { quest: "Participate in the Winter World Boss 1 time.", number: "2." },
      ],
      rewards: [
        { reward: "- 20x Dragon Gem." },
        { reward: "- 1000x Giant Lump of Gold." },
        { reward: "- 5x Eternal Ice." },
        { reward: "- 1x Winter Box." }
      ]
    },
    {
      dates: "Fourth Quests : 20 December to the 22 December",
      pvpQuests: [
        { quest: "Participate to the AOT 1 time.", number: "1." },
        { quest: "Kill [20] peoples in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Successfully complete the raid [Snowman] x10.", number: "1." },
        { quest: "Participate in the Winter World Boss 1 time.", number: "2." },
      ],
      rewards: [
        { reward: "- 120x Perfections." },
        { reward: "- 1250x Giant Lump of Gold." },
        { reward: "- 2x Deluxe Christmas Box." },
        { reward: "- 1x Winter Box." }
      ]
    },
    {
      dates: "Fifth Quests : 23 December to the 25 December",
      pvpQuests: [
        { quest: "Participate to the RBB 1 time.", number: "1." },
        { quest: "Participate in [2] raids in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Kill [100] \"Docile Snowman\" in the Winter Farm Map.", number: "1." },
        { quest: "Participate in the Winter World Boss 1 time.", number: "2." },
      ],
      rewards: [
        { reward: "- 3x White Walker Box." },
        { reward: "- 1500x Giant Lump of Gold." },
        { reward: "- 1x Winter Box." },
      ]
    },
    {
      dates: "Sixth Quests : 26 December to the 28 December",
      pvpQuests: [
        { quest: "Participate to A4 World Boss 1 time.", number: "1." },
        { quest: "Kill [25] peoples in A4.", number: "2." },
      ],
      pveQuests: [
        { quest: "Kill [100] \"Amora\" in the Winter Farm Map.", number: "1." },
        { quest: "Participate in the Winter World Boss 1 time.", number: "2." },
      ],
      rewards: [
        { reward: "- 10x Blood red Ruby." },
        { reward: "- 1750x Giant Lump of Gold." },
        { reward: "- 1x Winter Box." },
      ]
    },
    {
      dates: "Seventh Quests (Last) : 29 December to the 6 January",
      pvpQuests: [
        { quest: "Participate to Caligor 4 time.", number: "1." },
        { quest: "Kill [100] peoples in A4.", number: "2." },
        { quest: "Participate in [6] raids in A4.", number: "3." }
      ],
      pveQuests: [
        { quest: "Successfully complete the raid [Santa Claus] x100.", number: "1." },
        { quest: "Successfully complete the raid [Snowman] x20.", number: "2." },
        { quest: "Kill [200] \"Snowman\", \"Docile Snowman\" and \"Amora\" in the Winter Farm Map.", number: "3." },
        { quest: "Participate in the Winter World Boss 1 time.", number: "4." }
      ],
      rewards: [
        { reward: "- 5x White Walker Box." },
        { reward: "- 10x Event Ticket." },
        { reward: "- 3000x Giant Lump of Gold." },
        { reward: "- 10x Winter Box." },
        { reward: "- 1x Wings Box." },
        { reward: "- 1x Christmas Box." },
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
