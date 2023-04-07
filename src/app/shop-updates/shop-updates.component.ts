import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "07/04/2023",
        items: [
            {
                name: "Caligor's Golden Horn",
                img: "../assets/img/helmets-masks/caligor_horn.png"
            },
            {
                name: "Batman Mask",
                img: "../assets/img/helmets-masks/batman_mask.png"
            },
            {
                name: "Alitus XV Partner Card",
                img: "../assets/img/psps/buffs/AlitusXV.png"
            },
            {
              name: "Shadow Bee Pet",
              img: "../assets/img/pets/buffs/dragon_bee.png"
            },
            {
              name: "Shadow Namaju Pet",
              img: "../assets/img/pets/buffs/namaju.png"
            },
            {
              name: "Retro Wings Box",
              img: "../assets/img/prestiges/p9/Crafting/Other/RetroShopUpdate.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "",
      boxName : 'Currently Hawaii Costume Set, Shooting Star, Plague Doctor/Nurse Set and Black Ink Rabbit Boxes available at https://nosvoid.com/shop/ ',
      mainItem: "None",
      mainItemImg: "../../assets/img/psps/buffs/Rotatison_psp.png",
      mainItems: [
        {
          name: "Venus, Hongbi, Lucy and Mad March Hare PSPs",
          img: "../../assets/img/psps/buffs/Rotation_psp.png"
        },

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
