import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "26/04/2024",
        items: [
            {
                name: "Eternal Title",
                img: "../assets/img/shop-updates/Eternal.png"
            },
            {
                name: "Dragon Wings Swapper Box",
                img: "s"
            },
            {
                name: "Puppet Master Costume Set",
                img: "../assets/img/costumes/all-sets/buffs/puppet_master.png"
            },
            {
              name: "Candy Cake Mount (Speed 36)",
              img: "../assets/img/shop-updates/CandyMount.png"
          },
            {
              name: "Mini Pet 'Lucky Brown Dragon' (Infinity Premium)" ,
              img: "../assets/img/shop-updates/InfinityPremium.png"
          },

        ]
    }
]

  randomBox = [
    {
      date: "26/04/2024", 
      boxName : " 'Random Boxes' ",
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Shooting Star Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Mini Pet 'Black Dragon' Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Mini Pet 'Gryphon' Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Mini Pet 'Phoenix' Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Mini Pet 'Blue Phoenix' Random Box",
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
