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
const sayWord = (word: string): string => {
  console.log(word);
  return word;
};

sayWord('hiyo');
