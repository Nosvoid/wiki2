import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "20/01/2023",
        items: [
            {
                name: "Robber Mask",
                img: "../assets/img/helmets-masks/robber_mask.png"
            },
            {
                name: "Shadow Bee",
                img: "../assets/img/pets/buffs/dragon_bee.png"
            },
            {
                name: "Lava Ghost Helmet",
                img: "../assets/img/helmets-masks/lava_helmet.png"
            },
            {
              name: "Aesthetic Amulet",
              img: "../assets/img/halloween-event/amulet_m.png"
            },
            {
              name: "Aesthetic Amulet",
              img: "../assets/img/halloween-event/amulet_f1.png"
            },
            {
              name: "Aesthetic Amulet",
              img: "../assets/img/halloween-event/amulet_f2.png"
            },
        ]
    }
]

  randomBox = [
    {
      date: "20/01/2023",
      boxName : 'Partner Card Random Box',
      mainItem: "Partner Cards",
      mainItemImg: "../../assets/img/psps/buffs/Rotation_psp.png",
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
