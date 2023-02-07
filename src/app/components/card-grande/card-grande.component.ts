import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-grande',
  templateUrl: './card-grande.component.html',
  styleUrls: ['./card-grande.component.css'],
})
export class CardGrandeComponent implements OnInit {
  @Input()
  fotoCover: string = "";
  @Input()
  cardTitulo: string = '';
  @Input()
  cardDescricao: string = "";
  @Input()
    Id:string = "0"
  constructor() {}

  ngOnInit(): void {}
}
