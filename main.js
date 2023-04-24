let done = false;

function submitted() {
    if (done)
        return;
    let form = document.forms["gform"]["entry.38295861"];
    const reg = /\S+@\S+\.\S+/;
    if (!reg.test(form.value.trim())) {
        alert("Please enter a valid email!");
    }
    else {
        done = true;
        $(document.getElementById("i1")).fadeOut(500);
        $(document.getElementById("i2")).fadeOut(500);
        $(document.getElementById("email-entry")).fadeOut(500);
        $(document.getElementById("i3")).delay(500).fadeIn(500);
    }
}


