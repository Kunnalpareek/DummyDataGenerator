import { randomDataGenerator } from "../controller/EmployeeController.js";
import { Employee } from "../models/employee.js";


const creator = new randomDataGenerator();
export async function checkCollection(){
try {
    const count = await Employee.countDocuments();
    if (count === 0) {
        // Collection is empty, populate it with dummy data using collection object "creator"
        try {
            await creator.createEmployee();
            console.log("Document saved");
            } catch (error) {
                console.log(error);  
            }
    }
    else{
        // Collection is not empty, delete all data using collection model "Employee"

        try {
            await Employee.deleteMany({})
            console.log("Ducuments deleted");
        } catch (error) {
            console.log(error);
        } 
    }
} catch (err) {
    // Handle any errors
    console.error(err);
}
}