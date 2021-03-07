# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Saori Hunziker**

Time spent: **5** hours spent in total

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
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[StackOverFlow, W3c Markup Validation, W3Schools, Glitch Support Center]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I encountered the error that the guess function did not respond to the console log. I have console.log set up in the guess function but did not get output from Inspector under the console. I knew that the button works because it outputs sound and lit colors when I clicked the buttons. Also, it outputs a different message with other function’s console.log to the inspector under Console. So, I assumed there is an error with the attribute on HTML button tags or guess function. I reviewed the JavaScript code and the HTML button tags first to see if I have some spelling miss or wrong implementation, but I couldn't find any errors. I used JavaScript validation to know if I did something wrong with the code next, but I did not find the error. Next, I found the typo when I used the W3C Markup Validation. I got an error warning that says, “Attribute onlick not allowed on element button at this point”. So, I did go StackOverflow, and then I found out the I might have typos. I rechecked my HTML button tags, and I found out I typed onlick instead of onclick. The function worked after I fixed the bug. It output the console.log message and logic also worked.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



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
