import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "30/10/2022",
        items: [
            {
                name: "Archangel Lucifer",
                img: "../assets/img/psps/buffs/archangel_lucifer.png"
            },
            {
                name: "Baby Panda",
                img: "../assets/img/pets/buffs/baby_panda.png"
            },
            {
              name: "Into the Void Title",
              img: "../assets/img/titles/into_the_void.png"
            },
            {
              name: "Knight Costume Set",
              img: "../assets/img/costumes/all-sets/buffs/knight_buffs.png"
            },
            {
                name: "Lucy",
                img: "../assets/img/psps/buffs/lucy.png"
            },
            {
              name: "Pirate Lord Title",
              img: "../assets/img/titles/pirate_lord.png"
            },
            {
              name: "Shooting Star Title",
              img: "../assets/img/titles/shooting_star.png"
            },
        ]
    }
]

  randomBox = [
    {
      date: "30/10/2022",
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
          {name: "x2 Partner Skillticket(all)"},
          {name: "x1 Renaming Card"}
      ]
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
