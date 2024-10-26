// Button object that contains a link to a p5 sketch
class Button {

    constructor(text, color, link) {

        var bu = document.createElement("button");
        this.buttonObject = bu;
        bu.style.backgroundColor = color;
        bu.textContent = text;

        bu.addEventListener("click", function() {
            document.getElementById("p5-project").src = link;
        });

        document.getElementById("buttons-container").appendChild(this.buttonObject);

    }


}