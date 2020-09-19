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

// Functions in Typescript
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
