# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Saori Hunziker**

Time spent: **15** hours spent in total

Link to project: (insert your link here, should start with https://battle-possible-suggestion.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://github.com/Kijimu7/Memory-Game/blob/main/memorygame1.gif)
![](https://github.com/Kijimu7/Memory-Game/blob/main/memorygame.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

* StackOverFlow
* W3c Markup Validation
* W3Schools
* Glitch Support Center
* CSS colors
* Medium

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I encountered the error that the guess function did not respond to the console log. I have console.log set up in the guess function but did not get output from Inspector under the console. I knew that the button works because it outputs sound and lit colors when I clicked the buttons. Also, it outputs a different message with other function’s console.log to the inspector under Console. So, I assumed there is an error with the attribute on HTML button tags or guess function. I reviewed the JavaScript code and the HTML button tags first to see if I have some spelling miss or wrong implementation, but I couldn't find any errors. I used JavaScript validation to know if I did something wrong with the code next, but I did not find the error. Next, I found the typo when I used the W3C Markup Validation. I got an error warning that says, “Attribute onlick not allowed on element button at this point”. So, I did go StackOverflow, and then I found out the I might have typos. I rechecked my HTML button tags, and I found out I typed onlick instead of onclick. The function worked after I fixed the bug. It output the console.log message and logic also worked.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

What is the best validation website or tool for HTML, CSS, and Javascript? I would love to learn how to optimize the code and analyze it. Forexample, I have 4 buttons for the different colors so I need to have 4 different ids. I just wonder if I want to border-radius in each button is it better to add the attribute in each button? Or Is it better to add the attribute all together? I am also curious how I can make sure my website works properly. How can I test with multiple browsers?  I know there is a lot of ways to do web development. What are the most common tools for website development?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I have more time to work, I would like to implement scores. A user gets a score after winning the game. A user will get 10 points each time won and will lose the score of 10 if the user loses. Every user has 30 scores at first. Also, I would like to add a ranking first, second and third winner to provide users to interact with other users and compete. This will provide a competitive user experience and have users play the game more



## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
