import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "06/01/2023",
        items: [
            {
                name: "Caligor's Golden Horn",
                img: "../assets/img/helmets-masks/caligor_horn.png"
            },
            {
                name: "Shadow Master Fox",
                img: "../assets/img/pets/buffs/snow_fox.png"
            },
            {
                name: "Betting Costume",
                img: "../assets/img/costumes/buffs/betting_costume.png"
            },
            {
              name: "Plague Doctor/Nurse Costume Set",
              img: "../assets/img/costumes/all-sets/buffs/plague_doctor_buffs.png"
            },
            {
              name: "Robber Mask",
              img: "../assets/img/helmets-masks/robber_mask.png"
            },
            {
              name: "Lava Helmet",
              img: "../assets/img/helmets-masks/lava_helmet.png"
            },
        ]
    }
]

  randomBox = [
    {
      date: "06/01/2023",
      boxName : 'Otter Random Box',
      mainItem: "Otter",
      mainItemImg: "../../assets/img/pets/buffs/otter.png",
      mainItems: [
        {
          name: "Venus, Hongbi, Lucy and Mad March Hare PSPs",
          img: "../../assets/img/pets/buffs/otter.png"
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
