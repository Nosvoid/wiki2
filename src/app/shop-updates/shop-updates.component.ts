import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "13/01/2023",
        items: [
            {
                name: "Archangel Lucifer Partner Card",
                img: "../assets/img/psps/buffs/archangel_lucifer.png"
            },
            {
                name: "Shadow Vampie",
                img: "../assets/img/pets/buffs/devil_vampie.png"
            },
            {
                name: "Knight Costume Set",
                img: "../assets/img/costumes/all-sets/buffs/knight_buffs.png"
            },
            {
              name: "Shadow Snowman",
              img: "../assets/img/pets/buffs/darkfrost_snowman.png"
            },
            {
              name: "Snowman Spider",
              img: "../assets/img/pets/buffs/long_legged_spider.png"
            },
            {
              name: "Lucy Lopear Partner Card",
              img: "../assets/img/psps/buffs/lucy.png"
            },
        ]
    }
]

  randomBox = [
    {
      date: "13/01/2023",
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
