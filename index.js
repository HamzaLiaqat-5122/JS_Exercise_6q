const users = [
  {
    id: "88f24bea-3825-4237-a0d1-efb6b92d37a4",
    firstName: "Sam",
    lastName: "Hughes",
  },
  {
    id: "2a35032d-e02b-4508-b3b5-6393aff75a53",
    firstName: "Terri",
    lastName: "Bishop",
  },
  {
    id: "7f053852-7440-4e44-838c-ddac24611050",
    firstName: "Jar",
    lastName: "Burke",
  },
  {
    id: "d456e3af-596a-4224-b1dc-dd990a34c9cf",
    firstName: "Julio",
    lastName: "Miller",
  },
  {
    id: "58a1e37b-4b15-47c1-b95b-11fe016f7b64",
    firstName: "Chester",
    lastName: "Flores",
  },
  {
    id: "b4a306cb-8b95-4f85-b9f8-434dbe010985",
    firstName: "Madison",
    lastName: "Marshall",
  },
  {
    id: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c",
    firstName: "Ava",
    lastName: "Pena",
  },
  {
    id: "7f0ce45a-bdca-4067-968b-d908e79276ce",
    firstName: "Gabriella",
    lastName: "Steward",
  },
  {
    id: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6",
    firstName: "Charles",
    lastName: "Campbell",
  },
  {
    id: "e789565f-fa5a-4d5e-8f6c-dd126cf995be",
    firstName: "Madison",
    lastName: "Lambert",
  },
];

const comments = [
  { userId: "88f24bea-3825-4237-a0d1-efb6b92d37a4", text: "Great Job!" },
  {
    userId: "7f053852-7440-4e44-838c-ddac24611050",
    text: "Well done, I think I understand now!",
  },
  {
    userId: "e789565f-fa5a-4d5e-8f6c-dd126cf995be",
    text: "How do you do that? 😲",
  },
  { userId: "7f053852-7440-4e44-838c-ddac24611050", text: "OK great thanks" },
  { userId: "b4a306cb-8b95-4f85-b9f8-434dbe010985", text: "Cool, thanks!" },
  { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Nice one 😉" },
  { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Got it." },
  { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Thanks!" },
  { userId: "58a1e37b-4b15-47c1-b95b-11fe016f7b64", text: "Cool 😀" },
  { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Great stuff!" },
];

// Exercises

// 1) What is Madison Marshall's user id?
const madisonUserID = users.find(user => user.firstName === 'Madison' && user.lastName === 'Marshall')

console.log(madisonUserID);

// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)
const firstComment = users.find(user => user.id === comments[0].userId)

console.log(firstComment);

// 3) Which user commented 'OK great thanks'?
const commentOk = users.find(user => user.id === comments.find(comment => comment.text === 'OK great thanks').userId)

console.log(commentOk);

// 4) Add the user's first and last name to each comment in the comments array
const commentuserName = comments.map(comment => {
    const{firstName, lastName} = users.find(user => user.id === comment.userId);
    return {...comment, firstName, lastName};
})
console.log(commentuserName);

// 5) Get a list of users who haven't commented
const noCommentUsers = users.filter(user => !comments.find(comment => comment.userId === user.id))

console.log(noCommentUsers);

/* JavaScript DOM Exercises 01

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
  .split(' ')
  .map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word)
  .join(' ');
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/
const link = document.createElement('a');
link.href = 'https://forcemipsum.com/'
link.innerText = 'Text generated from Forcem Ipsum';
document.body.appendChild(link);
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
paragraph.innerHTML = paragraph.innerHTML
   .split(/\.[^\.|<]/)
   .join('.</p><p>') + '</p>';


/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const wordCount = paragraph.innerText.split(' ').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElem, paragraph);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
Array.from(document.querySelectorAll('p'))
  .forEach(p => {
    p.innerHTML = p.innerHTML
    .replace(/\?/g, '🤔')
    .replace(/\!/g, '😲');
  })
