import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "12/04/2024",
        items: [
            {
                name: "Dragon Wings Swapper Box",
                img: ""
            },
            {
                name: "Laser Weapon Skins",
                img: "../assets/img/costumes/weapon-skins/laser.png"
            },
            {
                name: "Steampunk Wings",
                img: "../assets/img/specialists/wings/buffs/SteampunkWingsBuff.png"
            },
            {
              name: "Skeleton Costume Set",
              img: "../assets/img/costumes/all-sets/buffs/skeleton.png"
          },
            {
              name: "Creepy Monk Costume Set" ,
              img: "../assets/img/costumes/all-sets/buffs/CreepyMonk.png"
          },

        ]
    }
]

  randomBox = [
    {
      date: "12/04/2024", 
      boxName : " 'Random Boxes' ",
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Mini Pet 'Blue Phoenix' Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Mini Pet 'Phoenix' Random Box",
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
          name: "Dragon of Void Title Random Box",
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
