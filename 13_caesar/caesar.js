const caesar = function(letter, num) {
    // checking whether the element provided is a sentence
    if (letter.length > 1){
        // create an empty array that we will add the converted letters
        let convertLetters = [];
        //split the string and add it to an array
        let letterArray = letter.split("");
        //check every letter of the array and convert it
        letterArray.forEach(element => {
            const specialChar = ["!",",", ".", " "];// capturing special characters
            if (specialChar.includes(element)){
                convertLetters.push(element);
            }
        
            if (element === element.toUpperCase()){
                var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                let startingIndex;
                const numberOfTimes = num; // number of times to loop
                let elementIndex;
                // checks if the number of times is positive
                if (numberOfTimes>0){
                    switch (element){
                        case "A":
                            startingIndex = alphabet.indexOf("A"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                           break; 
                        case "B":
                            startingIndex = alphabet.indexOf("B"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "C":
                            startingIndex = alphabet.indexOf("C"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "D":
                            startingIndex = alphabet.indexOf("D"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "E":
                            startingIndex = alphabet.indexOf("E"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "F":
                            startingIndex = alphabet.indexOf("F"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "G":
                            startingIndex = alphabet.indexOf("G"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "H":
                            startingIndex = alphabet.indexOf("H"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "I":
                            startingIndex = alphabet.indexOf("I"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "J":
                            startingIndex = alphabet.indexOf("J"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "K":
                            startingIndex = alphabet.indexOf("K"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "L":
                            startingIndex = alphabet.indexOf("L"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "M":
                            startingIndex = alphabet.indexOf("M"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "N":
                            startingIndex = alphabet.indexOf("N"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "O":
                            startingIndex = alphabet.indexOf("O"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "P":
                            startingIndex = alphabet.indexOf("P"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "Q":
                            startingIndex = alphabet.indexOf("Q"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "R":
                            startingIndex = alphabet.indexOf("R"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "S":
                            startingIndex = alphabet.indexOf("S"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "T":
                            startingIndex = alphabet.indexOf("T"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "U":
                            startingIndex = alphabet.indexOf("U"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "V":
                            startingIndex = alphabet.indexOf("V"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "W":
                            startingIndex = alphabet.indexOf("W"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "X":
                            startingIndex = alphabet.indexOf("X"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "Y":
                            startingIndex = alphabet.indexOf("Y"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "Z":
                            startingIndex = alphabet.indexOf("Z"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        }        

                } // end of if checking the number of times
                else{
                    switch (element){
                        case "A":
                            startingIndex = alphabet.indexOf("A"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                           break; 
                        case "B":
                            startingIndex = alphabet.indexOf("B"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "C":
                            startingIndex = alphabet.indexOf("C"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "D":
                            startingIndex = alphabet.indexOf("D"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "E":
                            startingIndex = alphabet.indexOf("E"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "F":
                            startingIndex = alphabet.indexOf("F"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "G":
                            startingIndex = alphabet.indexOf("G"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "H":
                            startingIndex = alphabet.indexOf("H"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "I":
                            startingIndex = alphabet.indexOf("I"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "J":
                            startingIndex = alphabet.indexOf("J"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "K":
                            startingIndex = alphabet.indexOf("K"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "L":
                            startingIndex = alphabet.indexOf("L"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "M":
                            startingIndex = alphabet.indexOf("M"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "N":
                            startingIndex = alphabet.indexOf("N"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "O":
                            startingIndex = alphabet.indexOf("O"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "P":
                            startingIndex = alphabet.indexOf("P"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "Q":
                            startingIndex = alphabet.indexOf("Q"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "R":
                            startingIndex = alphabet.indexOf("R"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "S":
                            startingIndex = alphabet.indexOf("S"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "T":
                            startingIndex = alphabet.indexOf("T"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "U":
                            startingIndex = alphabet.indexOf("U"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "V":
                            startingIndex = alphabet.indexOf("V"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "W":
                            startingIndex = alphabet.indexOf("W"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "X":
                            startingIndex = alphabet.indexOf("X"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "Y":
                            startingIndex = alphabet.indexOf("Y"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "Z":
                            startingIndex = alphabet.indexOf("Z"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        }//end of number of times checking
                    }  
                
            } 
            else {
                var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                let startingIndex;
                const numberOfTimes = num; // number of times to loop
                let elementIndex;
                // check if number of times is not negative
                if (numberOfTimes>0){
                    switch (element){
                        case "a":
                            startingIndex = alphabet.indexOf("a"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "b":
                            startingIndex = alphabet.indexOf("b"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "c":
                            startingIndex = alphabet.indexOf("c"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "d":
                            startingIndex = alphabet.indexOf("d"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "e":
                            startingIndex = alphabet.indexOf("e"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "f":
                            startingIndex = alphabet.indexOf("f"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "g":
                            startingIndex = alphabet.indexOf("g"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "h":
                            startingIndex = alphabet.indexOf("h"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "i":
                            startingIndex = alphabet.indexOf("i"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "j":
                            startingIndex = alphabet.indexOf("j"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "k":
                            startingIndex = alphabet.indexOf("k"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "l":
                            startingIndex = alphabet.indexOf("l"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "m":
                            startingIndex = alphabet.indexOf("m"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "n":
                            startingIndex = alphabet.indexOf("n"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "o":
                            startingIndex = alphabet.indexOf("o"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "p":
                            startingIndex = alphabet.indexOf("p"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "q":
                            startingIndex = alphabet.indexOf("q"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "r":
                            startingIndex = alphabet.indexOf("r"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "s":
                            startingIndex = alphabet.indexOf("s"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "t":
                            startingIndex = alphabet.indexOf("t"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "u":
                            startingIndex = alphabet.indexOf("u"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "v":
                            startingIndex = alphabet.indexOf("v"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "w":
                            startingIndex = alphabet.indexOf("w"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "x":
                            startingIndex = alphabet.indexOf("x"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "y":
                            startingIndex = alphabet.indexOf("y"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "z":
                            startingIndex = alphabet.indexOf("z"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i < numberOfTimes; i++) {
                            elementIndex = (elementIndex + 1) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                    }

                }// end of if checking the number of times
                else {
                    switch (element){
                        case "a":
                            startingIndex = alphabet.indexOf("a"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "b":
                            startingIndex = alphabet.indexOf("b"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "c":
                            startingIndex = alphabet.indexOf("c"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "d":
                            startingIndex = alphabet.indexOf("d"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "e":
                            startingIndex = alphabet.indexOf("e"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "f":
                            startingIndex = alphabet.indexOf("f"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "g":
                            startingIndex = alphabet.indexOf("g"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "h":
                            startingIndex = alphabet.indexOf("h"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "i":
                            startingIndex = alphabet.indexOf("i"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "j":
                            startingIndex = alphabet.indexOf("j"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "k":
                            startingIndex = alphabet.indexOf("k"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "l":
                            startingIndex = alphabet.indexOf("l"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "m":
                            startingIndex = alphabet.indexOf("m"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "n":
                            startingIndex = alphabet.indexOf("n"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "o":
                            startingIndex = alphabet.indexOf("o"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "p":
                            startingIndex = alphabet.indexOf("p"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "q":
                            startingIndex = alphabet.indexOf("q"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "r":
                            startingIndex = alphabet.indexOf("r"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "s":
                            startingIndex = alphabet.indexOf("s"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "t":
                            startingIndex = alphabet.indexOf("t"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "u":
                            startingIndex = alphabet.indexOf("u"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "v":
                            startingIndex = alphabet.indexOf("v"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "w":
                            startingIndex = alphabet.indexOf("w"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "x":
                            startingIndex = alphabet.indexOf("x"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "y":
                            startingIndex = alphabet.indexOf("y"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                        case "z":
                            startingIndex = alphabet.indexOf("z"); // starting point
        
                            elementIndex = startingIndex;
                            for (let i = 0; i >numberOfTimes; i--) {
                            elementIndex = (elementIndex -1 + alphabet.length) % alphabet.length;
                            }
                            convertLetters.push(alphabet[elementIndex]);
                            break;
                    }
                }// end of checking the number of times
            
        }
    });
        return convertLetters.join("");
        // create an array to add the letters of the string
        //Add the converted text to an array
    }else{
        var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let position;
        switch (letter){
            case "A":
                position = alphabet.indexOf("A") + num;
                return alphabet[position];
                break;
            case "B":
                position = alphabet.indexOf("B") + num;
                return alphabet[position];
                break;
            case "C":
                position = alphabet.indexOf("C") + num;
                return alphabet[position];
                break;
            case "D":
                position = alphabet.indexOf("D") + num;
                return alphabet[position];
                break;
            case "E":
                position = alphabet.indexOf("E") + num;
                return alphabet[position];
                break;
            case "F":
                position = alphabet.indexOf("F") + num;
                return alphabet[position];
                break;
            case "G":
                position = alphabet.indexOf("G") + num;
                return alphabet[position];
                break;
            case "H":
                position = alphabet.indexOf("H") + num;
                return alphabet[position];
                break;
            case "I":
                position = alphabet.indexOf("I") + num;
                return alphabet[position];
                break;
            case "J":
                position = alphabet.indexOf("J") + num;
                return alphabet[position];
                break;
            case "K":
                position = alphabet.indexOf("G") + num;
                return alphabet[position];
                break;
            case "L":
                position = alphabet.indexOf("L") + num;
                return alphabet[position];
                break;
            case "M":
                position = alphabet.indexOf("M") + num;
                return alphabet[position];
                break;
            case "N":
                position = alphabet.indexOf("N") + num;
                return alphabet[position];
                break;
            case "O":
                position = alphabet.indexOf("O") + num;
                return alphabet[position];
                break;
            case "P":
                position = alphabet.indexOf("P") + num;
                return alphabet[position];
                break;
            case "Q":
                position = alphabet.indexOf("Q") + num;
                return alphabet[position];
                break;
            case "R":
                position = alphabet.indexOf("R") + num;
                return alphabet[position];
                break;
            case "S":
                position = alphabet.indexOf("S") + num;
                return alphabet[position];
                break;
            case "T":
                position = alphabet.indexOf("T") + num;
                return alphabet[position];
                break;
            case "U":
                position = alphabet.indexOf("U") + num;
                return alphabet[position];
                break;
            case "V":
                position = alphabet.indexOf("V") + num;
                return alphabet[position];
                break;
            case "W":
                position = alphabet.indexOf("W") + num;
                return alphabet[position];
                break;
            case "X":
                position = alphabet.indexOf("X") + num;
                return alphabet[position];
                break;
            case "Y":
                position = alphabet.indexOf("Y") + num;
                return alphabet[position];
                break;
            case "Z":
                position = alphabet.indexOf("Z") + (num);
                for (var i = alphabet.indexOf("Z"); i <= position; i++) {
                    var index = i % alphabet.length;
                  }
                return alphabet[index];
                break;
        }
    }

}
    
// Do not edit below this line
module.exports = caesar;
