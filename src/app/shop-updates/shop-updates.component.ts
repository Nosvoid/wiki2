import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "21/04/2023",
        items: [
            {
                name: "Robber Mask",
                img: "../assets/img/helmets-masks/robber_mask.png"
            },
            {
                name: "Lava Ghost Helmet",
                img: "../assets/img/helmets-masks/lava_helmet.png"
            },
            {
                name: "Dragon of Void",
                img: "../assets/img/prestiges/p9/Dragonofvoid.png"
            },
            {
              name: "Jinn Specialist Partner Card",
              img: "../assets/img/prestiges/p9/jinnbuff.png"
            },
            {
              name: "Black Ink Rabbit",
              img: "../assets/img/pets/buffs/BlackInk.png"
            },
            {
              name: "Retro Wings Box",
              img: "../assets/img/prestiges/p9/Crafting/Other/RetroShopUpdate.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "",
      boxName : 'Currently Mini Alzanor, Mini Valehir, Mini Asgobas and Retro Wings Boxes available at https://nosvoid.com/shop/ ',
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
