export const questions = [
  {
    id: 1,
    question:
      'What is the output of the following code: console.log([1] == [1])?',
    options: ['true', 'false', 'undefined'],
  },
  {
    id: 2,
    question:
      'Which of the following methods can be used to add an element to the end of an array?',
    options: ['pop()', 'shift()', 'push()'],
  },
  {
    id: 3,
    question:
      "What will be the value of 'x' after the following code executes: var x = [1, 2, 3]; x.length = 2;",
    options: ['[1, 2]', '[1, 2, 3]', '[1, 2, 3, undefined]'],
  },
  {
    id: 4,
    question:
      'Which of the following is a method to remove the last element from an array?',
    options: ['push()', 'pop()', 'slice()'],
  },
  {
    id: 5,
    question:
      "What will be the output of 'console.log([1, 2, 3].map(x => x + 1));'?",
    options: ['[1, 2, 3]', '[1, 2, 3, 1]', '[2, 3, 4]'],
  },
];

export const answers = [1, 2, 0, 1, 2];
