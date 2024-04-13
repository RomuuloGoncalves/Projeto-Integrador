import { Injectable } from '@angular/core';
import { MaskitoOptions, MaskitoElementPredicate } from '@maskito/core';
@Injectable({
  providedIn: 'root'
})
export class MaskService {

  readonly mascaraTelefone: MaskitoOptions = {
    mask: [
      '+', '5', '5', ' ',
      ...Array(2).fill(/\d/),
      ' ',
      ...Array(5).fill(/\d/),
      '-',
      ...Array(4).fill(/\d/)
    ]
  };

  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();

}


