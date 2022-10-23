import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halloween-event',
  templateUrl: './halloween-event.component.html',
  styleUrls: ['./halloween-event.component.css']
})
export class HalloweenEventComponent implements OnInit {

  spiderBox = [
    {reward: "Spider's Web x2"},
    {reward: "Angel Feather x100"},
    {reward: "Full Moon x50"},
    {reward: "Yellow Pumpkin Sweet x2"},
    {reward: "Black Pumpkin Sweet x2"},
    {reward: "Halloween Special Box x1"},
    {reward: "Spider King Eye x1"},
  ]

  halloSpeBox = [
    {reward: "Spider's Web x10"},
    {reward: "Pumpkin x10"},
    {reward: "Purple Pumpkin Sweet x2"},
    {reward: "Spider King Eye x1"},
    {reward: "Pumpkin Syrup x1"},
    {reward: "Pumpkin Title"},
  ]

  jackBox = [
    {reward: "Pumpkin x5"},
    {reward: "Pumpkin x10"},
    {reward: "Pumpkin x20"},
    {reward: "Purple Pumpkin Sweet x4"},
    {reward: "Pumpkin Syrup x1"},
    {reward: "Halloween Special Box x1"},
    {reward: "Pumpkin Title"},
  ]

  madBox = [
    {reward: "Pumpkin x5"},
    {reward: "Spider's Web x5"},
    {reward: "Yellow Pumpkin Sweet x4"},
    {reward: "Black Pumpkin Sweet x2"},
    {reward: "Pumpkin Syrup x1"},
    {reward: "Spider King Eye x1"},
    {reward: "Halloween Special Box x1"},
  ]

  itemsToCraft = [
    {
      icon: "adventurer_icon",
      name: "Adventurer's Knapsack (Permanent)", 
      buff: "../../assets/img/halloween-event/adventurer.png"
    },
    {
      icon: "amulet_f1_icon",
      name: "Aesthetic Amulet (Female)", 
      buff: "../../assets/img/halloween-event/amulet_f1.png"
    },
    {
      icon: "amulet_f2_icon",
      name: "Aesthetic Amulet (Female)", 
      buff: "../../assets/img/halloween-event/amulet_f2.png"
    },
    {
      icon: "amulet_m_icon",
      name: "Aesthetic Amulet (Male)", 
      buff: "../../assets/img/halloween-event/amulet_m.png"
    },
    {
      icon: "baby_panda_icon",
      name: "Baby Panda", 
      buff: "../../assets/img/pets/buffs/baby_panda.png"
    },
    {
      icon: "pumpkin_hat_icon",
      name: "Glowing Pumkin Hat", 
      buff: "../../assets/img/costumes/hats/glowing_pumpkin_hat.png"
    },
    {
      icon: "hongbi_icon",
      name: "Hongbi", 
      buff: "../../assets/img/psps/buffs/hongbi.png"
    },
    {
      icon: "jaja_icon",
      name: "Jajamaru SP", 
      buff: "../../assets/img/halloween-event/jaja_sp.png"
    },
    {
      icon: "mad_pet_icon",
      name: "Mad Professor Macavity", 
      buff: "../../assets/img/pets/buffs/mad_professor_macavity.png"
    },
    {
      icon: "mad_psp_icon",
      name: "Mad Professor Macavity PSP", 
      buff: "../../assets/img/psps/buffs/frankestein.png"
    },
    {
      icon: "nightmare_icon",
      name: "Nightmare Title", 
      buff: "../../assets/img/titles/nightmare.png"
    },
    {
      icon: "noble_icon",
      name: "Noble Crystal Bracelet", 
      buff: "../../assets/img/accessories/noble_bracelet.png"
    },
    {
      icon: "partner_ticket_icon",
      name: "Partner Skill Ticket (Single)", 
      buff: "../../assets/img/halloween-event/partner_ticket.png"
    },
    {
      icon: "plague_icon",
      name: "Plague Doctor / Nurse costume", 
      buff: "../../assets/img/costumes/all-sets/buffs/plague_doctor_buffs.png"
    },
    {
      icon: "pumpkin_bushtail_icon",
      name: "Pumpkin Bushtail", 
      buff: "../../assets/img/pets/buffs/pumpkin_bushtail.png"
    },
    {
      icon: "pumpkin_witch_icon",
      name: "Pumpkin Witch/Knight Costume", 
      buff: "../../assets/img/costumes/all-sets/buffs/pumpkin_witch_buffs.png"
    },
    {
      icon: "reaper_icon",
      name: "Reaper Title", 
      buff: "../../assets/img/titles/reaper.png"
    },
    {
      icon: "skelekat_icon",
      name: "Skelekat Groom", 
      buff: "../../assets/img/pets/buffs/skelekat.png"
    },
    {
      icon: "zombikit_icon",
      name: "Zombikit Bride", 
      buff: "../../assets/img/pets/buffs/zombikit.png"
    }
  ]

  dailyQuests = [
    {
      name: "Who's mad ?",
      todo: [
        {quest: "• Participate to 10x Mad Professor Macavity Raid"},
      ],
      rewards: [
        {reward: "- 2x Halloween Special Box"},
      ]
    },
    {
      name: "Be carefull : Spiders !",
      todo: [
        {quest: "• Successfully complete 15x Giant Black Spider Raid"},
      ],
      rewards: [
        {reward: "- 10x Spider Web"},
        {reward: "- 1x Halloween Special Box"},
      ]
    },
    {
      name: "Giant Pumpkin in sight !",
      todo: [
        {quest: "• Successfully complete 5x Jack'O'Lantern Raid"},
      ],
      rewards: [
        {reward: "- 10x Pumpkin"},
        {reward: "- 1x Halloween Special Box"},
      ]
    },
    {
      name: "Spooky Spooky !",
      todo: [
        {quest: "• Participate to 10x Mad Professor Macavity Raid"},
        {quest: "• Successfully complete 15x Giant Black Spider Raid"},
        {quest: "• Successfully complete 5x Jack'O'Lantern Raid"},
      ],
      rewards: [
        {reward: "- 1x Little Devil"},
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
