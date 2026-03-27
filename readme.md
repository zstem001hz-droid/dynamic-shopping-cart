# SBA Mod 5: Lab Dynamic Content Creation - Shopping Cart

Building a task manager application with HTML, CSS, and javascript

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
In this lab, I am creating a dynamic shopping cart application to practice and reinforce my DOM manipulation skills. The application will allow users to add, update, and remove items dynamically while keeping track of the total price. This lab focuses on modifying elements, creating and appending new elements, and updating content dynamically using JavaScript.

### Screenshots

  - Placeholder

## My process

Began by creating my local folder structure, and creating the index.html, script.js, and styles.css files by using the specifications in the assignment.
Because the class instruction over the last week or so has included shopping cart specifics, I decided this was a good place to get the ball rolling, and initialized the repository.
After researching the pre-written script.js code, I started by coding the addProduct and the remove product javascript code. Next step was creating the edge case -text and price validation. 

### Built with

- Semantic HTML5 markup
- Custom CSS
- javascript
  - DOM Manipulation
  - Arrays
  - Conditionals

### What I learned

  1. There isn't a need for a HTML "remove" button tag, the remove button is created entirely in javascript and added to the DOM dynamically with document.createElement('button') which then attaches the removeItem function directly to the item.

  2. Consistently validating code with console.log[ging] and working with chrome dev tools - elements console.

  3. li.appendChild(span) and li.appendChild(RemoveButton) assembles the <li> in memory first, then cart.appendChild(li) adds it to the page in one operation, more efficient than adding incomplete elements to the DOM in pieces. 

  4. 
  
  5. 

## AI Collaboration

  - ChatGBT
    - debugging and Q&A

## Author

Zac White

## Acknowledgmentss

  - [developer.mozilla.org](https://developer.mozilla.org/en-US/)
  		-ParseFloat() - parse a string argument and returns a floating number.
  		-Price.toFixed() - decimal points (2)
  - [youtube.com](https://www.youtube.com/@TraversyMedia/search?query=DOM%20crash) Traversy Media
  - [jshint.com](https://jshint.com/) 

## Reflections

	1. How did you dynamically create and append new elements to the DOM?
	
	2. What steps did you take to ensure accurate updates to the total price?
	
	3. How did you handle invalid input for product name or price?
	
	4. What challenges did you face when implementing the remove functionality?
	