const commandInput = document.querySelector('.command-input');
const terminalElement = document.querySelector('.terminal');
let currentPrompt = document.querySelector('.prompt');

let directory = '';

commandInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {

    const inputs = commandInput.value.split(" ");
    const command = inputs[0];
    const value = inputs[1];
    let output = '';

    switch (command) {
        case 'help':
            // Create a new div for the content
            var helpDiv = document.createElement('div');
            helpDiv.classList.add('help-div');

            // Create paragraphs for the statements
            var statement1 = document.createElement('p');
            statement1.textContent = "These are the commands necessary to navigate the website.";
            helpDiv.appendChild(statement1);

            var statement2 = document.createElement('p');
            statement2.textContent = "  -- help: this command will let you know of the commands necessary to navigate the website.";
            helpDiv.appendChild(statement2);

            var statement3 = document.createElement('p');
            statement3.textContent = "  -- ls: this command will show you the files and folders in the current directory.";
            helpDiv.appendChild(statement3);

            var statement4 = document.createElement('p');
            statement4.textContent = "  -- clear: this command will clear the terminal screen.";
            helpDiv.appendChild(statement4);

            var statement5 = document.createElement('p');
            statement5.textContent = "  -- cd: this command will allow you to go to a different directory. Use 'cd [foldername]' to go to that folder. Use 'cd ../' to go back the the parent directory.";
            helpDiv.appendChild(statement5);

            var statement5 = document.createElement('p');
            statement5.textContent = "  -- cat: this command will allow you to display file contents. Use 'cat [filename]' to see the contents of that file.";
            helpDiv.appendChild(statement5);

            // Insert the div before the command-line div
            terminalElement.insertBefore(helpDiv, terminalElement.querySelector('.command-line'));
            break;

        case 'ls':
            switch (directory) {
                case ' Projects':
                    output = 'Intro.txt 2D-Design.txt Fabrication.txt Programming.txt 3D-Design.txt Inputs.txt Outputs.txt CNC.txt Networking.txt MachineBuilding.txt FinalProject.txt';
                    break;
                default:
                    output = 'Projects About.txt FinalProject.txt';
            }
             // Create a new paragraph element for the output
            var outputParagraph = document.createElement('p');
            outputParagraph.textContent = output;

            // Insert the output paragraph before the command-line div
            terminalElement.insertBefore(outputParagraph, terminalElement.querySelector('.command-line'));

            // Update the current prompt with the command
            currentPrompt.textContent += ` ${command}`;
            break;
        case 'cd':
            switch (value) {
                case 'Projects':
                    // Update the current prompt and directory with the command
                    currentPrompt.textContent += ` ${command} ${value}`;
                    directory = ` ${value}`
                    break;
                case '../':
                    // Update the current prompt and directory with the command
                    currentPrompt.textContent += ` ${command} ${value}`;
                    directory = ``
                    break;
                case '~':
                    // Update the current prompt and directory with the command
                    currentPrompt.textContent += ` ${command} ${value}`;
                    directory = ``
                    break;
                default:
                    output = 'Not a proper directory.'
                    // Create a new paragraph element for the output
                    const outputParagraph = document.createElement('p');
                    outputParagraph.textContent = output;

                    // Insert the output paragraph before the command-line div
                    terminalElement.insertBefore(outputParagraph, terminalElement.querySelector('.command-line'));

                    // Update the current prompt with the command
                    currentPrompt.textContent += ` ${command} ${value}`;

            }
            break;
        case 'cat':
            switch (directory) {
                case ' Projects':
                    switch (value) {
                        case 'Intro.txt':
                            // Create a new div for the content
                            var finalDiv = document.createElement('div');
                            finalDiv.classList.add('finalproject-div');

                            // Create paragraphs for the statements
                            var week1 = document.createElement('p');
                            week1.textContent = "Week 1: Final Project Proposal";
                            finalDiv.appendChild(week1);

                            var ideas = document.createElement('p');
                            ideas.textContent = "Here are at most 3 ideas for my final project";
                            finalDiv.appendChild(ideas);

                            var idea1 = document.createElement('p');
                            idea1.textContent = "Idea 1 : Automatic Door Opener";
                            finalDiv.appendChild(idea1);

                            var idea1description = document.createElement('p');
                            idea1description.textContent = "An automatic door opener that will unlock my dorm door through my phone and my Harvard ID. It will probably use some sort of motor to pull the handle of my dorm door.";
                            finalDiv.appendChild(idea1description);

                            var idea2 = document.createElement('p');
                            idea2.textContent = "Idea 2 : Noise Cancellation Speaker";
                            finalDiv.appendChild(idea2);

                            var idea2description = document.createElement('p');
                            idea2description.textContent = "A speaker with a microphone attached that would listen to the room and invert the soundwaves it picks up from the microphone to create an area of noise cancellation.";
                            finalDiv.appendChild(idea2description);

                            // Insert the div before the command-line div
                            terminalElement.insertBefore(finalDiv, terminalElement.querySelector('.command-line'));
                            
                            break;
                        case '2D-Design.txt':
                            // Create a new div for the content
                            var twoddesignDiv = document.createElement('div');
                            twoddesignDiv.classList.add('twoddesign-div');

                            // Create paragraphs for the statements
                            var firstdraft = document.createElement('p');
                            firstdraft.textContent = "For the first draft of my box, I decided to follow along with the example video on Panopto for how to design the 2D finger joint box. I had similar dimensions as the example video, but I chose to use a 4 finger joint and I added a lid to keep the things stored in the box safe.";
                            twoddesignDiv.appendChild(firstdraft);

                            // Create an image element
                            const image = document.createElement('img');
                            image.classList.add('firstdraft-img');
                            image.src = 'Fingerbox-Sketch.png';
                            image.alt = 'First draft sketch of my box';
                            twoddesignDiv.appendChild(image);

                            // Insert the div before the command-line div
                            terminalElement.insertBefore(twoddesignDiv, terminalElement.querySelector('.command-line'));

                            break;
                        default:
                            output = 'Nothing in these files yet.'

                            // Create a new paragraph element for the output
                            var outputParagraph = document.createElement('p');
                            outputParagraph.textContent = output;

                            // Insert the output paragraph before the command-line div
                            terminalElement.insertBefore(outputParagraph, terminalElement.querySelector('.command-line'));
                    }
                    break;
                default:
                    switch (value) {
                        case 'About.txt':
                            // Create a new div for the content
                            const aboutDiv = document.createElement('div');
                            aboutDiv.classList.add('about-div');

                            // Create an image element
                            const image = document.createElement('img');
                            image.classList.add('about-img');
                            image.src = 'IMG_2714.jpg';
                            image.alt = 'Pedro Manon';
                            aboutDiv.appendChild(image);

                            // Create a paragraph for the statement
                            const statement = document.createElement('p');
                            statement.classList.add('about-p');
                            statement.textContent = "Hey everyone, my name is Pedro Manon. I'm currently a Senior in Mather studying CS, but if you're reading this in the far future thats probably no longer the case. When I'm not CS'ing around I'm probably doing something comedy related or watching Youtube.";
                            aboutDiv.appendChild(statement);

                            // Insert the div before the command-line div
                            terminalElement.insertBefore(aboutDiv, terminalElement.querySelector('.command-line'));

                            break;
                        case 'FinalProject.txt':
                            // Create a new div for the content
                            var finalDiv = document.createElement('div');
                            finalDiv.classList.add('finalproject-div');

                            // Create a paragraph for the statement
                            var projecttitle = document.createElement('p');
                            projecttitle.textContent = "Final Project: Automatic Door Opener";
                            finalDiv.appendChild(projecttitle);

                            var projectdescription = document.createElement('p');
                            projectdescription.textContent = "Create an automatic door opener that will unlock my dorm door through my phone and my Harvard ID. It will probably use some sort of motor to pull the handle of my dorm door.";
                            finalDiv.appendChild(projectdescription);

                            // Insert the div before the command-line div
                            terminalElement.insertBefore(finalDiv, terminalElement.querySelector('.command-line'));
                            
                            break;
                        default:
                            output = 'This is not a recognized file.'
                            // Create a new paragraph element for the output
                            var outputParagraph = document.createElement('p');
                            outputParagraph.textContent = output;

                            // Insert the output paragraph before the command-line div
                            terminalElement.insertBefore(outputParagraph, terminalElement.querySelector('.command-line'));
                    }
            }

            // Update the current prompt with the command
            currentPrompt.textContent += ` ${command} ${value}`;
            break;
        case 'clear':
            // Remove all output paragraphs from the terminal
            terminalElement.querySelectorAll('p, .about-div').forEach(element => element.remove());

            // Update the current prompt with the command
            currentPrompt.textContent += ` ${command}`;
            break;
        default:
            output = "Command not found. Try the 'help' command.";
            // Create a new paragraph element for the output
            outputParagraph = document.createElement('p');
            outputParagraph.textContent = output;

            // Insert the output paragraph before the command-line div
            terminalElement.insertBefore(outputParagraph, terminalElement.querySelector('.command-line'));

            // Update the current prompt with the command
            currentPrompt.textContent += ` ${command}`;
    }

    // Create a new prompt for the next command
    const newPrompt = document.createElement('p');
    newPrompt.classList.add('newp');
    newPrompt.textContent = `user@terminal${directory}:~`;

    // Insert the new prompt after the output paragraph, but before the command-line div
    terminalElement.insertBefore(newPrompt, terminalElement.querySelector('.command-line'));

    // Update the current prompt for the next command
    currentPrompt = newPrompt;

    commandInput.value = '';
  }
});