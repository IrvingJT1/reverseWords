import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reverse';  
  
  reverseString = (inputString: string):string=> {
    
    //Divide el string de entrada en un array que contiene las diferentes palabras separadas por espacio
    //por ej. "Swift Coding Challenges" queda como ['Swift', 'Coding', 'Challenges']
    
    let stringIntoArray = inputString.split(' ');
    let outputString = "";
    

    //Cada palabra del array de palabras es:
    //Separada en cadena de caracteres
    //Se aplica la función reverse para revertir su orden
    //Se hace el join en cada una con espacio vacío para dejarla sin alguna ',' que pueda aparecer como efecto secundario

    let modifyingStrings = stringIntoArray.map((item) => {
      return item.split('').reverse().join('')
    })

    //Al array modificado en este punto se le aplica un join con espacios para respetar
    //los espacios de la cadena original y juntar las palabras reversas en una frase

    outputString = modifyingStrings.join(' ');

    return outputString;

  }

}
