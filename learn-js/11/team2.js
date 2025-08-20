function clapGame369(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let str = i.toString();
        let clapCount = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === "3" || str[j] === "6" || str[j] === "9") {
                clapCount++;
            }
        }
        if (clapCount > 0) {
            result.push("👏".repeat(clapCount));
        } else {
            result.push(i);
        }
    }
    console.log(result);
}

clapGame369(5);
clapGame369(33);


function classifyTriad([a, b, c]) {
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const ai = notes.indexOf(a);
    const bi = notes.indexOf(b);
    const ci = notes.indexOf(c);
    const max = Math.max(ai, bi, ci);
    const min = Math.min(ai, bi, ci);
    let middle;
    if (ai != max && ai != min) {
        middle = ai;
    } else if (bi != max && bi != min) {
        middle = bi;
    } else {
        middle = ci;
    }
    if (middle - min === 4) {
        if (max - middle === 3) {
           console.log(`${notes[min]} major`);
        } else if (max - middle === 4) {
            console.log(`${notes[min]} augmented`);
        }
    } else if (middle - min === 3) {
        if (max - middle === 4) {
            console.log(`${notes[min]} minor`);
        } else if (max - middle === 3) {
            console.log(`${notes[min]} diminished`);
        }
    } else {
        console.log("불협화음");
    }

}
classifyTriad(["C", "E", "G"]);
classifyTriad(["C#", "F", "A"]);
classifyTriad(["G", "B", "D#"]);