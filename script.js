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
            if (value) {
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
                            case 'Programming.txt':
                                // Create a new div for the content
                                var programmingDiv = document.createElement('div');
                                programmingDiv.classList.add('programming-div');
    
                                // Create paragraphs for the statements
                                var prognewbox = document.createElement('p');
                                prognewbox.textContent = "My idea was to modify my kinetic sculpture from last week and add a motor driver so that the motor could change directions. With this ability, I would programm a movement pattern that would make my wire figues appear as if they're actually fighting by having them change directions as they crossed blades. To do this, I first made the height of my box a little larger and made the walls 60 mm tall. This way, I could snugly fit all the components. Then, I laser cut some pieces of wood to hold down the motor in the center of the box. Other than that, the box stayed the exact same."
                                programmingDiv.appendChild(prognewbox);
    
                                programmingDiv.appendChild(document.createElement('br'));
    
                                // Create an image element
                                const progimage = document.createElement('img');
                                progimage.classList.add('firstdraft-video');
                                progimage.src = 'Week4/NewBox.png';
                                progimage.alt = 'Picture of my new box';
                                programmingDiv.appendChild(progimage);
    
                                programmingDiv.appendChild(document.createElement('br'));
    
                                var progcircuit = document.createElement('p');
                                progcircuit.textContent = "As can be seen above, I added the L9110 motor driver to my circuit so the motor could change direction, then I connected the driver to the Arduino Uno, forming the circuit I would use for the project. Below I added a schematic of the full circuit."
                                programmingDiv.appendChild(progcircuit);
    
                                programmingDiv.appendChild(document.createElement('br'));
    
                                // Create an image element
                                const progimage2 = document.createElement('img');
                                progimage2.classList.add('firstdraft-img');
                                progimage2.src = 'Week4/CircuitSchematic.jpg';
                                progimage2.alt = 'Circuit Schematic';
                                programmingDiv.appendChild(progimage2);
    
                                programmingDiv.appendChild(document.createElement('br'));
    
                                var progcode = document.createElement('p');
                                progcode.textContent = "I didn't have any sort of input device that would let me know the position of the gears, so if I wanted to have them change direction when they were in a specific position, I had to time how long it took the gears to spin 360 degrees and use that as a conversion between degrees and how long the motor should spin. Once I'd done this, I just needed to programm the pattern I wanted the sculpture to follow, which is exactly what I did. My code for making the sculpture move is found below."
                                programmingDiv.appendChild(progcode);
    
                                programmingDiv.appendChild(document.createElement('br'));
    
                                // Add a code block for the 'print "hello world"' code
                                var progcodeblock = document.createElement('pre');
                                progcodeblock.classList.add('code-block');
                                progcodeblock.textContent = `// Define pin connections\nconst int motorPinA = 3;  // Pin for B-1A (L9110 motor driver)\nconst int motorPinB = 4;  // Pin for B-1B (L9110 motor driver)\n\n// Set the time in milliseconds to complete one full 360-degree rotation\nconst int rotationDelay = 1300;  // Adjust this value based on the motor speed\n\nvoid setup() {\n  pinMode(motorPinA, OUTPUT);\n  pinMode(motorPinB, OUTPUT);\n\n  // Make sure the motor is off when the setup runs\n  stopMotor();\n\n  // Start serial communication for debugging\n  Serial.begin(9600);\n\n  delay(1000);\n}\n\nvoid loop() {\n  // Start the motor sequence in an infinite loop\n  performMotorMovements();\n}\n\nvoid performMotorMovements() {\n  // Spin motor 1125 degrees CW (3 full rotations + 45 degrees)\n  rotateMotorCW(1125);\n  \n  delay(500);\n  \n  // Turn motor CCW 90 degrees\n  rotateMotorCCW(90);\n  \n  delay(500);\n  \n  // Turn motor CW 90 degrees\n  rotateMotorCW(90);\n  \n  delay(500);\n  \n  // Turn motor CCW 90 degrees\n  rotateMotorCCW(90);\n  \n  delay(500);\n  \n  // Turn motor CW 90 degrees\n  rotateMotorCW(90);\n  \n  delay(500);\n  \n  // Turn motor CCW 1170 degrees (3 full rotations + 90 degrees)\n  rotateMotorCCW(1170);\n  \n  delay(500);\n  \n  // Turn motor CW 90 degrees\n  rotateMotorCW(90);\n  \n  delay(500);\n  \n  // Turn motor CCW 90 degrees\n  rotateMotorCCW(90);\n  \n  delay(500);\n  \n  // Turn motor CW 90 degrees\n  rotateMotorCW(90);\n  \n  delay(500);\n  \n  // Turn motor CCW 45 degrees\n  rotateMotorCCW(45);\n  \n  delay(500);\n}\n\n// Function to rotate the motor CW by a specified number of degrees\nvoid rotateMotorCW(int degrees) {\n  // Calculate the delay time based on the degrees to rotate\n  int delayTime = map(degrees, 0, 360, 0, rotationDelay);\n\n  // Set motor to turn CW\n  digitalWrite(motorPinA, HIGH);\n  digitalWrite(motorPinB, LOW);\n  \n  // Run the motor for the calculated time\n  delay(delayTime);\n  \n  stopMotor();\n  \n  Serial.print("Rotated CW: ");\n  Serial.print(degrees);\n  Serial.println(" degrees");\n}\n\n// Function to rotate the motor CCW by a specified number of degrees\nvoid rotateMotorCCW(int degrees) {\n  // Calculate the delay time based on the degrees to rotate\n  int delayTime = map(degrees, 0, 360, 0, rotationDelay);\n\n  // Set motor to turn CCW\n  digitalWrite(motorPinA, LOW);\n  digitalWrite(motorPinB, HIGH);\n  \n  // Run the motor for the calculated time\n  delay(delayTime);\n  \n  stopMotor();\n  \n  Serial.print("Rotated CCW: ");\n  Serial.print(degrees);\n  Serial.println(" degrees");\n}\n\n// Function to stop the motor\nvoid stopMotor() {\n  digitalWrite(motorPinA, LOW);\n  digitalWrite(motorPinB, LOW);\n}`;
                                programmingDiv.appendChild(progcodeblock);
    
                                programmingDiv.appendChild(document.createElement('br'));
    
                                var progvideotext = document.createElement('p');
                                progvideotext.textContent = "By uploading this code to my Arduino, I was able to make my sculpture move as I intended. The video of what this looks like can be found below."
                                programmingDiv.appendChild(progvideotext);
    
                                programmingDiv.appendChild(document.createElement('br'));
    
                                // Create a video element
                                const progvideo = document.createElement('video');
                                progvideo.classList.add('firstdraft-video');
                                progvideo.src = 'Week4/ProgSculpt.MOV';
                                progvideo.type = 'video/quicktime';
                                progvideo.controls = true;
                                progvideo.alt = 'Video of my kinetic sculpture with programmed movement';
                                programmingDiv.appendChild(progvideo);
    
                                // Insert the div before the command-line div
                                terminalElement.insertBefore(programmingDiv, terminalElement.querySelector('.command-line'));
                                break;
                            case '3D-Design.txt':
                                // Create a new div for the content
                                var threeddesignDiv = document.createElement('div');
                                threeddesignDiv.classList.add('3ddesign-div');

                                // Create paragraphs for the statements
                                var threedscan = document.createElement('p');
                                threedscan.textContent = "I used the LIDAR scanner in the lab to make a 3D mesh model of my airpods. I though it would be interesting to see how the scanner handled a small object that was very white and glossy. I had the adjust certain scanning parameters when making the 3D model, but the end result perfectly captured the subject."
                                threeddesignDiv.appendChild(threedscan);

                                threeddesignDiv.appendChild(document.createElement('br'));

                                // Create an image element
                                const threedimage = document.createElement('img');
                                threedimage.classList.add('firstdraft-img');
                                threedimage.src = 'Week5/ScanPic.png';
                                threedimage.alt = 'Scan of my airpods';
                                threeddesignDiv.appendChild(threedimage);

                                threeddesignDiv.appendChild(document.createElement('br'));

                                var threeddesign = document.createElement('p');
                                threeddesign.textContent = "This week, I decided to design and 3D print a component that I will likely use in my final project. I designed and printed a rack and pinion. This will be the mechanism that will be used to pull my door open. I designed a base for the rack and pinion as well as the rack and pinion themselves all as different components in Fusion. Then I converted these components into stl files and used them all to 3D print the entire mechanism."
                                threeddesignDiv.appendChild(threeddesign);

                                threeddesignDiv.appendChild(document.createElement('br'));

                                const threedimage2 = document.createElement('img');
                                threedimage2.classList.add('firstdraft-img');
                                threedimage2.src = 'Week5/RaP_Model.png';
                                threedimage2.alt = 'Model of the rack and pinion';
                                threeddesignDiv.appendChild(threedimage2);

                                threeddesignDiv.appendChild(document.createElement('br'));

                                var threedvideodoc = document.createElement('p');
                                threedvideodoc.textContent = "Below is a video showing how the rack and pinion worked once printed and assembled."
                                threeddesignDiv.appendChild(threedvideodoc);

                                threeddesignDiv.appendChild(document.createElement('br'));

                                const threedvideo = document.createElement('video');
                                threedvideo.classList.add('firstdraft-video');
                                threedvideo.src = 'Week5/DesignTest.MOV';
                                threedvideo.type = 'video/quicktime';
                                threedvideo.controls = true;
                                threedvideo.alt = 'Video of how my rack and pinion work';
                                threeddesignDiv.appendChild(threedvideo);

                                threeddesignDiv.appendChild(document.createElement('br'));

                                var stlbaseWrapper = document.createElement('div');
                                stlbaseWrapper.classList.add('centered-link');
                                var stlbaseLink = document.createElement('a');
                                stlbaseLink.href = 'Week5/Base.stl';
                                stlbaseLink.textContent = 'Download Rack and Pinion Base Component STL';
                                stlbaseLink.download = 'Base.stl';
                                stlbaseWrapper.appendChild(stlbaseLink);
                                threeddesignDiv.appendChild(stlbaseWrapper);

                                threeddesignDiv.appendChild(document.createElement('br'));

                                // Add STL file link for the gear
                                var stlgearWrapper = document.createElement('div');
                                stlgearWrapper.classList.add('centered-link');
                                var stlgearLink = document.createElement('a');
                                stlgearLink.href = 'Week5/Gear.stl';
                                stlgearLink.textContent = 'Download Rack and Pinion Gear Component STL';
                                stlgearLink.download = 'Gear.stl';
                                stlgearWrapper.appendChild(stlgearLink);
                                threeddesignDiv.appendChild(stlgearWrapper);

                                threeddesignDiv.appendChild(document.createElement('br'));

                                // Add STL file link for the rack
                                var stlrackWrapper = document.createElement('div');
                                stlrackWrapper.classList.add('centered-link');
                                var stlrackLink = document.createElement('a');
                                stlrackLink.href = 'Week5/Rack.stl';
                                stlrackLink.textContent = 'Download Rack and Pinion Rack Component STL';
                                stlrackLink.download = 'Rack.stl';
                                stlrackWrapper.appendChild(stlrackLink);
                                threeddesignDiv.appendChild(stlrackWrapper);

                                threeddesignDiv.appendChild(document.createElement('br'));

                                // Add gCode file link for 3D Print of the Rack and Pinion
                                var gcodeWrapper = document.createElement('div');
                                gcodeWrapper.classList.add('centered-link');
                                var gcodeLink = document.createElement('a');
                                gcodeLink.href = 'Week5/RackAndPinion.gcode';
                                gcodeLink.textContent = 'Download Rack and Pinion GCODE For 3D Printing';
                                gcodeLink.download = 'RackAndPinion.gcode'; // Ensure the file is downloaded
                                gcodeWrapper.appendChild(gcodeLink);
                                threeddesignDiv.appendChild(gcodeWrapper);

                                // Insert the div before the command-line div
                                terminalElement.insertBefore(threeddesignDiv, terminalElement.querySelector('.command-line'));
                                break;
                            default:
                                output = 'Nothing in these files yet.'
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

                                finalDiv.appendChild(document.createElement('br'));
    
                                var projectdescription = document.createElement('p');
                                projectdescription.textContent = "My idea is to create an automatic door opener that will unlock my dorm door through my phone and my Harvard ID. It will probably use some sort of motor to pull the handle of my dorm door.";
                                finalDiv.appendChild(projectdescription);

                                finalDiv.appendChild(document.createElement('br'));

                                var firstdesign = document.createElement('p');
                                firstdesign.textContent = "Below is the initial design for the final project. It is currently a casing with a rack and pinion that will be controlled by a motor. The motor will cause the rack to pull down on the door handle, and after a few second pull it back up."
                                finalDiv.appendChild(firstdesign);

                                finalDiv.appendChild(document.createElement('br'));

                                // Create an image element
                                const v1design = document.createElement('img');
                                v1design.classList.add('firstdraft-img');
                                v1design.src = 'FinalProject/V1FinalProject.png';
                                v1design.alt = 'Initial Design of the Final Project';
                                finalDiv.appendChild(v1design);

                                finalDiv.appendChild(document.createElement('br'));

                                var materials = document.createElement('p');
                                materials.textContent = "Material List: Based on my initial design, it looks like what I'll need for the final project is a motor, filament to 3D print the components, a few screws to connect the case, a motor driver to make sure the motor can change direction, an RFID card reader so I can scan my Harvard ID, a bluetooth input device so I can also activate the device through an app, a microcontroller to give instructions to the motor and control the device, and some sort of battery so the device can be powered without having to be plugged into an outlet."
                                finalDiv.appendChild(materials);

                                finalDiv.appendChild(document.createElement('br'));

                                const timeline = document.createElement('p');
                                timeline.classList.add('centered-text');
                                timeline.textContent = "10/10/24: Finish the first draft of the project design\n10/17/24: Finalize the design of the project\n10/24/24: Have a working prototype that opens my door with a motor and a power source. No microcontroller or input devices\n10/31/24: Have a working card reader that recognizes my ID\n11/7/24: Connect the bluetooth input device to the system\n11/14/24: Build an app that connects to the device so I can open my door using my phone\n11/21/24: Find a way to power the device and recharge it if necessary\n12/5/24: Make sure everything is working and fix any issues if there are any"
                                finalDiv.appendChild(timeline);
    
                                // Insert the div before the command-line div
                                terminalElement.insertBefore(finalDiv, terminalElement.querySelector('.command-line'));
                                
                                break;
                            default:
                                output = 'This is not a recognized file.'
                        }
                }
            }
            else {
                output = 'This is not a recognized file.';
            }
            break;
        case 'clear':
            // Clear all dynamically generated content (old command lines, outputs, and cat-generated content)
            terminalElement.querySelectorAll('.old-command-line, .output-line, .twoddesign-div, .finalproject-div, .about-div, .fabrication-div, .programming-div, .outputParagraph').forEach(element => element.remove());
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