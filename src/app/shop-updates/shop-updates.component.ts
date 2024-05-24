import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "24/05/2024",
        items: [
            {
                name: "Palina Specialist Partner Card",
                img: "../assets/img/psps/buffs/palina_buff.png"
            },
            {
                name: "Eternal Title",
                img: "../assets/img/titles/Eternal.png"
            },
            {
                name: "Gingerbread Partner Box. You can check buffs at https://wiki.voidgamingnetwork.com/partners",
                img: ""
            },
            {
              name: "Mini Pet 'Lucky Brown Dragon' (Infinity Premium)",
              img: "../assets/img/shop-updates/InfinityPremium.png"
          },
            {
              name: "Mini Pet 'Lucky Brown Dragon'" ,
              img: "../assets/img/shop-updates/NewMiniPet.png"
          },

        ]
    }
]

  randomBox = [
    {
      date: "17/05/2024", 
      boxName : " 'Random Boxes' ",
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Mini Alzanor Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Mini Valehir Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Mini Asgobas Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Tree Wings Random Box",
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
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
