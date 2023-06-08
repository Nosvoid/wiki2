import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "09/06/2023",
        items: [
            {
                name: "Jinn Specialist Partner Card",
                img: "../assets/img/psps/buffs/jinn.png"
            },
            {
                name: "Gingerbread Partner Box (You can check buffs from https://wiki.nosvoid.com/partners)",
                img: "You can check buffs from https://wiki.nosvoid.com/partners"
            },
            {
                name: "Weapon Skin Box 'Chocolate Dream'" ,
                img: "../assets/img/costumes/weapon-skins/sweet_chocolate.png"
            },
            {
              name: "Dragon of Void'",
              img: "../assets/img/titles/dragon_of_void.png"
            },
            {
              name: "(New) Tree Wings",
              img: "../assets/img/specialists/wings/buffs/Tree_wings.png"
            },
            {
              name: "Aesthetic Amulet (Female)",
              img: "../assets/img/halloween-event/amulet_f2.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "09/06/2023",
      boxName : 'Random Boxes ',
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Mini Asgobas Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Mini Valehir Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Mini Alzanor Random Box",
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
