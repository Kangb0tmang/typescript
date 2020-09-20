import { Person } from './Interfaces';

const isOpen: boolean = false;
const myName: string = 'Jon';
const myAge: number = 28;
const numList: number[] = [0, 1, 2, 3];

// Tuple
const person: [string, number, boolean] = ['Jon', 28, false];

// Enum
enum Job {
  Dev,
  UI,
  UX,
  Producer,
}
const job: Job = Job.Dev;

// Any
const phone: any = 'Google Pixel 2 XL';
const android: any = 11;

// Functions in TypeScript
const saySomething = (something: string): string => {
  console.log(something);
  return something;
};
saySomething('Hiyo');

// Optional Params
const sayWord = (word?: string): string => {
  console.log(word || 'Hello');
  return word || 'Hello';
};
sayWord();

// Default Params
const speak = (word = 'Greetings', ...otherThings: string[]): string => {
  console.log(otherThings);
  return word;
};
speak('Michael', 'Mike');

// Implicit Types in TypeScript
let newName = 'Ichigo';
newName = 'Rukia';

// Gets type from initial declaration
let newNameTwo = newName;
// newNameTwo = false;

// Union Types with |
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px`;
};
makeMargin(10);
makeMargin('10');

// Null Types
let dog: string | null = 'Bolt';
dog = null;
dog = 'Peanut';
dog = undefined;
dog = 'Kevin';

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};
sayName({ name: 'Nathan Drake', age: 30 });

// This works as well
// const sayName = ({ name, age }: Person): string => {
//   console.log(name);
//   return { name, age };
// };
// sayName({ name: 'Nathan Drake', age: 30 });

// Enums
// Numeric Enum
enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz, // 2
}

const createContent = (contentType: Type) => {};
createContent(Type.Quiz);
console.log('Type.Quiz', Type.Quiz);

// String Enum
enum SomeType {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST',
  Quiz = 'QUIZ',
}

const createMoreContent = (contentType: SomeType) => {};
createMoreContent(SomeType.Quiz);
console.log('SomeType.Quiz', SomeType.Quiz);

// Classes
class Team {
  teamName: string;
  // public teamName: string; same as above
  // private teamName: string; prevents usage outside of class
  // readonly teamName: string; prevents from being changed

  constructor(teamName) {
    this.teamName = teamName;
  }

  score(): string {
    console.log(this.teamName);
    return 'AND 1!';
  }
}

const lakers = new Team('Los Angeles Lakers');
lakers.score();
lakers.teamName;

// Generics
const ouputInput = <T>(arg: T): T => {
  return arg;
};
ouputInput('good day to you');
ouputInput(99);

// Duck Typing
class Dancer implements Person {
  name: string;
  age: number;
}

let ElNino: Person = new Dancer();
const somebody = {
  name: 'Someone',
  years: 33,
};
ElNino = somebody;
