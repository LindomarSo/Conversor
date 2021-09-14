import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Conversao, ConversaoResponse, Moeda } from '../model';
import { ConversorService, MoedaService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  
  @ViewChild('conversaoForm', {static: true}) conversaoForm: NgForm

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  constructor(private moedaService: MoedaService, private conversorService: ConversorService) { }

  ngOnInit(): void 
  {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  init():void 
  {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  converter(): void
  {
    if(this.conversaoForm.form.valid)
    {
      this.conversorService.converter(this.conversao).subscribe(
        response => this.conversaoResponse = response,
        error => this.possuiErro = true
      )
    }
  }
}
