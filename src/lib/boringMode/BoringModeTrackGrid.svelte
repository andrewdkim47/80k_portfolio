<script>
    let selectedMood = 'All';
    const moods = ['All', 'Contemplative', 'Dark', 'HipHop', 'BoomBap'];
    const pictures = [
        { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/952346136425765.61f96b4f0840e.jpg', mood: 'Contemplative', song: './src/assets/musicFiles/duo!_1.mp3', buyLink: 'https://buy-song1.com' },
        { src: 'https://www.udiscovermusic.com/wp-content/uploads/2022/03/janelle-monae-dirty-computer.jpg', mood: 'Dark', song: './src/assets/musicFiles/deadlines_5_104bpm_Fmin.mp3', buyLink: 'https://buy-song2.com' },
        { src: 'https://lh3.googleusercontent.com/vYnAGmLOhdCYC3qj7VYkEXAsY6lu2VE0LGOBhPgSS__GjdgMwu2CZDlDjJd4up21_sCMUxovlzvrnG7i4t_o1-GRxP4nEu-w_e83brKewKL_BFiX=w960-rj-nu-e365', mood: 'HipHop', song: './src/assets/musicFiles/timeless3.mp3', buyLink: 'https://buy-song3.com' },
        { src: 'https://th.bing.com/th/id/R.6d07c28d58f666bbf99db81d299ba2e6?rik=GTxOZfpWKpJwsA&riu=http%3a%2f%2fi.imgur.com%2fKnej8M6.jpg&ehk=KOZ0ph%2fx3qrYlj3DUs1Lt9E%2fJI8w9gBWELe7RBQEiB8%3d&risl=&pid=ImgRaw&r=0', mood: 'BoomBap', song: './src/assets/musicFiles/marathon_121bpm_Emin_2.mp3', buyLink: 'https://buy-song4.com' },
        { src: 'https://th.bing.com/th/id/OIP.WMoOrLdPJq0P-ReNXaAZ0QHaHa?pid=ImgDet&w=474&h=474&rs=1', mood: 'BoomBap', song: 'src/assets/musicFiles/winter_baby_3_16bit.mp3', buyLink: 'https://buy-song5.com' },
        // ... more pictures
    ];

    function filterPictures() {
        return selectedMood === 'All' ? pictures : pictures.filter(p => p.mood === selectedMood);
    }

    let currentSong = null;
    let playingPicture = null;
    let playing = false;

    function playSong(song) {
        console.log(song)
        if (currentSong) {
            currentSong.pause();
        }
        currentSong = new Audio(song);
        currentSong.play();
    }

    function handlePictureClick(picture) {
        if (playingPicture === picture) {
            currentSong.pause();
            currentSong = null;
            playingPicture = null;
        } else {
            playSong(picture.song);
            playingPicture = picture;
        }
    }
</script>

<main>
    <select bind:value={selectedMood} class="genre-select">
        {#each moods as mood}
            <option value={mood} class="genre-option">{mood}</option>
        {/each}
    </select>

    <h2>Selected Mood: {selectedMood}</h2>

    <div class="grid">
        {#each filterPictures() as picture}
            <div class="picture {playingPicture === picture ? 'highlighted' : ''}" on:click={() => handlePictureClick(picture)}>
                <img src={picture.src} alt={picture.mood} />
            </div>
        {/each}
    </div>

    <iframe id="soundcloud-player" width="100%" height="166" scrolling="no" frameborder="no" style="display:none;"></iframe>
</main>

<style>
    main {
        margin-top: 370px;
    }

    h2 {
        color: #333;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
    .picture {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
    }
    .picture:hover {
        transform: scale(1.1);
    }
    .picture.highlighted {
        box-shadow: 0 0 15px rgb(20, 31, 250);
        transform: scale(1.05);
        animation: shadowPulse 1s infinite;
    }
    img {
        width: 100%;
        height: auto;
    }

    .genre-select {
        width: calc(100% - 40px);
        margin: 0 20px;
        height: 40px;
        border-radius: 8px;
        padding: 5px;
        font-size: 16px;
    }

    .bounce {
        animation: bounce 0.5s;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }

    @keyframes shadowPulse {
        0% {
            box-shadow: 0 0 10px rgba(49, 38, 248, 0.5);
        }
        50% {
            box-shadow: 0 0 20px rgba(11, 81, 244, 0.7);
        }
        100% {
            box-shadow: 0 0 10px rgba(32, 7, 248, 0.5).5);
        }
    }

    .pause-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2em;
        color: white;
        pointer-events: none;
    }
</style>