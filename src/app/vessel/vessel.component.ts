import { Component, OnInit } from '@angular/core';


import tattoosData from "../_json/tattoos.json";

interface Carve {
  name: String;
  img: String;
}

interface Tattoos {
  name: String;
  scroll: String;
  scrollImg: String;
  img: String;
}

@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.component.html',
  styleUrls: ['./vessel.component.css']
})
export class VesselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  tattoos: Tattoos[] = tattoosData;
}
