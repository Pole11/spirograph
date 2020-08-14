# SPIROGRAPH

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Documentation](#documentation)
* [Explanation](#explanation)
* [Images](#images)


## General info
This is an easy to use (I hope) tool to draw spirographs. The code in sketch.js might seem long and complicated, but only because I added a lot of sliders, texts, and buttons, the concept is pretty simple.

The folder spirograph-editor is the one that contains the tool to draw the spirograph.
The folder spirograph-visualization is the one that contains the program to understand how a spirograph is drawn.

## Technologies
For the animation I used:
* <a href="https://p5js.org/">p5.js library</a>

## Setup
To run this project, you can: 
* click on this <a href="https://editor.p5js.org/Pole/full/QdQuBgD9K">link</a> 
* open it with the <a href="https://editor.p5js.org/Pole/sketches/QdQuBgD9K">web editor</a> of p5.js so that you can also modify the code
* use a live server (if you use VSCode you can use this <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">extension</a>, or you can install <a href="http://brackets.io/">brackets</a> which is a text editor with the live server functionality built in)
* use another method, there are a lot...

## Documentation
To draw a spirograph, just play around with the slider, change the shape and the colors and then press the button with the 💾 icon ('save image' button) to save the image. If you messed up and you want to clean the canvas press the button with the 🗑 icon ('delete' button). The ⬆🖊⬆ button is the 'penup' button, if you press it, the program will stop drawing, maybe if you want to save an uncompleted spirograph you can press this button. The ⬇🖊⬇ button is the 'pendown' button, it continues drawing if you pressed the 'penup' button. If you forget what, button does what press the ℹ button, it's the info button and will show you for a few seconds what the buttons do.

## Explanation
If you don't understand how a spirograph works, you can see this <a href="https://editor.p5js.org/Pole/full/5Ag12j_je">link</a>, it will show you another program that I've done that shows all the different values changing in real time and how they do affect the final drawing, it's not perfect, but it gives the general idea.

The values p, r and R refers to the values you can find on this image of <a href="https://en.wikipedia.org/wiki/Spirograph">Wikipedia</a>
![alt text](https://upload.wikimedia.org/wikipedia/commons/3/39/Resonance_Cascade.svg)

## Images 
![image](/images/screenshoot2.png)
![image](/images/spirograph1.jpg)
![image](/images/spirograph2.jpg)
![image](/images/spirograph3.jpg)
![image](/images/spirograph5.jpg)
