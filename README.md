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

