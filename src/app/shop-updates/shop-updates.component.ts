import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "20/12/2022",
        items: [
            {
                name: "Solaris",
                img: "../assets/img/fairies/solaris.png"
            },
            {
                name: "Azuris",
                img: "../assets/img/fairies/azuris.png"
            },
            {
                name: "Baby Panda",
                img: "../assets/img/pets/buffs/baby_panda.png"
            },
            {
              name: "Shooting Star",
              img: "../assets/img/titles/shooting_star.png"
            },
            {
              name: "Lava Ghost Helmet",
              img: "../assets/img/helmets-masks/lava_helmet.png"
            },
            {
              name: "Robber Mask",
              img: "../assets/img/helmets-masks/robber_mask.png"
            },
        ]
    }
]

  randomBox = [
    {
      date: "24/12/2022",
      boxName : 'Partner Card Random Box',
      mainItem: "Venus, Hongbi, Lucy and Mad March Hare PSPs",
      mainItemImg: "../../assets/img/pets/buffs/otter.png",
      mainItems: [
        {
          name: "Partner Card Random Box",
          img: "../../assets/img/psps/buffs/venus.png"
        },

        {
          name: "Partner Card Random Box",
          img: "../../assets/img/psps/buffs/hongbi.png"
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
