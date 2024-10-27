// Button object that contains a link to a p5 sketch
class Button {

    constructor(text, color, link) {

        // Create the button and add styles
        var bu = document.createElement("button");
        this.buttonObject = bu;
        bu.classList.add("project-button")
        bu.style.backgroundColor = color;
        bu.textContent = text;

        // On click, open the project in an iframe
        bu.addEventListener("click", function() {

            // remove previous active button
            var previous = document.getElementsByClassName("active-button")[0];
            if (previous != null)
                previous.classList.remove("active-button");
            
            bu.classList.add("active-button");
            document.getElementById("p5-project").src = link;

        });

        // add the button to the buttons-container div
        document.getElementById("buttons-container").appendChild(this.buttonObject);

    }


}