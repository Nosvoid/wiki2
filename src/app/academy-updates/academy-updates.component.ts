import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academy-updates',
  templateUrl: './academy-updates.component.html',
  styleUrls: ['./academy-updates.component.css']
})
export class AcademyUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "28/07/2023",
        items: [
            {
                name: "Azuris",
                img: "../assets/img/fairies/azuris.png"
            },
            {
                name: "Solaris",
                img: "../assets/img/fairies/solaris.png"
            },
            {
                name: "Palina Specialist Partner Card" ,
                img: "../assets/img/psps/buffs/palina.png"
            },
           

        ]
    }
]

  randomBox = [
    {
      date: "28/07/2023",
      boxName : 'Random Boxes ',
      mainItem: "Mini Boxes",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Shadow Namaju Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Shadow Dragon Bee Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Shadow Master Bunny Random Box",
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
