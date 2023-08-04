import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academy-updates',
  templateUrl: './academy-updates.component.html',
  styleUrls: ['./academy-updates.component.css']
})
export class AcademyUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "04/08/2023",
        items: [
            {
                name: "Rat Hat",
                img: "../assets/img/costumes/hats/rat_hat.png"
            },
            {
                name: "Skeleton Costume Set",
                img: "../assets/img/costumes/all-sets/buffs/skeleton.png"
            },
            {
              name: "Frost Warrior Costume Set",
              img: "../assets/img/costumes/all-sets/buffs/frost_warrior_buffs.png"
            },
            {
                name: "Knight Costume Set" ,
                img: "../assets/img/costumes/all-sets/buffs/knight_buffs.png"
            },
           

        ]
    }
]

  randomBox = [
    {
      date: "04/08/2023",
      boxName : 'Random Boxes ',
      mainItem: "Mini Boxes",
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
