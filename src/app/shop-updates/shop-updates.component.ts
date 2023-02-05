import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "06/02/2023",
        items: [
            {
                name: "Retro Wings Box",
                img: "../assets/img/prestiges/p9/Other/RetroShopUpdate.png"
            },
            {
                name: "Mini Valehir Pet",
                img: "../assets/img/prestiges/p9/valebuff.png"
            },
            {
                name: "Mini Asgobas Pet",
                img: "../assets/img/prestiges/p9/asgobuff.png"
            },
            {
              name: "Dragon of Void",
              img: "../assets/img/prestiges/p9/Dragonofvoid.png"
            },
            {
              name: "Mini Alzanor",
              img: "../assets/img/prestiges/p9/MiniAlzanorShop.png"
            },
            {
              name: "Rocketeer Outfit Set",
              img: "../assets/img/prestiges/p9/Other/RocketeerNew.png"
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
