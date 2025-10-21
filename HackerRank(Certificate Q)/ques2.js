class StaffList{
    constructor(){
        this.staffs = new Map();
    }

    add(name, age){
         if(age <= 20){
           throw new Error("Staff member age must be greater than 20");
         } 

         if(!this.staffs.has(name)){
            this.staffs.set(name, age);
         }
    }

    remove(name){
        if(this.staffs.has(name)){
            this.staffs.delete(name);
        }
    }

  getSize(){
    return this.staffs.size;
  }
}

let staff = new StaffList();
staff.add("rohan", 34);
staff.add("rihan",21);
staff.add("rohan", 26);
console.log(staff.getSize());
console.log(staff.remove("rohan"));
console.log(staff.getSize());
console.log(staff.remove("Nike"));
staff.add("niku", 24);
console.log(staff.getSize());

