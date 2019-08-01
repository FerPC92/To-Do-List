import { Component, OnInit } from '@angular/core';
//import { runInThisContext } from 'vm';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  listado :string[] = [];

 flag :boolean = false

  addElements(){
    if((<HTMLInputElement>document.querySelectorAll('#mainInput')[0]).value !== ""){

      let nuevoElement:string = (<HTMLInputElement>document.querySelectorAll('#mainInput')[0]).value;
      this.listado.push(nuevoElement);
      //console.log(this.listado);
      (<HTMLInputElement>document.querySelectorAll('#mainInput')[0]).value = ""; 
      
    } 
    
      
    
    

  }

  removeElement(i:number): void{
    let deleteButton = document.querySelectorAll('.trashIcon');
    this.listado.splice(i,1);
  }

  checked(i){
    console.log(this.flag)
    this.flag = !this.flag;
    if(this.flag == true){
    (<HTMLElement>document.querySelectorAll('.task-list')[i]).style.textDecoration = "line-through";
    (<HTMLElement>document.querySelectorAll('.task-list img')[i*2]).setAttribute('src','assets/checked.png')
  } else {
      (<HTMLElement>document.querySelectorAll('.task-list')[i]).style.textDecoration = 'none';
      (<HTMLElement>document.querySelectorAll('.task-list img')[i*2]).setAttribute('src','assets/circle.png')
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
