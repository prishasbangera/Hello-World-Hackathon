class Button {

    constructor(text, color, link) {

        this.text = text;
        var bu = document.createElement("button");
        this.buttonObject = bu;
        bu.style.backgroundColor = color;
        bu.textContent = text;

        bu.addEventListener("click", function() {
            document.getElementById("p5-project").src = link;
        });
    }

    add(el) {

        document.getElementById("buttons-container").appendChild(this.buttonObject);


    }


}