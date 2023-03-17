class StaffList{
    constructor(){
        this.staff = [];
    }
    add(name, age){
        if(age < 20){
          throw new Error("Staff must be at least 20 years old");
          return;      
        }
        this.staff.push({name, age});
    }
    remove(name){
        const idx = this.staff.findIndex((item) => item.name === name);
        if(idx > -1){
            this.staff.splice(idx, 1);
            return true;
        }else {
          return false;
        }
    }
    getSize(){
        return this.staff.length;
    }
}