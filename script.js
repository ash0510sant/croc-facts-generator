const facts = [
    "Crocodiles can hold their breath for up to an hour!",
    "They have a third eyelid called a nictitating membrane that protects their eyes underwater.",
    "Crocodiles can't stick their tongues out.",
    "They are the closest living relatives of birds!",
    "Crocodiles have been around for over 200 million years, making them older than dinosaurs.",
    "They have a special salt gland that allows them to drink saltwater.",
    "Crocodiles are incredibly strong and can bite with a force of up to 3,700 pounds per square inch!",
    "They can run surprisingly fast on land, reaching speeds of up to 12 miles per hour.",
    "Female crocodiles bury their eggs in nests and guard them until they hatch.",
    "Crocodiles can live for up to 70 years in the wild!"
];

const factElement = document.getElementById('fact');
const showFactButton = document.getElementById('showFact');

showFactButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
});
