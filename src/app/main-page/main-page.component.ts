import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'   //Librería de Hash MD5
import { NFCData } from './nfc-data.interface';
import { animate, style, transition, trigger } from '@angular/animations'

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({opacity:1}))
])

const fadeIn = trigger('fadeIn', [enterTransition])

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  animations: [fadeIn]
})
export class MainPageComponent {
  
  valueNFC: string = ''
  codeHashed = ''
  valueQuery: string = ''
  valueHashed: string = ''
  resetValue = ''
  dataArray: NFCData[] = []
  isShown = false


//Botón Convertir 
  onTransform(){    
    const codeNFC = document.getElementById('codigo_nfc') as HTMLInputElement
    this.valueNFC = codeNFC.value
    this.codeHashed = CryptoJS.MD5(this.valueNFC).toString()
    this.dataArray.push({ nfcCode: this.valueNFC, hash: this.codeHashed })
  }

  //Barra de búsqueda 
  searchQuery(){
    const codeQuery = document.getElementById('code_query') as HTMLInputElement
    this.valueQuery = codeQuery.value
    this.valueHashed = CryptoJS.MD5(this.valueQuery).toString()
  }

  //Botón Limpiar 
  onClear(){
    this.codeHashed = ''
    this.resetValue = ''
  }

  //Animacion
  fadeIn(): void{
    this.isShown = true
  }
}
