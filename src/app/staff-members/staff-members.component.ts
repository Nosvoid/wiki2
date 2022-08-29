import { Component, OnInit } from '@angular/core';

import staffmembersData from "../_json/crew/staff-members.json";

interface StaffMembers {
  name: String;
  language: String;
  role: String;
  logo: String;
  class: String;
}

@Component({
  selector: 'app-staff-members',
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.css']
})
export class StaffMembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  staffmembers:StaffMembers[] = staffmembersData;
}
