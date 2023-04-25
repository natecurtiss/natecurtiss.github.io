let done = false;

function submitted() {
    if (done) return;
    done = true;
    const fadeSelectors = ["#i1", "#i2", "#email-entry"];
    for (const selector of fadeSelectors) {
        $(selector).fadeOut(500);
    };
    $("#i3").delay(500).fadeIn(500);
}


