# 100 days of code

## Day 1

### Making a repo

First make a repo on github and then clone it. This saves you from extra setup.

### Cloning a repo

```sh
git clone git@github.com:carline824/100-days-of-code.git
```

### Making a commit

Checking where we are at (which files have changed) (aka what we are about to commit)

```sh
git status
```

Adding ("staging") all files in the folder (`.` = this folder)

```sh
git add .
```

Make a new commit with the name "make navbar cool"

```sh
git commit -m "make navbar cool"
```

```sh
git push
```

## Day 2

### Starting Vite

So I can actually see what I'm working on, write this in terminal and Vite will open.

```sh
pnpx vite
```

### Google Fonts

Choose a cute font on Google Fonts and get embed code. Copy and paste code into css file and have happy little fonts.

```sh
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bitcount:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

I copied this into my html head element.

```sh

.bitcount {
  font-family: "Bitcount", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "CRSV" 0.5,
    "ELSH" 0,
    "ELXP" 0;
}
```

I put this code in my css file and I got pretty font! :).

## Day 3

### Creating a react project

```sh
pnpm create vite
```

### Starting the dev server

```sh
pnpm dev
```

I set up a basic react app using `pnpm create vite`. To start dev server I used `pnpm dev`. It gave me a button clicker and two rotating logos of Vite and React. I removed the code and added my own button clicker which, with every click, shows a photo of a cat.

## Day 4

### Making an rpg game

I made an rpg game with javascript, html and css today. My first time using `document.querySelector()`.

## Day 5

### Building a habit tracker

Today I made a habit tracker using javascript, html and css. It is simple but was good practice for familiarizing myself with `document.querySelector()`.

## Day 6

### Cookie Clicker

Another project written with html and javascript. This time I used inline logic and styles to see how that would work. Happy with the result, I think it's so cute!

## Day 7

### My first Vite project

Made hangman using react and typescript! So handy how I can reuse objects. Happy with my progress and so many new things to learn about.

I also made my home page for the 100 days of code today. This will update as the days go by. I used I frames to give little previews of my projects.

## Day 8

### Using react router dom

Today I made a most popular movie website with react. I used a public api to get all the information. This was confusing to me so I had to follow a tutorial...
<br/>I will have to focus more on styling since it is not a hundred percent perfect but still very happy with how it turned out.

## Day 9

### Blogue (blog)

Had so much fun making Blogue. I spent a lot of time on styling, tried to give it an outdated vibe, like this was an actual blog ten years ago. Also one of the first times I used Tanstack Router. On top of that I added some 'ads' linked to my portfolio website as self promo.

## Day 10

### Login Page

Today I made a simple login page, since I'll probably make many more in my future. I've been using tailwindcss with react and finally feel like I'm getting the hang of it.

## Day 11

### Twitter Clone

Tried something new today, this is my first project with a backend! So complicated though, I used Fastify for my webserver and Postman to send http requests. I will need to practice more and probably study both of these more in depth. But still happy with my progress.

## Day 12

### Tailwindcss Explainer

I felt so overwhelmed when I studied Tailwindcss docs that I decided to make myself an explainer. Not as much in depth as the original docs but explaining the concepts I seem to use most often. I used TanstackRouter again today, I feel like I'm getting the hang of routes.

## Day 13

### Space X Missions

Today I decided to make another project with a public api. I used tanstack/react-query.
