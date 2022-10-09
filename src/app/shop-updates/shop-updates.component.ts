import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  shopUpdates = [
    {
        "date": "09/10/2022",
        "items": [
            {
                "name": "Archangel Lucifer",
                "img": "../assets/img/psps/buffs/archangel_lucifer.png"
            },
            {
                "name": "Batman Mask",
                "img": "../assets/img/helmets-masks/batman_mask.png"
            },
            {
                "name": "Betting Costume",
                "img": "../assets/img/costumes/costumes/betting_costume.png"
            },
            {
                "name": "Into The Void Title",
                "img": "../assets/img/titles/into_the_void.png"
            },
            {
              "name": "Knight Costume Set",
              "img": "../assets/img/costumes/all-sets/buffs/knight_buffs.png"
            },           
            {
              "name": "Lucy",
              "img": "../assets/img/psps/buffs/lucy.png"
            },
            {
                "name": "Shooting Star Title",
                "img": "../assets/img/titles/shooting_star.png"
            },
        ]
    }
]

  constructor() { }

  ngOnInit(): void {
  }
}
