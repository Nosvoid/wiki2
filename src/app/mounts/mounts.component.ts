import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-mounts',
  templateUrl: './mounts.component.html',
  styleUrls: ['./mounts.component.css']
})
export class MountsComponent implements OnInit {

  mounts = [
    {
      name: "Fluffy McFly",
      location: "Can be obtained in the Fortune Wheel",
      speed: "34",
      img: "fluffy_mcfly"
    },
    
    {
      name: "Magic Convertible",
      location: "Can be crafted at Achievement Rewards NPC in Act 4",
      speed: "34",
      img: "magic_convertible"
    },
    {
      name: "Magic Sleigh with Red-nosed Reindeer",
      location: "Obtainable in Winter Event",
      speed: "34",
      img: "magic_sleigh"
    },
    {
      name: "Magic Sleigh",
      location: "Obtainable in Winter Event",
      speed: "31",
      img: "sleigh"
    },
    {
      name: "12th Anniversary Speedy Alpaca",
      location: "Obtainable from Nosmall",
      speed: "34",
      img: "speedy_alpaca"
    },
    {
      name: "12th Anniversary Alpaca",
      location: "",
      speed: "31",
      img: "alpaca"
    },
    {
      name: "Marco Pollo",
      location: "Obtainable from Easter Event",
      speed: "34",
      img: "marco_pollo"
    },
    {
      name: "Magical Camel",
      location: "Obtainable from $warp p8.2 Desert Rewards NPS",
      speed: "34",
      img: "camel"
    },
    {
      name: "Magic Donkey Pinata",
      location: "Obtainable from P5 30-50 Fish Craft NPC $warp fish",
      speed: "34",
      img: "piniata"
    },
    {
      name: "Royal Rabbit Carriage",
      location: "Can be crafted during the Mouse Event",
      speed: "34",
      img: "royal_rabbit_carriage"
    },
    {
      name: "14th anniversary Boxer Kangaroo",
      location: "Can be obtained in the Fortune Wheel",
      speed: "31",
      img: "boxer_kangaroo"
    },
    {
      name: "Black Unicorn",
      location: "Can be craft at Event NPC in NosVille",
      speed: "31",
      img: "black_unicorn"
    },
    {
      name: "Magic Bone Drake",
      location: "Can be obtained in the Fortune Wheel",
      speed: "31",
      img: "magic_bone_drake"
    },
    {
      name: "Pink Unicorn",
      location: "Can be craft at Event NPC in NosVille",
      speed: "31",
      img: "pink_unicorn"
    },
    {
      name: "White Unicorn",
      location: "Can be crafted at Event NPC in Nosville",
      speed: "31",
      img: "white_unicorn"
    },
    {
      name: "Rodeo Bull",
      location: "Can be obtained from Nosmall",
      speed: "29",
      img: "rodeo_bull"
    },
    {
      name: "Turtlecopter",
      location: "Can be crafted at Lost War Helmet Craft NPC in Act4",
      speed: "29",
      img: "turtlecopter"
    },
    {
      name: "14th Anniversary Kangaroo",
      location: "Can be crafted during the Christmas Event",
      speed: "26",
      img: "kangaroo"
    },
    {
      name: "Magic Jaguar",
      location: "You can craft it at Mount NPC $warp p3",
      speed: "25",
      img: "magic_jaguar"
    },
    {
      name: "Particular UFO",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "22",
      img: "particular_ufo"
    },
    {
      name: "Billy Boneshaker Bike",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "21",
      img: "bike"
    },
    {
      name: "Blazing Blades In-line Skates",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "21",
      img: "blazing_blades"
    },
    {
      name: "Color Jeep",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "21",
      img: "color_jeep"
    },
    {
      name: "Horned Sweeper",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "21",
      img: "horned_sweeper"
    },
    {
      name: "Nossi the Dragon",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "21",
      img: "nossi"
    },
    {
      name: "Crazy Chris Magical Snowboard",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "20",
      img: "snowboard"
    },
    {
      name: "Icy Ike Magical Skis",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "20",
      img: "skis"
    },
    {
      name: "Magic Carpet",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "20",
      img: "magic_carpet"
    },
    {
      name: "Magic Scooter",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "20",
      img: "scooter"
    },
    {
      name: "Magic White Tiger",
      location: "Can be bought at Mount Shop NPC in NosVille",
      speed: "20",
      img: "white_tiger"
    }
  ]

  selectSex() {
    document.addEventListener("DOMContentLoaded", () => {
      const radio = document.querySelectorAll('input[name="sex"]');
      const female = document.getElementById("female");
      const maleImg = document.querySelectorAll(".male-img");
      const femaleImg = document.querySelectorAll(".female-img");
  
      radio.forEach(btn => {
        btn.addEventListener("change", () => {
          if($(btn).prop("defaultValue") === "male") {
            maleImg.forEach(img => {
              img.classList.remove("display-none");
            });
            femaleImg.forEach(img => {
              img.classList.add("display-none");
            });
          } else {
            femaleImg.forEach(img => {
              img.classList.remove("display-none");
            });
            maleImg.forEach(img => {
              img.classList.add("display-none");
            });
          }
        });
      });
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.selectSex();
  }

}