import { style } from '@angular/animations';
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'



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
  



  onTransform(){
    const codeNFC = document.getElementById('codigo_nfc') as HTMLInputElement
    this.valueNFC = codeNFC.value
    this.codeHashed = CryptoJS.MD5(this.valueNFC).toString()
    
    this.addToLog(this.codeHashed)

  }

  addToLog(text: string) {
    this.logText += `NFC:  ${this.valueNFC}   -   Hash:   ${this.codeHashed}\n`
  }

  searchQuery(){
    
      const codeQuery = document.getElementById('code_query') as HTMLInputElement
      this.valueQuery = codeQuery.value
      this.valueHashed = CryptoJS.MD5(this.valueQuery).toString()
    
  }

  onClear(){
    this.codeHashed = ''
    this.resetValue = ''
  }

}
