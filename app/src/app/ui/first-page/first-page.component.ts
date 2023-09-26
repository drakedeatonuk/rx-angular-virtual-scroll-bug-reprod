import { Component } from "@angular/core";
import { InfiniteScrollCustomEvent, NavController } from "@ionic/angular";


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
})
export class FirstPageComponent {

  items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
  ];

  constructor(private navSvc: NavController) {}

  async onIonInfinite(event: Event): Promise<void> {
    console.log('in onIonInfinite: ', event);
    (event as InfiniteScrollCustomEvent).target.complete();
  }
  
}