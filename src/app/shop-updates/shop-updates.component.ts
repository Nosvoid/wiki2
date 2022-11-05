import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "04/11/2022",
        items: [
            {
                name: "Azuris",
                img: "../assets/img/fairies/azuris.png"
            },
            {
                name: "Caligor Golden Horn",
                img: "../assets/img/helmets-masks/caligor_horn.png"
            },
            {
              name: "Change Tattoo Item x10",
              img: ""
            },
            {
              name: "Change Wings Item",
              img: ""
            },
            {
              name: "Shadow Master Bunny",
              img: "../assets/img/pets/buffs/master_bunny.png"
            },
            {
              name: "Shadow Snow Fox",
              img: "../assets/img/pets/buffs/snow_fox.png"
            },
            {
              name: "Solaris",
              img: "../assets/img/fairies/solaris.png"
          },
        ]
    }
]

  randomBox = [
    {
      date: "05/11/2022",
      boxName : 'Otter Random Box',
      mainItem: [
        {
          name: "Otter",
          img: "../../assets/img/pets/buffs/otter.png"
        }
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
