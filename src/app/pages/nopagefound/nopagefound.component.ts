import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.html'
  ]
})
export class NopagefoundComponent {

  constructor() { }

  year =new Date ().getFullYear();

}
