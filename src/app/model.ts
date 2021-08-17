import { ToDoItem } from "./todoitem";

export class Model{
    name:String;
    items:ToDoItem[]

    constructor(){
        this.name = "Barış"
        this.items = [
            { description:"Kahvaltı",action:true },
            { description:"Spor",action:true },
            { description:"Alışveriş",action:false }
        ]
    }
}