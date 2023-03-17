import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "17/03/2023",
        items: [
            {
                name: "Mini Valehir",
                img: "../assets/img/prestiges/p9/valebuff.png"
            },
            {
                name: "Mini Asgobas",
                img: "../assets/img/prestiges/p9/asgobuff.png"
            },
            {
                name: "Mini Alzanor",
                img: "../assets/img/prestiges/p9/NewAlzanor.png"
            },
            {
              name: "Plague Doctor/Nurse Costume Set",
              img: "../assets/img/costumes/all-sets/buffs/plague_doctor_buffs.png"
            },
            {
              name: "Alitus XV Partner Card",
              img: "../assets/img/psps/buffs/alitus.png"
            },
            {
              name: "Black Ink Rabbit (Shadow Energy is buff from pet' skill.)",
              img: "../assets/img/pets/buffs/BlackInk.png"
            },

        ]
    }
]

  randomBox = [
    {
      date: "",
      boxName : 'Nothing is available for now, come back later!',
      mainItem: "None",
      mainItemImg: "../../assets/img/psps/buffs/Rotatison_psp.png",
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
