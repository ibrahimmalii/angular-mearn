import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { TextContentService } from 'src/app/services/text-content.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private textContent : TextContentService) { }

  persons:Person[] = [];
  personsNumber : number = 0;


  ngOnInit(): void {
  }

  addPerson(firstName: string , lastName : string, age : string){

    if(this.textContent.isEmptyText(firstName && lastName && age)){
      let newPerson : Person = new Person(firstName, lastName, age);

      console.log(newPerson)
      this.persons.push(newPerson);
      console.log(this.persons);
      this.personsNumber = this.persons.length;
    }else{
      alert('invalid data');
    }

  }



}
