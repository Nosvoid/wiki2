import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {

  rewards = [
    { reward : "5x Piece of Cheese"},
    { reward : "200x Angel Feather"},
    { reward : "1x Pink Lotus"},
    { reward : "1x Mouse Treasure"},
    { reward : "1x Mouse Tail"},
    { reward : "1x Mouse Ears"},
    { reward : "1x Royal Wheel"},
    { reward : "1x Mouse Gold (sellable for 7kk to NPCs)"},
    { reward : "1x Broken Wing (sellable for 30kk to NPCs)"}
  ]

  itemsToCraft = [
    {
      icon: "lucky_rat",
      name: "Lucky Rat",
      recipe: [
        { mat: "300x Piece of Cheese" },
        { mat: "2x Mouse Tail" }
      ],
      img: "../../assets/img/pets/buffs/lucky_rat.png"
    },
    {
      icon: "masterchef_skin",
      name: "Masterchef Skin",
      recipe: [
        { mat: "800x Piece of Cheese" },
        { mat: "15x Roast Lamb" },
        { mat: "15x Cold Desert Stew" },
        { mat: "20 Roast Lamb and Catfish" }
      ],
      img: "../../assets/img/mouse-event/masterchef_buff.png"
    },
    {
      icon: "rat_hat",
      name: "Rat Hat",
      recipe: [
        { mat: "300x Piece of Cheese" },
        { mat: "2x Mouse Ears" }
      ],
      img: "../../assets/img/costumes/all-sets/buffs/rat_hat_buffs.png"
    },
    {
      icon: "orkani",
      name: "Orkani PSP",
      recipe: [
        { mat: "1x Mouse Treasure" },
        { mat: "1x Mouse Ear" }
      ],
      img: "../../assets/img/psps/buffs/orkani.png"
    },
    {
      icon: "raid_necklace",
      name: "Raid Necklace",
      recipe: [
        { mat: "300x Piece of Cheese" },
        { mat: "3x Mouse Treasure" }
      ],
      img: "../../assets/img/accessories/raid_necklace.png"
    },
    {
      icon: "carriage",
      name: "Royal Rabbit Carriage",
      recipe: [
        { mat: "200x Piece of Cheese" },
        { mat: "4x Royal Wheel" }
      ],
      img: "../../assets/img/mouse-event/carriage_skin.png"
    },
    {
      icon: "sakura",
      name: "Sakura",
      recipe: [
        { mat: "200x Piece of Cheese" },
        { mat: "5x Pink Lotus" }
      ],
      img: "../../assets/img/partners/sakura.png"
    },
    {
      icon: "fox_lady",
      name: "Fox Lady",
      recipe: [
        { mat: "200x Piece of Cheese" },
        { mat: "2x Mouse Ears" },
        { mat: "1x Mouse Tail" }
      ],
      img: "../../assets/img/titles/fox_lady.png"
    }
  ]

  quests = [
    {
      name: "Slay the Evil Chef !",
      todo: "Do 15x Chef Terry Raid",
      rewards: [
        { reward: "5x Terry Chest" },
        { reward: "10x Big Strawberry" },
        { reward: "10x Big Cherry Apple" },
        { reward: "10x Prickly Pear" },
        { reward: "10x Big Cherries" }
      ]
    },
    {
      name: "We are looking for a new Chef",
      todo: "Collect 10x of each ingredient",
      rewards: [
        { reward: "20x Big Lettuce" },
        { reward: "20x Big Tomatoes" },
        { reward: "20x Big Onions" },
        { reward: "20x Big Mangos" }
      ]
    }
  ]

  titles = [
    {
      icon: "apprentice_chef",
      name: "Apprentice Chef",
      location: "Can be bought at Chef Terry NPC 500M",
      img: "apprentice_chef"
    },
    {
      icon: "royal_chef",
      name: "Royal Chef",
      location: "Can be obtained at Lv 10 Cooking SP",
      img: "royal_chef"
    },
    {
      icon: "ratatouille",
      name: "Ratatouille",
      location: "Can be obtained x2 at Lv 20 Cooking SP",
      img: "ratatouille"
    },
    {
      icon: "void_chef",
      name: "Void Chef",
      location: "Can be crafted at Cooking Stuff NPC",
      img: "void_chef"
    }
  ]

  showPack() {
    $(document).ready(function() {
      $('.show-pack').click(function(event){
        let btn = event.target;
        let nextChild = btn.nextElementSibling;

        if(nextChild?.classList.contains('display-none')) {
          nextChild.classList.remove('display-none');
          nextChild.classList.add('display-flex');
        } else if(nextChild?.classList.contains('display-flex')) {
          nextChild.classList.remove('display-flex');
          nextChild.classList.add('display-none');
        }
        $('.close-pack').click(function(event) {
          nextChild?.classList.remove('display-flex');
          nextChild?.classList.add('display-none');
        });

        window.addEventListener('click', (e) => {
          if(e.target == nextChild) {
            nextChild?.classList.remove('display-flex');
            nextChild?.classList.add('display-none');
          }
        });
      });
    });
  }

  constructor() { }

  ngOnInit(): void {
    this.showPack();
  }

}
