unordered_map<char, int> mp;

function selectedLetter(letter) {
    if(mp[letter] == 1) { return; }

    mp[letter] = 1;
    let currButton = document.getElementById(letter);
    currButton.style.backgroundColor = "grey";
    resetTimer();
}

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        mp = {};
        let buttons = document.getElementsByClassName("letter");
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "white";
        }
    }, 5000);
}

function startTimer() {

}
