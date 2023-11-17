import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "17/11/2023",
        items: [
            {
                name: "Betting Costume",
                img: "../assets/img/costumes/costumes/betting_costume.png"
            },
            {
                name: "Tree Wings",
                img: "../assets/img/specialists/wings/buffs/Tree_wings.png"
            },
            {
                name: "Jinn Specialist Partner Card" ,
                img: "../assets/img/psps/buffs/jinn.png"
            },
            {
              name: "Dark Wings Swapper (Visual)" ,
              img: "../assets/img/specialists/wings/skins/dark_wings.png"
          },

        ]
    }
]

  randomBox = [
    {
      date: "17/11/2023",
      boxName : 'Random Boxes ',
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Knight Costume Set Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Dragon of Vod Random Box",
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
