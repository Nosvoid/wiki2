import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "30/12/2022",
        items: [
            {
                name: "Shadow Dragon Bee",
                img: "../assets/img/pets/buffs/dragon_bee.png"
            },
            {
                name: "Shadow Master Bunny",
                img: "../assets/img/pets/buffs/master_bunny.png"
            },
            {
                name: "Shadow Namaju",
                img: "../assets/img/pets/buffs/namaju.png"
            },
            {
              name: "Knight Costume Set",
              img: "../assets/img/costumes/all-sets/buffs/knight_buffs.png"
            },
            {
              name: "Batman Mask",
              img: "../assets/img/helmets-masks/batman_mask.png"
            },
            {
              name: "Into the Void Title",
              img: "../assets/img/titles/into_the_void.png"
            },
        ]
    }
]

  randomBox = [
    {
      date: "30/12/2022",
      boxName : 'Koala Random Box',
      mainItem: "Koala",
      mainItemImg: "../../assets/img/pets/buffs/koala.png",
      mainItems: [
        {
          name: "Venus, Hongbi, Lucy and Mad March Hare PSPs",
          img: "../../assets/img/pets/buffs/koala.png"
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
