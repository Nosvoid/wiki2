import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "05/05/2023",
        items: [
            {
                name: "Aesthetic Amulet",
                img: "../assets/img/halloween-event/amulet_f1.png"
            },
            {
                name: "Alitus XV Specialist Partner Card",
                img: "../assets/img/psps/buffs/AlitusXV.png"
            },
            {
                name: "Dragon of Void",
                img: "../assets/img/prestiges/p9/Dragonofvoid.png"
            },
            {
              name: "Jinn Specialist Partner Card",
              img: "../assets/img/prestiges/p9/jinnbuffnew.png"
            },
            {
              name: "Frost Warrior Costume Set",
              img: "../assets/img/costumes/all-sets/buffs/frost_warrior_buffs.png"
            },
            {
              name: "Evolution Rarify Changer (2x)",
              img: "../assets/img/prestiges/p82/BadgeRarifyWheel.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "",
      boxName : 'Currently Mini Asgobas, Mini Alzanor & Mini Valehir Boxes available at https://nosvoid.com/shop/ ',
      mainItem: "None",
      mainItemImg: "../../assets/img/psps/buffs/Rotatison_psp.png",
      mainItems: [
        {
          name: "Venus, Hongbi, Lucy and Mad March Hare PSPs",
          img: "../../assets/img/psps/buffs/Rotation_psp.png"
        },

      ],
      items: [
          {name: "x999 Angel's Feather"},
          {name: "x999 Fullmoon Crystal"},
          {name: "x1 Rare Spiky Hairstyle"},
          {name: "x15 Rarify Item"},
          {name: "x2 Dye Bomb"},
          {name: "x15 Upgrade Item"},
          {name: "x1 Onyx Wings"},
          {name: "x1 Zephyr Wings"},
          {name: "x2 Reset Perfection"},
          {name: "x1 Magic Bone Drake Chest"},
          {name: "x1 Inventory Expansion Ticket (Permanent)"},
          {name: "x1 Super Fortune Bushtail"},
          {name: "x1 One-Winged Perti Specialist Partner Card"},
          {name: "x5 Gold Potion"},
          {name: "x500 Giant Lump of Gold"}
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
