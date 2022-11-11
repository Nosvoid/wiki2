import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "11/11/2022",
        items: [
            {
                name: "Aegir",
                img: "../assets/img/psps/buffs/aegir.png"
            },
            {
                name: "Barni",
                img: "../assets/img/psps/buffs/barni.png"
            },
            {
              name: "Eater Bunny Chest",
              img: "../assets/img/costumes/all-sets/buffs/easter_bunny_buffs.png"
            },
            {
              name: "Freya",
              img: "../assets/img/psps/buffs/freya.png"
            },
            {
              name: "Knight Costume Set",
              img: "../assets/img/costumes/all-sets/buffs/knight_buffs.png"
            },
            {
              name: "Master Bunny",
              img: "../assets/img/pets/buffs/master_bunny.png"
            },
            {
              name: "Master of The Sea",
              img: "../assets/img/titles/master_of_the_sea.png"
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
