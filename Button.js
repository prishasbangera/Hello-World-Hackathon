class Button {

    constructor(text, color, link) {

        this.text = text;
        var bu = document.createElement("button");
        this.buttonObject = bu;
        bu.style.backgroundColor = color;
        bu.textContent = text;

        bu.addEventListener("click", function() {
            window.open(link);
        });
    }

    add(el) {

        document.getElementById("buttons-container").appendChild(this.buttonObject);


    }


}