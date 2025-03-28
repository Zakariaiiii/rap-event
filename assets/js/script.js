
document.getElementById('vote-btn').addEventListener('click', function() {
    const selectedArtist = document.querySelector('input[name="artist"]:checked');
    
    if (selectedArtist) {

        alert(`شكراً لتصويتك لـ ${selectedArtist.value}!`);
        updateVotes(selectedArtist.value);
    } else {
    }
});

function updateVotes(artist) {
    const votes = {
        'BIG A': Math.floor(Math.random() * 100) + 1,
        'mirv48': Math.floor(Math.random() * 100) + 1,
        'Shaoline': Math.floor(Math.random() * 100) + 1
    };
    

    document.getElementById('bigA-votes').textContent = votes['BIG A'];
    document.getElementById('mirv48-votes').textContent = votes['mirv48'];
    document.getElementById('shaoline-votes').textContent = votes['Shaoline'];
    
    const totalVotes = votes['BIG A'] + votes['mirv48'] + votes['Shaoline'];
    if (totalVotes > 0) {
        document.getElementById('bigA-bar').style.width = `${(votes['BIG A'] / totalVotes) * 100}%`;
        document.getElementById('mirv48-bar').style.width = `${(votes['mirv48'] / totalVotes) * 100}%`;
        document.getElementById('shaoline-bar').style.width = `${(votes['Shaoline'] / totalVotes) * 100}%`;
    }
}

updateVotes();

const firebaseConfig = {
    apiKey: "AIzaSyA...",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project.firebaseio.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123...",
    appId: "1:123...:web:abc..."
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const auth = firebase.auth();