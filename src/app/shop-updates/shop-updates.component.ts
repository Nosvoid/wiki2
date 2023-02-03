import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "03/02/2023",
        items: [
            {
                name: "Shooting Star Title",
                img: "../assets/img/titles/shooting_star.png"
            },
            {
                name: "Shadow Namaju Pet",
                img: "../assets/img/pets/buffs/namaju.png"
            },
            {
                name: "Betting Costume",
                img: "../assets/img/costumes/costumes/betting_costume.png"
            },
            {
              name: "Shadow Master Bunny",
              img: "../assets/img/pets/buffs/master_bunny.png"
            },
            {
              name: "Betting Necklace",
              img: "../assets/img/accessories/BettingWheelSpecial.png"
            },
            {
              name: "Pleague Doctor/Nurse Set",
              img: "../assets/img/costumes/all-sets/buffs/plague_doctor_buffs.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "03/02/2023",
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
