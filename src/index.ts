let person;
//eslint diable nxt line
person = "Rory";


const buildPerson = (person: string) => {
    return `your person is ${person}`;
};


console.log(buildPerson(person));

const myFunc = (num: number): number => {
    return num * num;
  };
  
export default myFunc;