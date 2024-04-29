import { Employee } from "../models/employee.js";

const names = ["Kunnal","Ghanshyam","Ram","Krishna","Shiv","Ganesh","Gopal"];
const salary = [100000,110000,100500,101000,120000,130000,125000];
const designation = ["Junior developer","Sr. developer","Account manager","Marketing Head","CEO","HR","Operational Manager"];
let condition;
//Generate random data in employees collection
export class randomDataGenerator{
randomData(){
    
        let sal = this.randomval(7);
        let nam = this.randomval(7);
        let post = this.randomval(7);
        let check = this.randomval(2);
        const condition = check === 1;
      return{
           name: names[nam],
           salary: salary[sal],
           designation:designation[post],
           isManager:condition
        }
    
}

randomval(range){
 return Math.floor(Math.random()*range);
}

createEmployee(){
    for (let i = 0; i < 10; i++) {
    const newEmployee = new Employee(this.randomData());
    newEmployee.save();
    }
}

clearCollection(){
    db.employees.deleteMany({})
}


}
