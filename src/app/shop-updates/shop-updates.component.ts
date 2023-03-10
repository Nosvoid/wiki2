import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "10/03/2023",
        items: [
            {
                name: "Lava Ghost Helmet",
                img: "../assets/img/helmets-masks/lava_helmet.png"
            },
            {
                name: "Robber Mask",
                img: "../assets/img/helmets-masks/robber_mask.png"
            },
            {
                name: "Rocketeer Costume Set",
                img: "../assets/img/prestiges/p9/Crafting/Other/RocketeerNewWheel.png"
            },
            {
              name: "Dragon of Void",
              img: "../assets/img/titles/dragon_of_void.png"
            },
            {
              name: "Evolve Your Badge (1x)",
              img: "../assets/img/prestiges/p82/BadgeEvolveWheel.png"
            },
            {
              name: "Evolution Badge Rarify Changer (3x)",
              img: "../assets/img/prestiges/p82/BadgeRarifyWheel.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "",
      boxName : 'Nothing is available for now, come back later!',
      mainItem: "None",
      mainItemImg: "../../assets/img/psps/buffs/Rotatison_psp.png",
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
