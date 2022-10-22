import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "22/10/2022",
        items: [
            {
                name: "Aegir",
                img: "../assets/img/psps/buffs/aegir.png"
            },
            {
              name: "Azuris",
              img: "../assets/img/fairies/azuris.png"
            },
            {
              name: "Baby Panda",
              img: "../assets/img/pets/buffs/baby_panda.png"
            },
            {
                name: "Barni",
                img: "../assets/img/psps/buffs/barni.png"
            },
            {
                name: "Batman Mask",
                img: "../assets/img/helmets-masks/batman_mask.png"
            },
            {
                name: "Freya",
                img: "../assets/img/psps/buffs/freya.png"
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
      date: "22/10/2022",
      mainItem: [
        {
          name: "Koala",
          img: "../../assets/img/pets/buffs/koala.png"
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
