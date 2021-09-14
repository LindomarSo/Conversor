import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appNumero]',
  providers:[{
    provide: NG_VALUE_ACCESSOR, // Controlar o acesso a model
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  onChange: any;
  onTouched: any;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any)
  {
    let valor = $event.target.value;
    let posiDecimal = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if(posiDecimal > 0)
    {
      valor = valor.substr(0, posiDecimal) +'.'+  valor.substr(posiDecimal);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  /**
   * Registra a função a ser chamada para ser atualizada valor na model
   * @param fn 
   */
  registerOnChange(fn: any): void
  {
    this.onChange = fn;
  }

  /**
   * Registra a função a ser chamada par ser atualizada por meio do toque 
   * @param fn 
   */
  registerOnTouched(fn: any): void 
  {
    this.onTouched = fn;
  }

  /**
   * Obtém o valor contido na model
   * @param value 
   */
  writeValue(value: any): void 
  {
    this.el.nativeElement.value = value;
  }
}
