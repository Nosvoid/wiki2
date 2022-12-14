import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "14/12/2022",
        items: [
            {
                name: "Skelekat Pet",
                img: "../assets/img/costumes/pets/buffs/skelekat.png"
            },
            {
                name: "Bride Pet",
                img: "../assets/img/pets/buffs/zombikit.png"
            },
            {
                name: "Macavity Pet",
                img: "../assets/img/pets/buffs/mad_professor_macavity.png"
            },
            {
              name: "Shadow Master Bunny Pet",
              img: "../assets/img/helmets-masks/master_bunny.png"
            },
            {
              name: "Caligor's Golden Horn",
              img: "../assets/img/helmets-masks/caligor_horn.png"
            },
            {
              name: "Nurse Costume Set",
              img: "../assets/img/costumes/all-sets/buffs/plague_doctor_buffs.png"
            },
        ]
    }
]

  randomBox = [
    {
      date: "14/12/2022",
      boxName : 'Otter Random Box',
      mainItem: "Otter Pet",
      mainItemImg: "../../assets/img/pets/buffs/otter.png",
      mainItems: [
        {
          name: "Otter",
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
