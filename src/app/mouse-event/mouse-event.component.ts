import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {

  rewards = [
    { reward : "5x Piece of Cheese"},
    { reward : "1x Mouse Gold"},
    { reward : "200x Angel Feather"},
    { reward : "1x Pink Lotus"},
    { reward : "1x Mouse Treasure"},
    { reward : "1x Mouse Tail"},
    { reward : "1x Mouse Ears"},
    { reward : "1x Royal Wheel"},
    { reward : "1x Broken Wing"}
  ]

  itemsToCraft = [
    {
      icon: "lucky_rat",
      name: "Lucky Rat",
      recipe: [
        { mat: "200x Piece of cheese" },
        { mat: "2x Mouse Tail" }
      ],
      img: "../../assets/img/pets/buffs/lucky_rat.png"
    },
    {
      icon: "masterchef_skin",
      name: "Masterchef Skin",
      recipe: [
        { mat: "400x Piece of cheese" },
        { mat: "5x Roast Lamb" },
        { mat: "10x Cold Desert Stew" },
        { mat: "5x Fried Fish Noodle" }
      ],
      img: ""
    },
    {
      icon: "mouse_hat",
      name: "Mouse Hat",
      recipe: [
        { mat: "300x Piece of Cheese" },
        { mat: "2x Mouse Ears" }
      ],
      img: ""
    },
    {
      icon: "orkani",
      name: "Orkani PSP",
      recipe: [
        { mat: "1x Mouse Treasure" },
        { mat: "1x Mouse Ear" }
      ],
      img: ""
    },
    {
      icon: "raid_necklace",
      name: "Raid Necklace",
      recipe: [
        { mat: "300x Piece of Cheese" },
        { mat: "3x Mouse Treasure" }
      ],
      img: "../../assets/img/accessories/raid_necklace.png"
    },
    {
      icon: "carriage",
      name: "Royal Rabbit Carriage",
      recipe: [
        { mat: "200x Piece of Cheese" },
        { mat: "4x Royal Wheel" }
      ],
      img: ""
    },
    {
      icon: "sakura",
      name: "Sakura",
      recipe: [
        { mat: "200x Piece of Cheese" },
        { mat: "5x Pink Lotus" }
      ],
      img: "../../assets/img/partners/sakura.png"
    },
  ]

  quests = [
    {
      name: "Slay the Evil Chef !",
      todo: "Do 15x Chef Terry Raid",
      rewards: [
        { reward: "5x Terry Chest" },
        { reward: "10x Big Strawberry" },
        { reward: "10x Big Cherry Apple" },
        { reward: "10x Prickly Pear" },
        { reward: "10x Big Cherries" }
      ]
    },
    {
      name: "We are looking for a new Chef",
      todo: "Cook 10 different meals",
      rewards: [
        { reward: "20x Big Lettuce" },
        { reward: "20x Big Tomatoes" },
        { reward: "20x Big Onions" },
        { reward: "20x Big Mangos" }
      ]
    }
  ]

  titles = [
    {
      icon: "apprentice_chef",
      name: "Apprentice Chef",
      location: "Can be bought at Chef Terry NPC 500M",
      img: "apprentice_chef"
    },
    {
      icon: "royal_chef",
      name: "Royal Chef",
      location: "Can be obtained at Lv 10 Cooking SP",
      img: "royal_chef"
    },
    {
      icon: "ratatouille",
      name: "Ratatouille",
      location: "Can be obtained x2 at Lv 20 Cooking SP",
      img: "ratatouille"
    },
    {
      icon: "void_chef",
      name: "Void Chef",
      location: "Can be crafted at Cooking Stuff NPC",
      img: "void_chef"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
