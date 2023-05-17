import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "12/05/2023",
        items: [
            {
                name: "Robber Mask",
                img: "../assets/img/helmets-masks/robber_mask.png"
            },
            {
                name: "Lava Ghost Helmet",
                img: "../assets/img/helmets-masks/lava_helmet.png"
            },
            {
                name: "Rocketeer Outfit Set",
                img: "../assets/img/prestiges/p9/Crafting/Other/RocketeerNewWheel.png"
            },
            {
              name: "Weapon Skin Box the 'Chocolate Dream'",
              img: "../assets/img/costumes/weapon-skins/sweet_chocolate.png"
            },
            {
              name: "Batman Mask",
              img: "../assets/img/helmets-masks/batman_mask.png"
            },
            {
              name: "Palina Puppet Master's Specialist Partner Card",
              img: "../assets/img/psps/buffs/palina_buff.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "12/05/2023",
      boxName : 'Random Boxes ',
      mainItem: "Mini Asgobas",
      mainItemImg: "../../assets/img/shop_updates/box_asgo.png",
      mainItems: [
        {
          name: "Plague Doctor/Nurse Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Black Ink Rabbit Random Box",
          img: "../../assets/img/shop_updates/box_asgo.png"
        },
        {
          name: "Hawaii Costume Set Random Box",
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
