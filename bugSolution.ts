//Solution 1: Using Generics
function printArrayGeneric<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//Solution 2: Explicitly accepting the tuple type
function printTuple(arr: [number, string]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myTuple: [number, string] = [1, 'a'];
printArrayGeneric(myTuple); // Works fine now
printTuple(myTuple); // Works fine now

const myArray: number[] = [1, 2, 3, 4, 5];
printArrayGeneric(myArray); // This works fine

const myStringArray: string[] = ['a', 'b', 'c'];
printArrayGeneric(myStringArray); // This also works fine

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b'];
printArrayGeneric(myMixedArray); // This works fine

const myAnyArray: any[] = [1, 'a', true, {}, []];
printArrayGeneric(myAnyArray); // This works fine