



const resetButton = document.getElementById("reset");


resetButton.addEventListener("click", r => {
    window.location.reload();
})



const button = document.getElementById('mybutton');

let count = 0;




mybutton.addEventListener('mouseenter', e => {


    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    if (count < 10) {
        if (count == 0) {
            mybutton.style.height = "150px";
            mybutton.style.width = "150px";

        }

        if (count == 5) {
            button.innerHTML = "Come x  on loser.. you can do better than that!!";
        }

        mybutton.style.position = "absolute";
        mybutton.style.transform = "translate(0,0,0,0)";
        mybutton.style.left = Math.floor(Math.random() * windowWidth) + "px";
        mybutton.style.top = Math.floor(Math.random() * windowHeight) + "px";
    }

    if (count == 10) {
        button.innerHTML = "Not Bad... Click to PARTY!!!!!";

        button.addEventListener("click", () => {
            button.innerHTML = "PARTY TIME!";
            button.style.width = "300px";
            button.style.height = "150px";
            button.style.top = "50%";
            button.style.left = "50%";
            button.style.transform = "translate(-50%, -50%)";
            button.style.fontSize = "28px";

            setInterval(() => {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }, 100);

        });
    }

    count++;
});




















    // if count is 0 it will remain the same and not move.....
    // if (count == 0) {

    //     myButton.style.height = "200px";
    //     myButton.style.width = "200px";
    // }
    // else {

    //     myButton.style.height = Math.floor(Math.random() * 200) + "px";

    //     myButton.style.width = myButton.style.height

    //     // myButton.style.width = Math.floor(Math.random() * 100) + "px";

    //     myButton.style.left = Math.floor(Math.random() * 1000) + "px"; // creating a random px for the button's left position
    //     myButton.style.top = Math.floor(Math.random() * 1000) + "px"; // creating a random px for the button's top position


//     }

// count++;

// })