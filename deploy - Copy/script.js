console.log("Let's start javascript");

let currentSong = new Audio();
let songs = [];
let currFolder = "";

// Get playbar elements
const play = document.getElementById("play");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

// Utility: format time (MM:SS)
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// ✅ Load songs from info.json of given folder
async function getSongs(folder) {
    currFolder = folder;

    let response = await fetch(`/${folder}/info.json`);
    let data = await response.json();
    songs = data.songs;

    // Show songs in playlist
    let songUL = document.querySelector(".songlist ul");
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML += `
            <li>
                <img class="invert" src="music-svgrepo-com.svg" width="23" alt="">
                <div class="info">
                    <div>${song}</div>
                    <div>Unknown</div>
                </div>
                <div class="playnow">
                    <span>Play now</span>
                    <img class="invert" src="play.svg" width="19" alt="">
                </div>
            </li>`;
    }

    // Click → play selected song
    Array.from(document.querySelectorAll(".songlist li")).forEach(e => {
        e.addEventListener("click", () => {
            playMusic(e.querySelector(".info div").innerText.trim());
        });
    });

    return songs;
}

// ✅ Play a song
const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track;

    if (!pause) {
        currentSong.play();
        play.src = "pause.svg";
    }

    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

// ✅ Display albums from albums.json
async function displayAlbums() {
    try {
        let response = await fetch(`/songs/albums.json`);
        if (!response.ok) throw new Error("albums.json not found");
        let albums = await response.json();

        if (!Array.isArray(albums)) throw new Error("albums.json must be an array");

        let cardContainer = document.querySelector(".cardcontainer");
        cardContainer.innerHTML = "";

        albums.forEach(album => {
            cardContainer.innerHTML += `
              <div data-folder="songs/${album.folder}" class="card">
                <img src="${album.cover}" alt="">
                <h4>${album.title}</h4>
                <p>${album.description}</p>
             
              </div>`;
        });

        // Album click → load songs
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", async () => {
                songs = await getSongs(card.dataset.folder);
                playMusic(songs[0]);
            });
        });

        return albums;

    } catch (error) {
        console.error("Error loading albums:", error.message);
        return [];
    }
}

// ✅ Main app logic
async function main() {
    // Load albums
    let albums = await displayAlbums();

    // Auto-load first album
    if (albums.length > 0) {
        songs = await getSongs(`songs/${albums[0].folder}`);
        playMusic(songs[0], true); // don't autoplay
    }

    // Play/pause button
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "pause.svg";
        } else {
            currentSong.pause();
            play.src = "play.svg";
        }
    });

    // Time update (playbar progress)
    currentSong.addEventListener("timeupdate", () => {
        let current = currentSong.currentTime;
        let duration = currentSong.duration;

        document.querySelector(".songtime").innerHTML =
            `${secondsToMinutesSeconds(current)} / ${secondsToMinutesSeconds(duration)}`;

        document.querySelector(".circle").style.left =
            (current / duration) * 100 + "%";
    });

    // Seekbar click (jump to position)
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    });

    // Hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    // Close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    });

    // Previous button
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").pop());
        if ((index - 1) >= 0) playMusic(songs[9]);
    });

    // Next button
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").pop());
        if ((index) < songs.length) 
            { playMusic(songs[index + 1]);
    }else{
        playMusic(songs[0])
    }
    });

    // Volume slider
    document.querySelector(".range input").addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;

        let volumeIcon = document.querySelector(".volume>img");

        if (currentSong.volume > 0) {
            volumeIcon.src = volumeIcon.src.replace("mute.svg", "volume.svg");
        } else {
            volumeIcon.src = volumeIcon.src.replace("volume.svg", "mute.svg");
        }
    });

    // Volume button toggle
    document.querySelector(".volume>img").addEventListener("click", e => {
        let input = document.querySelector(".range input");
        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg");
            currentSong.volume = 0;
            input.value = 0;
        } else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg");
            currentSong.volume = 0.1;
            input.value = 10;
        }
    });
}

main();
