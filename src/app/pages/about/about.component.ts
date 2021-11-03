import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  imagePath = "assets/logo-my-movies.png";
  title = "Projeto criado no curso"
  courseName = "Apps Web e Mobile num só projeto com Angular e NativeScript"
  description = "Desenvolva Applicativos Web e Mobile (Android e iOS) compartilhando e reaproveitando 70% do código fonte ao mesmo projeto";
  buttonText = "SAIBA MAIS";

  ngOnInit() {
  }

}
