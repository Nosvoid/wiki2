import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "17/11/2022",
        items: [
            {
                name: "Azuris",
                img: "../assets/img/fairies/azuris.png"
            },
            {
              name: "Baby Panda",
              img: "../assets/img/pets/buffs/baby_panda.png"
            },
            {
              name: "Into the Void",
              img: "../assets/img/titles/into_the_void.png"
            },
            {
              name: "Koala",
              img: "../assets/img/pets/buffs/koala.png"
            },
            {
              name: "Shadow Snow Fox",
              img: "../assets/img/pets/buffs/snow_fox.png"
            },
            {
              name: "Shooting Star",
              img: "../assets/img/titles/shooting_star.png"
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
      date: "17/11/2022",
      boxName : 'Partner Random Box',
      mainItem: [
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
