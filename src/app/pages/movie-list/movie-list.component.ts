import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = [
    { id: 1, title: "Homen de Ferro", obs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", rating: 5, toWatchNext: true },
    { id: 2, title: "Motoqueiro Fantasma", obs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", rating: 3, toWatchNext: false },
    { id: 3, title: "Matrix", obs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", rating: 3.5, toWatchNext: true },
    { id: 4, title: "M.I.B.", obs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", rating: null, toWatchNext: false },
    { id: 5, title: "Homen Aranha", obs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", rating: 4, toWatchNext: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
