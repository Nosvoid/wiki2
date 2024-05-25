import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-six',
  templateUrl: './p-six.component.html',
  styleUrls: ['./p-six.component.css']
})
export class PSixComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // JavaScript or jQuery to handle accordion collapse animation
    document.querySelectorAll('.accordion-button').forEach(button => {
      button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('collapsed');
      });
    });
  }
}
