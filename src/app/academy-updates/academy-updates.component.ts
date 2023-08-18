import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academy-updates',
  templateUrl: './academy-updates.component.html',
  styleUrls: ['./academy-updates.component.css']
})
export class AcademyUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "18/08/2023",
        items: [
            {
                name: "Gingerbread Partner Box. You can see their buffs at : https://wiki.nosvoid.com/partners",
                img: ""
            },
            {
                name: "Caligor's Golden Horn",
                img: "../assets/img/helmets-masks/caligor_horn.png"
            },
            {
              name: "Batman Mask",
              img: "../assets/img/helmets-masks/batman_mask.png"
            },
            {
                name: "Weapon Skin Box 'Chocolate Dream'",
                img: "../assets/img/costumes/weapon-skins/sweet_chocolate.png"
            },
            {
              name: "Robber Mask'",
              img: "../assets/img/helmets-masks/robber_mask.png"
          },
          {
            name: "Lava Ghost Helmet'",
            img: "../assets/img/helmets-masks/lava_helmet.png"
        },
           

        ]
    }
]

  randomBox = [
    {
      date: "18/08/2023",
      boxName : 'Random Boxes ',
      mainItem: "Mini Boxes",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Asgobas Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Alzanor Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Valehir Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Aegir Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Barni Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Freya Random Box",
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
