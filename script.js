function showMessage() {
    alert("مرحبا! هذا أول موقع لك 🎉");
}
document.addEventListener("DOMContentLoaded", function () {
    let votes = {
        "BIG A": 0,
        "mirv48": 0,
        "Shaoline": 0
    };

    const voteBtn = document.getElementById("vote-btn");

    voteBtn.addEventListener("click", function () {
        const selectedArtist = document.querySelector('input[name="artist"]:checked');
        
        if (selectedArtist) {
            votes[selectedArtist.value]++;
            updateResults();
            alert("شكراً لتصويتك!");
        } else {
            alert("يرجى اختيار فنان للتصويت.");
        }
    });

    function updateResults() {
        document.getElementById("bigA-votes").innerText = votes["BIG A"];
        document.getElementById("mirv48-votes").innerText = votes["mirv48"];
        document.getElementById("shaoline-votes").innerText = votes["Shaoline"];
    }
});
