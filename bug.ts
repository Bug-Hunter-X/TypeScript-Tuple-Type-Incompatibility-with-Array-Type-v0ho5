function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); // This works fine

const myStringArray: string[] = ['a', 'b', 'c'];
printArray(myStringArray); // This also works fine

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b'];
printArray(myMixedArray); // This works fine

const myAnyArray: any[] = [1, 'a', true, {}, []];
printArray(myAnyArray); // This works fine

// However, the following will cause a compile-time error:
const myTuple: [number, string] = [1, 'a'];
printArray(myTuple); // Error: Argument of type '[number, string]' is not assignable to parameter of type 'any[]'