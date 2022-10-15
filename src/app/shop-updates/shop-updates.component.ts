import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-updates',
  templateUrl: './shop-updates.component.html',
  styleUrls: ['./shop-updates.component.css']
})
export class ShopUpdatesComponent implements OnInit {

  shopUpdates = [
    {
        "date": "15/10/2022",
        "items": [
            {
                "name": "Change Tattoo Item x10",
                "img": "../assets/img/special-items/tattoo_change.png"
            },
            {
                "name": "Change Wings Item",
                "img": "../assets/img/special-items/change_wings.png"
            },
            {
                "name": "Easter Bunny Costume Set",
                "img": "../assets/img/costumes/all-sets/buffs/easter_bunny_buffs.png"
            },
            {
                "name": "Mad March Hare PSP",
                "img": "../assets/img/psps/buffs/mad_march.png"
            },
            {
                "name": "Pirate Lord Title",
                "img": "../assets/img/titles/pirate_lord.png"
            },
            {
              "name": "Shadow Master Bunny",
              "img": "../assets/img/pets/buffs/master_bunny.png"
            },           
            {
              "name": "Shadow Snow Fox",
              "img": "../assets/img/pets/buffs/snow_fox.png"
            },
        ]
    }
]

  constructor() { }

  ngOnInit(): void {
  }
}
