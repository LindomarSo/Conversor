import { Injectable } from '@angular/core';
import { Moeda } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    { "sigla":"AUD", "descricao": "Dolar Australiano" },
    { "sigla":"BGN", "descricao": "Lév Búlgaro" },
    { "sigla":"BRL", "descricao": "Real Brasileiro" },
    { "sigla":"CAD", "descricao": "Dolar Canadense" },
    { "sigla":"CHF", "descricao": "Franco Suíço" },
    { "sigla":"CNY", "descricao": "Yuan Chinês" },
    { "sigla":"CZK", "descricao": "Coroa República Tcheca" },
    { "sigla":"DKK", "descricao": "Coroa Dinamarquesa" },
    { "sigla":"EUR", "descricao": "Euro" },
    { "sigla":"GBP", "descricao": "Libra Esterlina" },
    { "sigla":"HRK", "descricao": "Coroa Croácia" },
    { "sigla":"HUF", "descricao": "Florim Húngaro" },
    { "sigla":"IDR", "descricao": "Rúpia Indonésia" },
    { "sigla":"ILS", "descricao": "Novo shekel Israelense" },
    { "sigla":"INR", "descricao": "Rúpia Indiana" },
    { "sigla":"JPY", "descricao": "Iene Japonês" },
    { "sigla":"KRW", "descricao": "Won Sul-Coreano" },
    { "sigla":"MXN", "descricao": "Peso Mexicano" },
    { "sigla":"MYR", "descricao": "Malásia Ringgit" },
    { "sigla":"NOK", "descricao": "Coroa Noruega" },
    { "sigla":"NZD", "descricao": "Dólar da Nova Zelândia" },
    { "sigla":"PHP", "descricao": "Peso Filipino" },
    { "sigla":"PLN", "descricao": "Ztoty Polônia" },
    { "sigla":"RON", "descricao": "Leu Romeno" },
    { "sigla":"RUB", "descricao": "Belarus Ruble" },
    { "sigla":"SEK", "descricao": "Cora Suécia" },
    { "sigla":"SGD", "descricao": "Dólar de singapura" },
    { "sigla":"THB", "descricao": "Baht Tailândia" },
    { "sigla":"TRY", "descricao": "Lira Turca" },
    { "sigla":"USD", "descricao": "Dólar dos Estados Unidos" },
    { "sigla":"ZAR", "descricao": "Ran África do Sul" },
  ]

  listarTodas(): Moeda[]
  {
    if(this.moedas)
      return this.moedas;
    
    this.moedas = [];

    for(let moedaObjs of this.moedasObj)
    {
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObjs);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
}
