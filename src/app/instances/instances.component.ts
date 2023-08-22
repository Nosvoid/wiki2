import { Component, OnInit } from '@angular/core';

import soulsystemData from "../_json/soul-system.json";




interface SoulSystem {
  name: String;
  img: String;
  mats: String;
  
}



@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css']
})
export class InstancesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    showcraft();
    
    
  }

  
  soulsystem: SoulSystem[] = soulsystemData;

}

  function showcraft() {
    $(document).ready(function() {
      $('.show-craft').click(function(event){
        let btn = event.target;
        let nextChild = btn.nextElementSibling;
  
        if(nextChild?.classList.contains('display-none')) {
          nextChild.classList.remove('display-none');
          nextChild.classList.add('display-flex');
        } else if(nextChild?.classList.contains('display-flex')) {
          nextChild.classList.remove('display-flex');
          nextChild.classList.add('display-none');
        }
        $('.close-craft').click(function(event) {
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
