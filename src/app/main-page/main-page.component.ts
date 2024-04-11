import { style } from '@angular/animations';
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'   //Librería de Hash MD5
import { NFCData } from './nfc-data.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  
  valueNFC: string = ''
  codeHashed = ''
  logText: string = ''
  valueQuery: string = ''
  valueHashed: string = ''
  resetValue = ''
  dataArray: NFCData[] = []
  


//Botón Convertir 
  onTransform(){    
    const codeNFC = document.getElementById('codigo_nfc') as HTMLInputElement
    this.valueNFC = codeNFC.value
    this.codeHashed = CryptoJS.MD5(this.valueNFC).toString()
    
    this.addToLog(this.codeHashed)
    this.dataArray.push({ nfcCode: this.valueNFC, hash: this.codeHashed })
    
  }

  addToLog(text: string) {
    this.logText += `NFC:  ${this.valueNFC}   -   Hash:   ${this.codeHashed}\n`
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

}
