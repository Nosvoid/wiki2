import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
<<<<<<< HEAD
        date: "02/09/2023",
=======
        date: "25/08/2023",
>>>>>>> 8f4b6cdd3cc1e081a37242236a7e6d4a64014b36
        items: [
            {
                name: "Tree Wings",
                img: "../assets/img/specialists/wings/buffs/Tree_wings.png"
            },
            {
                name: "Robber Mask",
                img: "../assets/img/helmets-masks/robber_mask.png"
            },
            {
<<<<<<< HEAD
                name: "Docile Mini Snowball" ,
                img: "../assets/img/pets/buffs/mini_snowball.png"
=======

            {
              name: "Lava Ghost Helmet" ,
              img: "../assets/img/helmets-masks/lava_helmet.png"
          },

        ]
    }
]

  randomBox = [
    {
<<<<<<< HEAD
      date: "02/09/2023",
=======
      date: "25/08/2023",
>>>>>>> 8f4b6cdd3cc1e081a37242236a7e6d4a64014b36
      boxName : 'Random Boxes ',
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Knight Costume Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Dragon of Void Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Retro Wings Random Box",
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
