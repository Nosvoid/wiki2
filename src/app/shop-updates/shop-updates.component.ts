import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "12/01/2024",
        items: [
            {
                name: "Mini Pet 'Gryphon'",
                img: "../assets/img/shop-updates/LightPet.png"
            },
            {
                name: "Mini Pet 'Black Dragon'",
                img: "../assets/img/shop-updates/ShadowPet.png"
            },
            {
                name: "Steampunk Wings Swapper",
                img: "../assets/img/specialists/wings/buffs/Steampunk.png"
            },
            {
              name: "Creepy Monk Costume Set" ,
              img: "../assets/img/costumes/all-sets/buffs/creepy_monk.png"
          },

        ]
    }
]

  randomBox = [
    {
      date: "12/01/2024",
      boxName : 'Random Boxes ',
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Plague Doctor/Nurse Costume Set Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Rocketeer Costume Set Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Retro Wings Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Shooting Star Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Knight Costume Set Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        }


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
