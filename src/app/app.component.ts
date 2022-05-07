import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  photos = [
    {
      description: 'papagaio',
      url: 'https://www.cevek.com.br/blog/wp-content/uploads/2020/06/papagaio-de-estima%C3%A7%C3%A3o-e-suas-principais-caracter%C3%ADsticas-min-1140x641.jpg',
    },
    {
      description: 'papagaio',
      url: 'https://www.cevek.com.br/blog/wp-content/uploads/2020/06/papagaio-de-estima%C3%A7%C3%A3o-e-suas-principais-caracter%C3%ADsticas-min-1140x641.jpg',
    }
  ]
}
