import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.css']
})
export class StaffMembersComponent implements OnInit {

  leadTeam = [
    {
      category: "NosVoid Lead Team",
      members: [
        {
          name: "SvC",
          roles: "Lead Developer",
          languages: "PL/ENG",
          img: "developer_male"
        },
        {
          name: "Purge",
          roles: "Client Modder / Community Manager",
          languages: "TR/ENG",
          img: "cm_male"
        },
        {
          name: "Revox",
          roles: "Client Modder",
          languages: "PL/ENG",
          img: "client_modder_male"
        },
        {
          name: "OgetayK",
          roles: "Game Designer",
          languages: "TR/ENG",
          img: "gd_male"
        },
      ]
    }
  ]

  staffMembers = [
    {
      category: "NosVoid Admin Team",
      members: [
        {
          name: "Killrog",
          roles: "Web Developer",
          languages: "PL/ENG",
          img: "web_dev_male"
        },
        {
          name: "Decameron",
          roles: "Team Manager",
          languages: "TR/ENG",
          img: "cm_male"
        },
        {
          name: "Astraea",
          roles: "Super Game Master / Game Designer",
          languages: "FR/ENG",
          img: "sgm_female"
        },
        {
          name: "nayla",
          roles: "Super Game Master",
          languages: "DE/ENG",
          img: "sgm_female"
        },
        {
          name: "DarkLegend",
          roles: "Head of Balance",
          languages: "ITA/ENG",
          img: "gd_male"
        },
        {
          name: "Temko",
          roles: "Game Designer",
          languages: "FR/ENG",
          img: "gd_male"
        },
      ]
    },
    {
      category: "NosVoid Game Master Team",
      members: [
        {
          name: "Aeri",
          roles: "Game Master",
          languages: "TR/ENG",
          img: "gm_male"
        },
        {
          name: "Cara",
          roles: "Game Master",
          languages: "DE/ENG",
          img: "gm_female"
        },
        {
          name: "Dana&Kai",
          roles: "Game Master",
          languages: "ES/ENG",
          img: "gm_male"
        },
        {
          name: "Drecker",
          roles: "Game Master",
          languages: "ITA/ENG",
          img: "gm_male"
        },
        {
          name: "GayBoysAdmirer",
          roles: "Junior Game Designer",
          languages: "PL/ENG",
          img: "jgd_male"
        },
        {
          name: "KryptonJH",
          roles: "Wiki Developer / Game Master",
          languages: "FR/ENG",
          img: "wiki_dev_male"
        },
        {
          name: "Megumin",
          roles: "Game Master",
          languages: "TR/ENG",
          img: "gm_male"
        },
        {
          name: "Morgoth",
          roles: "Junior Game Designer",
          languages: "DE/ENG",
          img: "jgd_male"
        },
        {
          name: "Senka",
          roles: "Trial Game Master",
          languages: "ITA/ENG",
          img: "tgm_male"
        }
      ]
    },
    {
      category: "NosVoid Supporter Team",
      members: [
        {
          name: "AgentPerry",
          roles: "Game Supporter",
          languages: "CZ/ENG",
          img: "gs_male"
        },
        {
          name: "Elite",
          roles: "Game Supporter",
          languages: "HK/ENG",
          img: "gs_male"
        },
        {
          name: "Exodia's",
          roles: "Game Supporter",
          languages: "THAI",
          img: "gs_male"
        },
        {
          name: "Iremia",
          roles: "Game Supporter",
          languages: "PL/ENG",
          img: "gs_female"
        },
        {
          name: "Nyx",
          roles: "Tech Helper",
          languages: "PL/ENG",
          img: "gs_male"
        },
        {
          name: "TheAnnoyingCat",
          roles: "Game Supporter",
          languages: "ES/ENG",
          img: "gs_female"
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
