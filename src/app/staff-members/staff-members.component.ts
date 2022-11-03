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
      class: "lead-team",
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
      class: "admin-team",
      members: [
        {
          name: "Killrog",
          class: "web-dev",
          roles: "Web Developer",
          languages: "PL/ENG",
          img: "web_dev_male"
        },
        {
          name: "Decameron",
          class: "team-manager",
          roles: "Team Manager",
          languages: "TR/ENG",
          img: "cm_male"
        },
        {
          name: "Astraea",
          class: "sgm",
          roles: "Super Game Master / Game Designer",
          languages: "FR/ENG",
          img: "sgm_female"
        },
        {
          name: "nayla",
          class: "sgm",
          roles: "Super Game Master",
          languages: "DE/ENG",
          img: "sgm_female"
        },
        {
          name: "DarkLegend",
          class: "head-balance",
          roles: "Head of Balance",
          languages: "ITA/ENG",
          img: "gd_male"
        },
        // {
        //   name: "Temko",
        //   class: "",
        //   roles: "Game Designer",
        //   languages: "FR/ENG",
        //   img: "gd_male"
        // },
      ]
    },
    {
      category: "NosVoid Game Master Team",
      class: "gm",
      members: [
        {
          name: "Aeri",
          class: "gm",
          roles: "Game Master",
          languages: "TR/ENG",
          img: "gm_male"
        },
        {
          name: "Dana&Kai",
          class: "gm",
          roles: "Game Master",
          languages: "ES/ENG",
          img: "gm_male"
        },
        {
          name: "Drecker",
          class: "gm",
          roles: "Game Master",
          languages: "ITA/ENG",
          img: "gm_male"
        },
        {
          name: "KryptonJH",
          class: "wiki-dev",
          roles: "Wiki Developer",
          languages: "FR/ENG",
          img: "wiki_dev_male"
        },
        {
          name: "Senka",
          class: "gm",
          roles: "Game Master",
          languages: "ITA/ENG",
          img: "gm_male"
        }
      ]
    },
    {
      category: "NosVoid Junior Game Designer Team",
      class: "junior",
      members: [
        {
          name: "GayBoysAdmirer",
          class: "junior",
          roles: "Junior Game Designer",
          languages: "PL/ENG",
          img: "jgd_male"
        },
        {
          name: "Morgoth",
          class: "junior",
          roles: "Junior Game Designer",
          languages: "DE/ENG",
          img: "jgd_male"
        }
      ]
    },
    {
      category: "NosVoid Supporter Team",
      class: "supp",
      members: [
        {
          name: "AgentPerry",
          class: "supp",
          roles: "Game Supporter",
          languages: "CZ/ENG",
          img: "gs_male"
        },
        {
          name: "Exodia's",
          class: "supp",
          roles: "Game Supporter",
          languages: "THAI",
          img: "gs_male"
        },
        {
          name: "Fekeno",
          class: "supp",
          roles: "Game Supporter",
          languages: "DE/ENG",
          img: "gs_male"
        },
        {
          name: "Iremia",
          class: "supp",
          roles: "Game Supporter",
          languages: "PL/ENG",
          img: "gs_female"
        },
        {
          name: "Nyx",
          class: "tech",
          roles: "Tech Helper",
          languages: "PL/ENG",
          img: "gs_male"
        },
        {
          name: "TheAnnoyingCat",
          class: "supp",
          roles: "Game Supporter",
          languages: "ES/ENG",
          img: "gs_female"
        }
      ]
    },
    {
      category: "NosVoid Trial Supporter Team",
      class: "tgs",
      members: [
        {
          name: "Flashkun",
          class: "tgs",
          roles: "Trial Game Supporter",
          languages: "DE/ENG",
          img: "gs_male"
        },
        {
          name: "Galete",
          class: "tgs",
          roles: "Trial Game Supporter",
          languages: "ES/ENG",
          img: "gs_male"
        },
        {
          name: "Shelby",
          class: "tgs",
          roles: "Trial Game Supporter",
          languages: "CZ/ENG",
          img: "gs_male"
        },
        {
          name: "Sikario",
          class: "tgs",
          roles: "Trial Game Supporter",
          languages: "PL/ENG",
          img: "gs_male"
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
