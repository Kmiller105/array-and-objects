const schedule =["wake up","eat","watch tv","sleep"];
console.log(schedule[0]);
console.log(schedule[1]);
console.log(schedule[2]);
console.log(schedule[3]);
schedule[1]="brush teeth";
console.log(schedule[1]);
console.log(schedule,length);
const user ={
    name:"Mary",
    age:29,
    hobby:"sewing",
    married:false,
    purchase:["car","house","furniture","laptop"],
sayName:function(){
    console.log("my name is"+this.name);
}
 
};
user.sayName();
function saymyage(){
    console.log("My age is"+user.age);

}
saymyage();




