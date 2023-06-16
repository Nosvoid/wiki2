import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "16/06/2023",
        items: [
            {
                name: "Lucy Lopear Specialist Partner Card",
                img: "../assets/img/psps/buffs/lucy.png"
            },
            {
                name: "Retro Wings Box",
                img: "../assets/img/prestiges/p9/Crafting/Other/RetroShopUpdate.png"
            },
            {
                name: "Robber Mask'" ,
                img: "../assets/img/helmets-masks/robber_mask.png"
            },
            {
              name: "Lava Ghost Helmet'",
              img: "../assets/img/helmets-masks/lava_helmet.png"
            },
            {
              name: "Evolution Badge Rarify Changer (2x)",
              img: "../assets/img/prestiges/p82/BadgeRarifyWheel.png"
            },
            {
              name: "Aesthetic Amulet (Male)",
              img: "../assets/img/halloween-event/amulet_m.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "16/06/2023",
      boxName : 'Random Boxes ',
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Black Ink Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Alitus XV Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Knight Costume Random Box",
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
