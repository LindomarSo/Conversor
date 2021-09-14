import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conversao, ConversaoResponse } from '../model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

    // Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação 
    //private readonly BASE_URL = "http://api.fixer.io/latest";
    private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=b58cb20e7787676546d1e8f8f6c13a74";
    constructor(private http: HttpClient) {}
    /**
     * Realiza a chamada para a API de conversão de moedas.
     *
     * @param Conversao conversao
     * @return Observable<ConversaoResponse>
     */
    converter(conversao: Conversao): Observable<any> {
    // Na linha abaixo altere a '?' por '&'
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http
        .get(this.BASE_URL + params);
        // No Angular 6 as duas próximas linha não são mais necessárias
        //.map(response => response.json() as ConversaoResponse)
        //.catch(error => Observable.throw(error));
    }
    /**
     * Retorna a cotação para dado uma response.
     *
     * @param ConversaoResponse conversaoResponse
     * @param Conversao conversao
     * @return number
     */
    cotacaoPara(conversaoResponse: ConversaoResponse, 
  conversao: Conversao): number {
    if (conversaoResponse === undefined) {
    return 0;
    }
    return conversaoResponse.rates[conversao.moedaPara];
    }
    /**
     * Retorna a cotação de dado uma response.
     *
     * @param ConversaoResponse conversaoResponse
     * @param Conversao conversao
     * @return string
     */
    cotacaoDe(conversaoResponse: ConversaoResponse, 
                conversao: Conversao): string {
    if (conversaoResponse === undefined) {
    return '0';
    }
    return (1 / conversaoResponse.rates[conversao.moedaPara])
    .toFixed(4);
    }
    /**
     * Retorna a data da cotação dado uma response.
     *
     * @param ConversaoResponse conversaoResponse
     * @return string
     */
    dataCotacao(conversaoResponse: ConversaoResponse): string {
      if (conversaoResponse === undefined) {
        return '';
      }
      return conversaoResponse.date;
    }
}
