import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "27/11/2022",
        items: [
            {
                name: "Archangel Lucifer PSP",
                img: "../assets/img/psps/buffs/archangel_lucifer.png"
            },
            {
              name: "[NEW] Lava Ghost Helmet",
              img: "../assets/img/helmets-masks/lava_helmet.png"
            },
            {
              name: "[NEW] Robber Mask",
              img: "../assets/img/helmets-masks/mask_elite.png"
            },
            {
              name: "Shadow Snowman",
              img: "../assets/img/pets/buffs/darkfrost_snowman.png"
            },
            {
              name: "Shadow Spider",
              img: "../assets/img/pets/buffs/long_legged_spider.png"
            },
            {
              name: "Shadow Vampie",
              img: "../assets/img/pets/buffs/devil_vampie.png"
            },
        ]
    }
]

  randomBox = [
    {
      date: "27/11/2022",
      boxName : 'Koala Random Box',
      mainItem: "Koala Pet",
      mainItemImg: "../../assets/img/pets/buffs/koala.png",
      mainItems: [
        {
          name: "Hongbi",
          img: "../../assets/img/psps/buffs/hongbi.png"
        },
        {
          name: "Lucy",
          img: "../../assets/img/psps/buffs/lucy.png"
        },
        {
          name: "Mad March Hare",
          img: "../../assets/img/psps/buffs/mad_march.png"
        },
        {
          name: "Venus",
          img: "../../assets/img/psps/buffs/venus.png"
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
