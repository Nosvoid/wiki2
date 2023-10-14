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
  @ViewChild('obrazekPopup2') obrazekPopup2!: ElementRef;
@ViewChild('popupObrazek') popupObrazek!: ElementRef;
  wybranyObrazek: string | null = null;

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
  wybranyPodprzycisk: string | null = null;
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
    ['msp11.png', 'msp12.png', 'msp13.png', 'msp14.png', 'msp15.png', 'msp16.png', 'msp17.png', 'msp18.png', 'msp19.png', 'msp110.png', 'msp111.png'],
    ['msp21.png', 'msp22.png', 'msp23.png', 'msp24.png', 'msp25.png', 'msp26.png', 'msp27.png', 'msp28.png', 'msp29.png', 'msp210.png', 'msp211.png'],
    ['msp31.png', 'msp32.png', 'msp33.png', 'msp34.png', 'msp35.png', 'msp36.png', 'msp37.png', 'msp38.png', 'msp39.png', 'msp310.png', 'msp311.png', 'msp312.png'],
    ['msp41.png', 'msp42.png', 'msp43.png', 'msp44.png', 'msp45.png', 'msp46.png', 'msp47.png', 'msp48.png', 'msp49.png', 'msp410.png', 'msp411.png'],
    ['msp51.png', 'msp52.png', 'msp53.png', 'msp54.png', 'msp55.png', 'msp56.png', 'msp57.png', 'msp58.png', 'msp59.png', 'msp510.png', 'msp511.png'],
    ['msp61.png', 'msp62.png', 'msp63.png', 'msp64.png', 'msp65.png', 'msp66.png', 'msp67.png', 'msp68.png', 'msp69.png', 'msp610.png', 'msp611.png', 'msp612.png', 'msp613.png'],
    ['msp71.png', 'msp72.png', 'msp73.png', 'msp74.png', 'msp75.png', 'msp76.png', 'msp77.png', 'msp78.png', 'msp79.png', 'msp710.png', 'msp711.png', 'msp712.png', 'msp713.png', 'msp714.png'],
    ['msp81.png', 'msp82.png', 'msp83.png', 'msp84.png', 'msp85.png', 'msp86.png', 'msp87.png', 'msp88.png', 'msp89.png', 'msp810.png', 'msp811.png'],
    ['msp91.png', 'msp92.png', 'msp93.png', 'msp94.png', 'msp95.png', 'msp96.png', 'msp97.png', 'msp98.png', 'msp99.png', 'msp910.png', 'msp911.png'],
    ['msp101.png', 'msp102.png', 'msp103.png', 'msp104.png', 'msp105.png', 'msp106.png', 'msp107.png', 'msp108.png', 'msp109.png', 'msp1010.png', 'msp1011.png'],
    ['masp11.png', 'masp12.png', 'masp13.png', 'masp14.png', 'masp15.png', 'masp16.png', 'masp17.png', 'masp18.png', 'masp19.png', 'masp110.png', 'masp111.png', 'masp112.png', 'masp113.png', 'masp114.png', 'masp115.png', 'masp116.png', 'masp117.png'],
['masp21.png', 'masp22.png', 'masp23.png', 'masp24.png', 'masp25.png', 'masp26.png', 'masp27.png', 'masp28.png', 'masp29.png', 'masp210.png', 'masp211.png', 'masp212.png', 'masp213.png', 'masp214.png', 'masp215.png'],
['masp31.png', 'masp32.png', 'masp33.png', 'masp34.png', 'masp35.png', 'masp36.png', 'masp37.png', 'masp38.png', 'masp39.png', 'masp310.png', 'masp311.png', 'masp312.png', 'masp313.png', 'masp314.png', 'masp315.png'],
['masp41.png', 'masp42.png', 'masp43.png', 'masp44.png', 'masp45.png', 'masp46.png', 'masp47.png', 'masp48.png', 'masp49.png', 'masp410.png', 'masp411.png'],
['masp51.png', 'masp52.png', 'masp53.png', 'masp54.png', 'masp55.png', 'masp56.png', 'masp57.png', 'masp58.png', 'masp59.png', 'masp510.png', 'masp511.png', 'masp512.png', 'masp513.png', 'masp514.png', 'masp515.png', 'masp516.png', 'masp517.png', 'masp518.png', 'masp519.png', 'masp520.png', 'masp521.png', 'masp520.png'],
['masp101.png', 'masp102.png', 'masp103.png', 'masp104.png', 'masp105.png', 'masp106.png', 'masp107.png', 'masp108.png', 'masp109.png', 'masp1010.png', 'masp1011.png', 'masp1012.png', 'masp1013.png']
  
  
  
  
  
  
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
   this.wybranyPodprzycisk = this.podprzyciskiObrazki[nrPrzycisku][0];
    
  for (let i = 0; i < this.podprzyciskiObrazki[nrPrzycisku].length; i++) {
    const podprzycisk = document.createElement('button');
    podprzycisk.classList.add('przycisk');
      const ikona = document.createElement('img');
      ikona.src = `assets/img/balance/skills/${this.podprzyciskiObrazki[nrPrzycisku][i]}`;
      podprzycisk.appendChild(ikona);
  
      podprzycisk.addEventListener('click', () => {
        this.pokazObrazek(`assets/img/balance/skilleffect/${this.podprzyciskiObrazki[nrPrzycisku][i]}`);
        
      });
      podprzycisk.addEventListener('click', () => {
        this.pokazObrazek2(`assets/img/balance/skilleffect/${this.podprzyciskiObrazki[nrPrzycisku][i]}`);
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
    this.wybranyObrazek = null;
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
  pokazObrazek2(sciezkaObrazka: string) {
    const obrazekPopup2 = this.obrazekPopup2.nativeElement;
    const popupObrazek = this.popupObrazek.nativeElement;
    this.pokazObrazek2('assets/img/balance/render/masp1.png');
  
    popupObrazek.src = sciezkaObrazka;
  
    obrazekPopup2.style.display = 'flex';
  }
  zamknijObrazekPopup2() {
    const obrazekPopup2 = this.obrazekPopup2.nativeElement;
    obrazekPopup2.style.display = 'none';
  }
}
