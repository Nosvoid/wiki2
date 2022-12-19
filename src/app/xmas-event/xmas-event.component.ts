import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xmas-event',
  templateUrl: './xmas-event.component.html',
  styleUrls: ['./xmas-event.component.css']
})
export class XmasEventComponent implements OnInit {

  santaBox = [
    {reward: "Snowflake x5"},
    {reward: "Christmas Socks x5"},
    {reward: "Christmas Tree x5"},
    {reward: "Angel Feather x50"},
    {reward: "Large Lump of Gold x10"},
    {reward: "Winter Box"},
    {reward: "Scarf x1"},
    {reward: "Pillow x1"},
    {reward: "Snow Fairy Title"},
  ]

  snowmanBox = [
    {reward: "Snowflake x5"},
    {reward: "Christmas Socks x5"},
    {reward: "Christmas Tree x5"},
    {reward: "Angel Feather x50"},
    {reward: "Large Lump of Gold x10"},
    {reward: "Winter Box"},
    {reward: "Jingle Bell x1"},
    {reward: "Pillow x1"},
    {reward: "Snow Fairy Title"},
  ]

  winterBox = [
    {reward: "Snowflake x10"},
    {reward: "Christmas Socks x10"},
    {reward: "Christmas Tree x10"},
    {reward: "Scarf x1"},
    {reward: "Jingle Bell x1"},
    {reward: "Pillow x1"},
    {reward: "Snow Fairy Title" },
  ]

  xmaswbBox = [
    {reward: "10x Snowflake"},
    {reward: "10x Christmas Socks"},
    {reward: "10x Christmas Tree"},
    {reward: "10x Christmas Toy"},
  ]

  minilandPack = [
    {reward: "Snowflake x10"},
    {reward: "Chritmas Socks x10"},
    {reward: "Chritmas Tree x10"},
    {reward: "Tree House (Miniland)"},
    {reward: "Gnome Emporium (Miniland)"},
    {reward: "Chritmas Tree (Miniland)"},
    {reward: "Large Christmas Tree (Miniland)"},
    {reward: "Christmas Decoration (Miniland)"},
    {reward: "Snowman Family (Miniland)"},
    {reward: "Car with Chritmas Tree (Miniland)"},
    {reward: "Christmas Carpet (Miniland)"},
    {reward: "Snow Fox Statue (Miniland)"},
    {reward: "Mimi Mentor Statue (Miniland)"},
    {reward: "Frozen Bear Statue (Miniland)"},
  ]

  itemsToCraft = [
    {
      icon: "AAAAAA",
      name: "Docile Mini Snowball", 
      buff: "../../assets/img/pets/buffs/mini_snowball.png"
    },
    {
      icon: "AAAAAA",
      name: "Red-nosed Reindeer Bead", 
      buff: "../../assets/img/pets/buffs/red_nose.png"
    },
    {
      icon: "AAAAAA",
      name: "Lotus' Specialist Partner Card", 
      buff: "../../assets/img/psps/buffs/lotus.png"
    },
    {
      icon: "AAAAAA",
      name: "Shinobi's Specialist Partner Card", 
      buff: "../../assets/img/psps/buffs/shinobi.png"
    },
    {
      icon: "AAAAAA",
      name: "Christmas Costume Box", 
      buff: "../../assets/img/xmas-event/AAAAA.png"
    },
    {
      icon: "AAAAAA",
      name: "Snow Fairy Title", 
      buff: "../../assets/img/xmas-event/snow-fairy-title.png"
    },
    {
      icon: "AAAAAA",
      name: "Winter is Coming Title", 
      buff: "../../assets/img/xmas-event/winter-is-coming-title.png"
    },
    {
      icon: "AAAAAA",
      name: "King of Freeze Title", 
      buff: "../../assets/img/xmas-event/king-of-freeze-title.png"
    },
    {
      icon: "AAAAAA",
      name: "Queen of Freeze Title", 
      buff: "../../assets/img/xmas-event/queen-of-freeze-title.png"
    },
  ]

  dailyQuests = [
    {
      name: "Steal the present from Santa Claus !",
      todo: [
        {quest: "• Do Santa Claus Raid x15"},
      ],
      rewards: [
        {reward: "- 2x Winter Box"},
      ]
    },
    {
      name: "Slay the huge Snowman !",
      todo: [
        {quest: "• Do Snowman Raid x10"},
      ],
      rewards: [
        {reward: "- 1x Winter Box"},
        {reward: "- 1x Pillow"},
      ]
    },
    {
      name: "Another quest for a Winter's Hero !",
      todo: [
        {quest: "• Do Santa Claus Raid x15"},
        {quest: "• Do Snowman Raid x10"},
      ],
      rewards: [
        {reward: "- 1x Eternal Ice"},
      ]
    },
    {
      name: "The White Walkers are among us !",
      todo: [
        {quest: "• Do the Christmas World Boss x1"},
      ],
      rewards: [
        {reward: "- 5x Christmas Toy"},
        {reward: "- 1x Winter Box"},
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
