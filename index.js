function diceRoller(){
    const numberDice = document.getElementById("numberDice").value;
    const textResult = document.getElementById("textResult");
    const imageResult = document.getElementById("imageResult");
    let values = [];
    let images = [];

    for(let i = 0; i < numberDice; i++){
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice-images/${value}.png" alt="Dice ${value}">`);
    }
    textResult.textContent = `dice: ${values.join(', ')}`;
    imageResult.innerHTML = images.join('');
}