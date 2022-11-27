import { Component, OnInit } from '@angular/core';

import patchnotesData from "../_json/updates/patch-notes.json";

interface PatchNotes {
  patchnotesname: String;
  classes: Array<Classes>
}

interface Classes {
  name: String;
  hide: String;
  topic: Array<Topic>
}

interface Topic {
  topicname: String;
  topicclass: String;
  changes: Array<Changes>;
}

interface Changes {
  change: String;
}

@Component({
  selector: 'app-patch-notes',
  templateUrl: './patch-notes.component.html',
  styleUrls: ['./patch-notes.component.css']
})
export class PatchNotesComponent implements OnInit {

  p: number = 1;

  openPatchNote() {
    $(document).ready(function() {
      $('.open-patch-notes').click(function(event){
        let btn = event.target;
        let nextChild = btn.nextElementSibling;

        if(nextChild?.classList.contains('display-none')) {
          nextChild.classList.remove('display-none');
          nextChild.classList.add('display-grid');
        } else if(nextChild?.classList.contains('display-grid')) {
          nextChild.classList.remove('display-grid');
          nextChild.classList.add('display-none');
        }
      });
    });
  }

  patchNotesTitles() {
    let isTitle
    const titles = document.querySelectorAll('.patch-notes-change');
    titles.forEach(e => {
      if(e.textContent?.indexOf("•") === 0) e.classList.add("patch-notes-change-title")
    })
    return isTitle
  }

  constructor() { }

  ngOnInit(): void {
    this.openPatchNote();
    this.patchNotesTitles()
  }

  patchnotes: PatchNotes[] = patchnotesData;
}
