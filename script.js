const commandInput = document.querySelector('.command-input');
const terminalElement = document.querySelector('.terminal');
let currentPrompt = document.querySelector('.prompt');

let directory = '';
let commandHistory = [];  // Array to store command history
let historyIndex = -1;    // Index to track the command being accessed from the history

commandInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {

    const inputs = commandInput.value.split(" ");
    const command = inputs[0];
    const value = inputs[1];
    let output = '';

    // Store the command in the history array and reset historyIndex
    if (commandInput.value.trim() !== '') {
        commandHistory.push(commandInput.value);
        historyIndex = -1;  // Reset index when a new command is entered
    }

    // Create a new div to store the old command line
    const oldCommandDiv = document.createElement('div');
    oldCommandDiv.classList.add('old-command-line');

    // Append the old prompt and the inputted command
    const oldPrompt = document.createElement('p');
    oldPrompt.classList.add('prompt');
    oldPrompt.textContent = `user@terminal${directory}:~ ${commandInput.value}`;
    oldCommandDiv.appendChild(oldPrompt);

    terminalElement.insertBefore(oldCommandDiv, terminalElement.querySelector('.command-line'));

    // Clear the input field for the new command
    commandInput.value = '';

    switch (command) {
        case 'help':
            // Generate help output and append it to the terminal
            output = 
            "These are the commands necessary to navigate the website:\n" +
            "-- help: this command will let you know of the commands necessary to navigate the website.\n" +
            "-- ls: this command will show you the files and folders in the current directory.\n" +
            "-- clear: this command will clear the terminal screen.\n" +
            "-- cd: this command will allow you to go to a different directory. Use 'cd [foldername]' to go to that folder. Use 'cd ../' to go back to the parent directory.\n" +
            "-- cat: this command will allow you to display file contents. Use 'cat [filename]' to see the contents of that file.";
            break;

        case 'ls':
            // Simulate the 'ls' command based on the directory
            switch (directory) {
                case '/Projects':
                output = 'Intro.txt 2D-Design.txt Fabrication.txt Programming.txt 3D-Design.txt Inputs.txt Outputs.txt CNC.txt Networking.txt MachineBuilding.txt FinalProject.txt';
                break;
                default:
                output = 'Projects About.txt FinalProject.txt';
            }
            break;
        case 'cd':
            // Simulate the 'cd' command
            if (value === 'Projects') {
                directory = '/Projects';
            } else if (value === '../' || value === '~') {
                directory = '';
            } else {
                output = 'Not a proper directory.';
            }
            break;
        case 'cat':
            switch (directory) {
                case '/Projects':
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

                            twoddesignDiv.appendChild(document.createElement('br'));

                            // Create an image element
                            const image = document.createElement('img');
                            image.classList.add('firstdraft-img');
                            image.src = 'Week2/Fingerbox-Sketch.png';
                            image.alt = 'First draft sketch of my box';
                            twoddesignDiv.appendChild(image);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            var firstprint = document.createElement('p');
                            firstprint.textContent = "Using initial demensions of 100mm length, 40 mm width, 40 mm height, and 4.2mm thickness, I lasercut my box to check if the box would fit together.";
                            twoddesignDiv.appendChild(firstprint);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            // Create a video element
                            const video = document.createElement('video');
                            video.classList.add('firstdraft-video');
                            video.src = 'Week2/Firstdraft.MOV';
                            video.type = 'video/quicktime';
                            video.controls = true;
                            video.alt = 'First draft lasercut of my box';
                            twoddesignDiv.appendChild(video);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            const image2 = document.createElement('img');
                            image2.classList.add('firstdraft-video');
                            image2.src = 'Week2/Fingerjointfirstprint.png';
                            image2.alt = 'First draft print of my box';
                            twoddesignDiv.appendChild(image2);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            var finaldraft = document.createElement('p');
                            finaldraft.textContent = "The first print went well, so I changed the parameters of my design to create a new box that had a length of 250mm, width of 175mm, height of 125mm, and thickness of 4.2mm with 4 fingerjoints.";
                            twoddesignDiv.appendChild(finaldraft);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            const image3 = document.createElement('img');
                            image3.classList.add('firstdraft-img');
                            image3.src = 'Week2/Finalbox.png';
                            image3.alt = 'Final sketch of my box';
                            twoddesignDiv.appendChild(image3);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            const image4 = document.createElement('img');
                            image4.classList.add('firstdraft-video');
                            image4.src = 'Week2/Finalboxprint.png';
                            image4.alt = 'Final print of my box';
                            twoddesignDiv.appendChild(image4);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            var assembly = document.createElement('p');
                            assembly.textContent = "Everything wen't well, however, the scoring had gone through the box too much and I had to strenghten the box by using hot glue for the bending parts of the carboard. Also, while the fingerjoints were a good fit, they were not wide enough to hold the box together, so I had to use hot glue to keep the box from falling apart.";
                            twoddesignDiv.appendChild(assembly);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            const image5 = document.createElement('img');
                            image5.classList.add('firstdraft-video');
                            image5.src = 'Week2/ClosedBox.png';
                            image5.alt = 'The assembled closed box';
                            twoddesignDiv.appendChild(image5);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            const image6 = document.createElement('img');
                            image6.classList.add('firstdraft-video');
                            image6.src = 'Week2/OpenBox.png';
                            image6.alt = 'The assembled opened box';
                            twoddesignDiv.appendChild(image6);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            var components = document.createElement('p');
                            components.textContent = "For my components, I decided that I would measure and model a 2.5mm Allen Wrench and a 3mm x 70mm Socket Bolt. This was a convenient choice because I watched a Fusion tutorial on how to model an Allen Wrench and I just had to modify it to fit my desired size. I used electronic calipers to take the measurements of the objects and modeled both of them independently in Fusion. Since this assignment asked us to create an assembly, I decided that the assembly of the two objects would be the combination of the wrench and bolt so that they were joined in the same way you would use the wrench to tighten the bolt. Below you can see the measurements and models of the objects.";
                            twoddesignDiv.appendChild(components);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            const image7 = document.createElement('img');
                            image7.classList.add('firstdraft-video');
                            image7.src = 'Week2/Measurements.jpg';
                            image7.alt = 'The measurments of my objects';
                            twoddesignDiv.appendChild(image7);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            const image8 = document.createElement('img');
                            image8.classList.add('firstdraft-img');
                            image8.src = 'Week2/AllenWrench.png';
                            image8.alt = 'Model of Allen Wrench';
                            twoddesignDiv.appendChild(image8);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            const image9 = document.createElement('img');
                            image9.classList.add('firstdraft-img');
                            image9.src = 'Week2/SocketBolt.png';
                            image9.alt = 'Model of Socket Bolt';
                            twoddesignDiv.appendChild(image9);

                            twoddesignDiv.appendChild(document.createElement('br'));

                            const image10 = document.createElement('img');
                            image10.classList.add('firstdraft-img');
                            image10.src = 'Week2/AllenWrenchandBolt.png';
                            image10.alt = 'Assembled model of Allen Wrench and Socket Bolt';
                            twoddesignDiv.appendChild(image10);

                            // Insert the div before the command-line div
                            terminalElement.insertBefore(twoddesignDiv, terminalElement.querySelector('.command-line'));

                            break;
                        case 'Fabrication.txt':
                            // Create a new div for the content
                            var fabricationDiv = document.createElement('div');
                            fabricationDiv.classList.add('fabrication-div');

                            // Create paragraphs for the statements
                            var sculptfirstdraft = document.createElement('p');
                            sculptfirstdraft.textContent = "My initial idea was to make a music-box-esque kinetic sculpture that would have two wire figures with swords spinning in opposite directions and having their swords collide. To do this, I designed a small gear that was 43 mm in diameter and two large gears that were 91 mm in diameter. The large gear had 48 teeth and the small gear had 24. This means there is a 2:1 gear ratio between the large and small gears, so the large gears will spin twice as slowly as the small gear."
                            fabricationDiv.appendChild(sculptfirstdraft);

                            fabricationDiv.appendChild(document.createElement('br'));

                            // Create an image element
                            const sculptimage = document.createElement('img');
                            sculptimage.classList.add('firstdraft-img');
                            sculptimage.src = 'Week3/SculptureSketch.jpg';
                            sculptimage.alt = 'First draft sketch of my sculpture';
                            fabricationDiv.appendChild(sculptimage);

                            fabricationDiv.appendChild(document.createElement('br'));

                            var sculptfirstprint = document.createElement('p');
                            sculptfirstprint.textContent = "To house the moving portions of my sculpture, I decided to build a box. The box has a length of 250mm, a width of 120 mm, and a height of 40 mm. The thickness of the wood used for the box was 6.2 mm. The gears and the box were both cut from this wood."
                            fabricationDiv.appendChild(sculptfirstprint);

                            fabricationDiv.appendChild(document.createElement('br'));

                            const sculptimage2 = document.createElement('img');
                            sculptimage2.classList.add('firstdraft-img');
                            sculptimage2.src = 'Week3/SculptureBox.png';
                            sculptimage2.alt = 'First draft design of my box';
                            fabricationDiv.appendChild(sculptimage2);

                            fabricationDiv.appendChild(document.createElement('br'));

                            // Create a video element
                            const sculptvideo = document.createElement('video');
                            sculptvideo.classList.add('firstdraft-video');
                            sculptvideo.src = 'Week3/Firstdraft.MOV';
                            sculptvideo.type = 'video/quicktime';
                            sculptvideo.controls = true;
                            sculptvideo.alt = 'First draft lasercut of my box and gears';
                            fabricationDiv.appendChild(sculptvideo);

                            fabricationDiv.appendChild(document.createElement('br'));

                            var sculptfinaldraft = document.createElement('p');
                            sculptfinaldraft.textContent = "The box and gears fit perfectly together, so I drilled holes into the gears and the box and started screwing them in. The larger gears weren't directly powered by the motor, so they could just hang loose on some axle. I chose a 3 mm x 35 mm bolt that would serve as the axle; I fastened it to the inside of the box using a wingnut. The axle of the small gear was a little trickier. I accidentally built the box so that its height was too constrictive, and the motor axle couldn't get a tight hold on the small gear. To fix the issue of connecting the small gear to the motor, I put a 3 mm x 18 mm bolt through the small gear, put a 12 mm wooden cylinder around the bolt, and put hot glue inside the cylinder while connecting the bolt and motor axle inside of it. This coupled both of them together."
                            fabricationDiv.appendChild(sculptfinaldraft);

                            fabricationDiv.appendChild(document.createElement('br'));

                            const sculptimage3 = document.createElement('img');
                            sculptimage3.classList.add('firstdraft-img');
                            sculptimage3.src = 'Week3/InsideBox.png';
                            sculptimage3.alt = 'Inside of the box';
                            fabricationDiv.appendChild(sculptimage3);

                            fabricationDiv.appendChild(document.createElement('br'));

                            var sculptwires = document.createElement('p');
                            sculptwires.textContent = "After securing the gears, I needed to make the figures with the swords. I used a metal wire and pliers to twist the wire into stick figures. Then, I made the figures a little sword to hold on to. I had to use some hot glue to make sure everything was secure, and once everything looked good, I glued each figure to one of the large gears."
                            fabricationDiv.appendChild(sculptwires);

                            fabricationDiv.appendChild(document.createElement('br'));

                            const sculptimage4 = document.createElement('img');
                            sculptimage4.classList.add('firstdraft-img');
                            sculptimage4.src = 'Week3/NicePicture.png';
                            sculptimage4.alt = 'Nice picture of the box';
                            fabricationDiv.appendChild(sculptimage4);

                            fabricationDiv.appendChild(document.createElement('br'));

                            var sculptassembly = document.createElement('p');
                            sculptassembly.textContent = "Everything looked good, so I glued the motor to the bottom of my box. The motor is a small 5V motor with a gearbox attached, however, it was still too big and the lid was a bit loose on the box. In the future, I should make the box about 5 to 10 mm taller. Either way, the sculpture moves."
                            fabricationDiv.appendChild(sculptassembly);

                            fabricationDiv.appendChild(document.createElement('br'));

                            const sculptvideo2 = document.createElement('video');
                            sculptvideo2.classList.add('firstdraft-img');
                            sculptvideo2.src = 'Week3/Sculpture.MOV';
                            sculptvideo2.type = 'video/quicktime';
                            sculptvideo2.controls = true;
                            sculptvideo2.alt = 'Video of the sculpture moving';
                            fabricationDiv.appendChild(sculptvideo2);

                            // Insert the div before the command-line div
                            terminalElement.insertBefore(fabricationDiv, terminalElement.querySelector('.command-line'));
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
            // currentPrompt.textContent += ` ${command} ${value}`;
            break;
        case 'clear':
            // Clear all dynamically generated content (old command lines, outputs, and cat-generated content)
            terminalElement.querySelectorAll('.old-command-line, .output-line, .twoddesign-div, .finalproject-div, .about-div, .fabrication-div').forEach(element => element.remove());
            output = '';
            break;
        default:
            output = `Command not found. Try the 'help' command.`;
    }

    // Display the output of the command, if any
    if (output !== '') {
        const outputParagraph = document.createElement('p');
        outputParagraph.classList.add('output-line');
        outputParagraph.textContent = output;
        terminalElement.insertBefore(outputParagraph, terminalElement.querySelector('.command-line'));
      }
  
      // Update the prompt with the new command line
      currentPrompt.textContent = `user@terminal${directory}:~`;  
  }
  // Handle up arrow key press to retrieve previous command
  if (event.key === 'ArrowUp') {
    if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
      historyIndex++;
      commandInput.value = commandHistory[commandHistory.length - 1 - historyIndex]; // Set input value to previous command
    }
  }

  // Handle down arrow key press to move forward in the command history
  if (event.key === 'ArrowDown') {
    if (historyIndex > 0) {
      historyIndex--;
      commandInput.value = commandHistory[commandHistory.length - 1 - historyIndex]; // Set input value to the next command
    } else {
      historyIndex = -1;
      commandInput.value = '';  // Clear the input field if no more history is left
    }
  }
});