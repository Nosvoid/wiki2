import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-eight-two',
  templateUrl: './p-eight-two.component.html',
  styleUrls: ['./p-eight-two.component.css']
})
export class PEightTwoComponent implements OnInit {

  potions = [
    { name: "Damage Potion", img: "dmg" },
    { name: "Rarity Potion", img: "rarity" },
    { name: "Perfection Potion", img: "perf" },
    { name: "Carve Runes Potion", img: "carve" },
    { name: "Specialist Potion", img: "sp" },
    { name: "Tattoo Potion", img: "tat" },
    { name: "Double Box Potion", img: "double_box" },
    { name: "Reputation Potion", img: "rep" },
    { name: "PVP Potion", img: "pvp" }
  ]

  quests = [
    {
      name: "Kertos Daily",
      todos: [
        {todo: "Complete the raid 5 times to receive :"}
      ],
      rewards: [
        {reward: "10x Random Amulet Box"}
      ]
    },
    {
      name: "Valakus Daily",
      todos: [
        {todo: "Complete the raid 7 times to receive :"}
      ],
      rewards: [
        {reward: "5x Random Amulet Box"},
        {reward: "1x Ancient Fire Magic"},
      ]
    },
    {
      name: "Grenigas Daily",
      todos: [
        {todo: "Complete the raid 7 times to receive :"}
      ],
      rewards: [
        {reward: "5x Random Amulet Box"},
        {reward: "1x Ancient Fire Magic"}
      ]
    },
    {
      name: "Fire Crusade Daily",
      todos: [
        {todo: "Complete Kertos 5 times, Valakus 5 times and Grenigas 5 times to receive :"}
      ],
      rewards: [
        {reward: "Blazing Piece of Red Metal x10"},
        {reward: "Earth Element x50"},
        {reward: "Dark Energy Stone x2"},
      ]
    },
    {
      name: "Tower Daily",
      todos: [
        {todo: "Complete the tower to receive :"}
      ],
      rewards: [
        {reward: "2x Crystal Pearl"},
        {reward: "5x Random Amulet Box"},
      ]
    },
    {
      name: "Vulcanic Eruption Quest",
      todos: [ 
        {todo: "Complete 10 Kertos, 20 Grenigas and 20 Valakus raids to progress further in the quest."},
        {todo: "Collect ''Parchment Paper'' by farming Magmaros and Blaze Hounds and trade it to Priestess Serizad for the title."},
      ],
      rewards: [
        {reward: "1x Vulcanic Eruption Title"},
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
