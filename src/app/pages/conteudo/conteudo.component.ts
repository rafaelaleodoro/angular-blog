import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dadosFalsos} from '../../dados/dadosFalsos'


@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css'],
})
export class ConteudoComponent implements OnInit {
  conteudoFoto: string = '';
  conteudoTitulo: string = '';
  conteudoDescricao = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) =>
      (this.id = value.get('id')));

    this.definirValorParaOComponente(this.id)
  }

  definirValorParaOComponente(id:string | null) {
    const resultado = dadosFalsos.filter(article => article.id == id)[0]

    this.conteudoTitulo = resultado.titulo
    this.conteudoDescricao = resultado.descricao
    this.conteudoFoto = resultado.foto
  }
}
