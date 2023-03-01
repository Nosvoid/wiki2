import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "01/03/2023",
        items: [
            {
                name: "Caligor Horn",
                img: "../assets/img/helmets-masks/caligor_horn.png"
            },
            {
                name: "Batman Mask",
                img: "../assets/img/helmets-masks/batman_mask.png"
            },
            {
                name: "Knight Costume Set",
                img: "../assets/img/costumes/all-sets/buffs/knight_buffs.png"
            },
            {
              name: "Dragon of Void",
              img: "../assets/img/titles/dragon_of_void.png"
            },
            {
              name: "Rat Hat",
              img: "../assets/img/costumes/costumes/RatHatWheel.png"
            },
            {
              name: "Retro Wings",
              img: "../assets/img/prestiges/crafting/Other/RetroShopUpdate.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "01/03/2023",
      boxName : 'Partner Card Random Box',
      mainItem: "Partner Card",
      mainItemImg: "../../assets/img/pets/buffs/otter.png",
      mainItems: [
        {
          name: "Venus, Hongbi, Lucy and Mad March Hare PSPs",
          img: "../../assets/img/psps/buffs/Rotation_psp.png"
        },

      ],
      items: [
          {name: "x2500 Angel's Feather"},
          {name: "x2500 Fullmoon Crystal"},
          {name: "x10 Perfection"},
          {name: "x10 Random Amulet Box"},
          {name: "x20 Rarify item"},
          {name: "x20 Upgrade Item"},
          {name: "x10 Jewels Bag"},
          {name: "x2 Partner Skill ticket (all)"},
          {name: "x1 Renaming Card"}
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
