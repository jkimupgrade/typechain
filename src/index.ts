const name = "Jim",
  age = 29,
  gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

sayHi(name, age, gender);

export {};