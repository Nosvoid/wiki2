import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  @ViewChild('przyciskiContainer') przyciskiContainer!: ElementRef;
  @ViewChild('obrazekPopup') obrazekPopup!: ElementRef;
  @ViewChild('przyciskPowrotu') przyciskPowrotu!: ElementRef;

  obrazki: string[] = [
    'sp1sword.png',
    'sp2sword.png',
    'sp3sword.png',
    'sp4sword.png',
    'sp5sword.png',
    'sp6sword.png',
    'sp7sword.png',
    'sp8sword.png',
    'sp9sword.png',
    'sp10sword.png',
    'sp1archer.png',
    'sp2archer.png',
    'sp3archer.png',
    'sp4archer.png',
    'sp5archer.png',
    'sp6archer.png',
    'sp7archer.png',
    'sp8archer.png',
    'sp9archer.png',
    'sp10archer.png',
    'sp1mage.png',
    'sp2mage.png',
    'sp3mage.png',
    'sp4mage.png',
    'sp5mage.png',
    'sp6mage.png',
    'sp7mage.png',
    'sp8mage.png',
    'sp9mage.png',
    'sp10mage.png',
    'sp1ma.png',
    'sp2ma.png',
    'sp3ma.png',
    'sp4ma.png',
    'sp5ma.png',
    'sp10ma.png',

  ];

  podprzyciskiObrazki: string[][] = [
    ['wsp11.png', 'wsp12.png', 'wsp13.png', 'wsp14.png', 'wsp15.png', 'wsp16.png', 'wsp17.png', 'wsp18.png', 'wsp19.png', 'wsp110.png', 'wsp111.png'], // Dla przycisku 1
    ['wsp21.png', 'wsp22.png','wsp23.png', 'wsp24.png', 'wsp25.png', 'wsp26.png', 'wsp27.png', 'wsp28.png', 'wsp29.png', 'wsp210.png', 'wsp211.png'], // Dla przycisku 2
    ['wsp31.png', 'wsp32.png', 'wsp33.png', 'wsp34.png', 'wsp35.png', 'wsp36.png', 'wsp37.png', 'wsp38.png', 'wsp39.png', 'wsp310.png', 'wsp311.png'],  // Dla przycisku 3
    ['wsp41.png', 'wsp42.png', 'wsp43.png', 'wsp44.png', 'wsp45.png', 'wsp46.png', 'wsp47.png', 'wsp48.png', 'wsp49.png', 'wsp410.png', 'wsp411.png'],
    ['wsp51.png', 'wsp52.png', 'wsp53.png', 'wsp54.png', 'wsp55.png', 'wsp56.png', 'wsp57.png', 'wsp58.png', 'wsp59.png', 'wsp510.png', 'wsp511.png',], // Dla przycisku 5
    ['wsp61.png', 'wsp62.png', 'wsp63.png', 'wsp64.png', 'wsp65.png', 'wsp66.png', 'wsp67.png', 'wsp68.png', 'wsp69.png', 'wsp610.png', 'wsp611.png', 'wsp612.png', 'wsp613.png',], // Dla przycisku 6
    ['wsp71.png', 'wsp72.png', 'wsp73.png', 'wsp74.png', 'wsp75.png', 'wsp76.png', 'wsp77.png', 'wsp78.png', 'wsp79.png', 'wsp710.png', 'wsp711.png', 'wsp712.png'], // Dla przycisku 7
    ['wsp81.png', 'wsp82.png', 'wsp83.png', 'wsp84.png', 'wsp85.png', 'wsp86.png', 'wsp87.png', 'wsp88.png', 'wsp89.png', 'wsp810.png', 'wsp811.png'], // Dla przycisku 8
    ['wsp91.png', 'wsp92.png', 'wsp93.png', 'wsp94.png', 'wsp95.png', 'wsp96.png', 'wsp97.png', 'wsp98.png', 'wsp99.png', 'wsp910.png', 'wsp911.png', 'wsp912.png', 'wsp913.png'], // Dla przycisku 9
    ['wsp101.png', 'wsp102.png', 'wsp103.png', 'wsp104.png', 'wsp105.png', 'wsp106.png', 'wsp107.png', 'wsp108.png', 'wsp109.png', 'wsp1010.png', 'wsp1011.png'],
    ['asp11.png', 'asp12.png', 'asp13.png', 'asp14.png', 'asp15.png', 'asp16.png', 'asp17.png', 'asp18.png', 'asp19.png', 'asp110.png', 'asp111.png'], // Dla przycisku 10
    ['asp21.png', 'asp22.png', 'asp23.png', 'asp24.png', 'asp25.png', 'asp26.png', 'asp27.png', 'asp28.png', 'asp29.png', 'asp210.png', 'asp211.png'],
    ['asp31.png', 'asp32.png', 'asp33.png', 'asp34.png', 'asp35.png', 'asp36.png', 'asp37.png', 'asp38.png', 'asp39.png', 'asp310.png', 'asp311.png'],
    ['asp41.png', 'asp42.png', 'asp43.png', 'asp44.png', 'asp45.png', 'asp46.png', 'asp47.png', 'asp48.png', 'asp49.png', 'asp410.png', 'asp411.png'],
    ['asp51.png', 'asp52.png', 'asp53.png', 'asp54.png', 'asp55.png', 'asp56.png', 'asp57.png', 'asp58.png', 'asp59.png', 'asp510.png', 'asp511.png'],
    ['asp61.png', 'asp62.png', 'asp63.png', 'asp64.png', 'asp65.png', 'asp66.png', 'asp67.png', 'asp68.png', 'asp69.png', 'asp610.png', 'asp611.png', 'asp612.png', 'asp613.png', 'asp614.png'],
    ['asp71.png', 'asp72.png', 'asp73.png', 'asp74.png', 'asp75.png', 'asp76.png', 'asp77.png', 'asp78.png', 'asp79.png', 'asp710.png', 'asp711.png', 'asp712.png', 'asp713.png', 'asp714.png'],
    ['asp81.png', 'asp82.png', 'asp83.png', 'asp84.png', 'asp85.png', 'asp86.png', 'asp87.png', 'asp88.png', 'asp89.png', 'asp810.png', 'asp811.png', 'asp812.png', 'asp813.png', 'asp814.png', 'asp815.png', 'asp816.png'],
    ['asp91.png', 'asp92.png', 'asp93.png', 'asp94.png', 'asp95.png', 'asp96.png', 'asp97.png', 'asp98.png', 'asp99.png', 'asp910.png', 'asp911.png', 'asp912.png', 'asp913.png', 'asp914.png', 'asp915.png', 'asp916.png'],
    ['asp101.png', 'asp102.png', 'asp103.png', 'asp104.png', 'asp105.png', 'asp106.png', 'asp107.png', 'asp108.png', 'asp109.png', 'asp1010.png', 'asp1011.png'],
  ];

  ngOnInit() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.zamknijObrazekPopup();
      }
    });
  }

  ngAfterViewInit() {
    this.dodajPrzyciski();
  }

  dodajPrzyciski() {
    const przyciskiContainer = this.przyciskiContainer.nativeElement;

    for (let i = 0; i < this.obrazki.length; i++) {
      const przycisk = document.createElement('button');
      przycisk.classList.add('przycisk');
      
      const ikona = document.createElement('img');
      ikona.src = `assets/img/balance/sps/${this.obrazki[i]}`;
      przycisk.appendChild(ikona);
      przyciskiContainer.appendChild(przycisk);

      przycisk.addEventListener('click', () => {
        this.pokazPodprzyciski(i);
      });

      if (i === 9|| i === 19 || i === 29) {
        for (let j = 0; j < 10; j++) {
          const emptyButton = document.createElement('button');
          emptyButton.style.visibility = 'hidden';
          przyciskiContainer.appendChild(emptyButton);
          
        }
        
      }
      
    }
  }
  

  pokazPodprzyciski(nrPrzycisku: number) {
    const obrazekPopup = this.obrazekPopup.nativeElement;
    obrazekPopup.innerHTML = '';
  
    for (let i = 0; i < this.podprzyciskiObrazki[nrPrzycisku].length; i++) {
      const podprzycisk = document.createElement('button');
      podprzycisk.classList.add('przycisk');
      const ikona = document.createElement('img');
      ikona.src = `assets/img/balance/skills/${this.podprzyciskiObrazki[nrPrzycisku][i]}`;
      podprzycisk.appendChild(ikona);
  
      podprzycisk.addEventListener('click', () => {
        this.pokazObrazek(`assets/img/balance/skilleffect/${this.podprzyciskiObrazki[nrPrzycisku][i]}`);
      });
  
      obrazekPopup.appendChild(podprzycisk);
    }
  
    obrazekPopup.style.display = 'flex';
    this.wyswietlPrzyciskPowrotu();
  }
  
  wyswietlPrzyciskPowrotu() {
    const przyciskPowrotu = this.przyciskPowrotu.nativeElement;
    przyciskPowrotu.innerHTML = 'Powrót';
    przyciskPowrotu.style.display = 'block';
  }
  
  powrotDoPodprzyciskow() {
    const obrazekPopup = this.obrazekPopup.nativeElement;
    obrazekPopup.style.display = 'none';
  
    const przyciskiContainer = this.przyciskiContainer.nativeElement;
    przyciskiContainer.style.display = 'flex';
  }
  
  schowajPrzyciskPowrotu() {
    const przyciskPowrotu = this.przyciskPowrotu.nativeElement;
    przyciskPowrotu.style.display = 'none';
  }

  zamknijObrazekPopup() {
    const obrazekPopup = this.obrazekPopup.nativeElement;
    obrazekPopup.style.display = 'none';
  }
  
  pokazObrazek(sciezkaObrazka: string) {
    const obrazekPopup = this.obrazekPopup.nativeElement;
    obrazekPopup.innerHTML = '';
  
    const obrazek = document.createElement('img');
    obrazek.src = sciezkaObrazka;
    obrazekPopup.appendChild(obrazek);
  
    obrazekPopup.style.display = 'flex';
  }
}
