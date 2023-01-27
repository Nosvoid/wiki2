import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  wheel = [
    {
        date: "27/01/2023",
        items: [
            {
                name: "Hawaii Costume Set (Male)",
                img: "../assets/img/costumes/all-sets/buffs/hawaii_buffs.png"
            },
            {
                name: "Hawaii Costume Set (Female)",
                img: "../assets/img/costumes/all-sets/buffs/hawaii_buffs.png"
            },
            {
                name: "Alitus XV",
                img: "../assets/img/psps/buffs/AlitusXV.png"
            },
            {
              name: "Raid Ring",
              img: "../assets/img/accessories/RaidRing.png"
            },
            {
              name: "Raid Necklace",
              img: "../assets/img/accessories/RaidNecklace.png"
            },
            {
              name: "Raid Bracelet",
              img: "../assets/img/accessories/RaidBracelet.png"
            },

            {
              name: "Black Ink Rabbit (Available during Chinese New Year Event)",
              img: "../assets/img/pets/buffs/BlackInk.png"
            },
        ]
    }
]

  randomBox = [
    {
      date: "27/01/2023",
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
