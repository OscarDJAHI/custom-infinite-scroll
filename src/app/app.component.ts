import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-infinte-scroll';
  // Add 20 items.
  nextItem = 1;
  listElm: any;

  constructor() {
  }

  ngOnInit(): void {
    this.listElm = document.querySelector('#infinite-list');
    this.loadMore();
  }

  // var loadMore = function () {
  //   for (var i = 0; i < 20; i++) {
  //     var item = document.createElement('li');
  //     item.innerText = 'Item ' + nextItem++;
  //     listElm.appendChild(item);
  //   }
  // }

  // Detect when scrolled to bottom.
  // listElm.addEventListener('scroll', function () {
  //   if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
  //     loadMore();
  //   }
  // });

  scroll() {
    if (this.listElm.scrollTop + this.listElm.clientHeight >= this.listElm.scrollHeight) {
      this.loadMore();
    }
  }

  // Initially load some items.
  loadMore() {
    for (var i = 0; i < 20; i++) {
      var item = document.createElement('li');
      item.innerText = 'Item ' + this.nextItem++;
      this.listElm.appendChild(item);
    }
  }
}
