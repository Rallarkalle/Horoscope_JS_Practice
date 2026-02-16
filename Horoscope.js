/* Purpose of program:
user inputs their sign, and the program generates a random horoscope message.
To make the program truly random, the message that it outputs should be
made up of at least three different pieces of data.

How it works (brief):
User enters their zodiac sign. Input is checked against possible zodiac signs (zodiacSigns),
which then determines the opening sentence (zodiacOpenings). The program uses .find method
on array to make this check idiomatic and concise (in terms of the code).
Rest of the horoscopeMessage is picked at random from array 2 and 3 by generating a random number
which determines the index position to take the data/string from in each array.


Codecademy instructions:
    - Use Git version control
    - Use command line
    - Push feature/horoscope-logic --> main when work is complete.
        - git add Horoscope.js
        - git commit -m "Add horoscope logic"
        - git push -u origin feature/horoscope-logic
    - Create a pull request and merge to main when work is complete.
        (navigate to GitHub, click "Compare & pull request",
        then "Create pull request", then "Merge pull request")
*/

const zodiacSigns = [ //Zodiac list, used to check users input of zodiac sign.
    "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
];

// Arrays of horoscope messages
const zodiacOpenings = [
    "As an Aries, your fiery momentum is awakening ",
    "As a Taurus, your grounded patience is strengthening ",
    "As a Gemini, your restless curiosity is stirring ",
    "As a Cancer, your emotional tides are shifting ",
    "As a Leo, your radiant confidence is rising ",
    "As a Virgo, your analytical clarity is sharpening ",
    "As a Libra, your sense of harmony is recalibrating ",
    "As a Scorpio, your inner intensity is deepening ",
    "As a Sagittarius, your adventurous spirit is expanding ",
    "As a Capricorn, your disciplined focus is solidifying ",
    "As an Aquarius, your unconventional insight is emerging ",
    "As a Pisces, your intuitive sensitivity is heightening "
];

const zodiacInfluences = [
    "as your ruling element pushes you toward bold choices, ",
    "as familiar routines begin to feel too small for your growth, ",
    "as a subtle emotional shift brings forgotten desires to the surface, ",
    "as your natural strengths align with new opportunities, ",
    "as unexpected clarity cuts through recent confusion, ",
    "as your inner world becomes louder than external noise, ",
    "as a long‑standing tension finally begins to loosen, ",
    "as your instincts guide you toward a more authentic, path ",
    "as a spark of inspiration reshapes your perspective, ",
    "as your energy settles into a more balanced rhythm, ",
    "as a quiet determination rises within you, ",
    "as your imagination opens doors you hadn’t considered, "
];

const zodiacOutcomes = [
    "so trust the shift and let it lead you forward.",
    "so take the opportunity that feels slightly out of reach.",
    "so allow yourself to release what no longer supports you.",
    "so follow the idea that keeps returning to your mind.",
    "so stay open to the person who surprises you today.",
    "so lean into the momentum instead of questioning it.",
    "so give yourself permission to rest before the next step.",
    "so embrace the change even if it feels unfamiliar.",
    "so speak your truth with calm confidence.",
    "so take the first step — the universe will meet you halfway.",
    "so let your intuition finish the sentence your mind started.",
    "so welcome the new chapter that’s quietly forming."
];


// Function to get a random horoscope message
const getRandomMessage = (userZodiac) => {
    let horoscopeMessage = ``;
    let influenceMessage = zodiacInfluences[Math.floor(Math.random() * zodiacInfluences.length)];
    let outcomeMessage = zodiacOutcomes[Math.floor(Math.random() * zodiacOutcomes.length)];

    const userInput = userZodiac.toLowerCase();
    const foundSign = zodiacSigns.find(sign => userInput.includes(sign)); //.find runs through the array of zodiac signs. (sign = current item in zodiacSigns array) When it bumps into a string that matches the users input it returns 'true'.
    //return console.log(foundSign);  //Should return the input sign in lowercase, if the user actually entered a valid sign. Else, returns undefined.
    const zodiacIndex = zodiacSigns.indexOf(foundSign); //.indexOf looks for the index of foundSign in zodiacSigns. The zodiac in zodiacSigns and zodiacOpenings are, in this case, in the same positions. With this variable (zodiacIndex) we now have the index position of the correct zodiacOpenings item to use.

    horoscopeMessage += zodiacOpenings[zodiacIndex] + influenceMessage + outcomeMessage;
    /* Alternative idiomatic abbreviation of the final message for a more concise code. Makes influenceMessage and outcomeMessage redundant.
    horoscopeMessage += zodiacOpenings[zodiacIndex] +
                        zodiacInfluences[Math.floor(Math.random() * zodiacInfluences.length)] +
                        zodiacOutcomes[Math.floor(Math.random() * zodiacOutcomes.length)];
                        */
    return horoscopeMessage;
}

console.log(getRandomMessage('I am a leo'));




