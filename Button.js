// Button object that contains a link to a p5 sketch
class Button {

    constructor(text, color, link) {

        var bu = document.createElement("button");
        this.buttonObject = bu;
        bu.classList.add("project-button")
        bu.style.backgroundColor = color;
        bu.textContent = text;

        bu.addEventListener("click", function() {

            // remove previous active button
            var previous = document.getElementsByClassName("active-button")[0];
            if (previous != null)
                previous.classList.remove("active-button");
            
            bu.classList.add("active-button");
            document.getElementById("p5-project").src = link;

        });

        document.getElementById("buttons-container").appendChild(this.buttonObject);

    }


}