import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'semantic';
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
   /*  const dropdown: any = this.elemRef.nativeElement.getElementByClassName('dropdown'); //.querySelectorAll('.dropdown');
    dropdown.dropdown({
      maxSelections: 3
    }); */

  }

  ngAfterViewInit() {
    $('.ui.normal.dropdown')
    .dropdown({
      maxSelections: 3
    });
  $('.ui.special.dropdown')
    .dropdown({
      useLabels: false,
      maxSelections: 3
    });
  }
}
