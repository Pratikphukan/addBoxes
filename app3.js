var count = 0;

function addBox() {
    for (let i = 0; i < document.getElementById("num1").value; i++) {
        count++;
        var box = document.createElement("button");
        box.id = "box1";
        box.innerHTML = "Box" + count;
        box.style = "background-color:" + document.getElementById("color").value + ";"
        document.body.appendChild(box);
    }
}