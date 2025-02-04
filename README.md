# TypeScript Tuple Type Incompatibility with Array Type

This repository demonstrates a common yet subtle issue in TypeScript related to tuple types and array types.  While tuples and arrays might seem similar, TypeScript treats them as distinct types, leading to potential type errors when using them interchangeably.

The `bug.ts` file showcases the problem:  a function designed to handle `any[]` (an array of any type) fails to accept a tuple type as an argument.  This happens despite the tuple's elements matching the expected types within the array.

The `bugSolution.ts` file provides a solution by either using generics for flexible type handling or by explicitly accepting the tuple type as an argument.