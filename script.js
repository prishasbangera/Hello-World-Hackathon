

var buttons = [
    new Button("Silly Drawing Scratchpad", "#63eb87", "https://editor.p5js.org/emeraldblackbird/sketches/Q_D4mpZ4U"),
    new Button("Would You Rather?", "#17939c", "https://editor.p5js.org/be.serious.bro/sketches/E2R24RYlK"),
    new Button("CIRCLS", "#e376cf", "https://editor.p5js.org/agm14/sketches/8h-QV8fNc")
];

for (let b of buttons) {
    b.add(document.getElementById("buttons-container"));
}