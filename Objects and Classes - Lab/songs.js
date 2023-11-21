function songs(inputArr) {
    let songsArr = [];
    let songsNumber = inputArr[0];
    let searchListType = inputArr[inputArr.length - 1];

    class Song {
        constructor(listType, name, time) {
            this.listType = listType,
                this.name = name,
                this.time = time
        }
    }

    for (let index = 1; index <= songsNumber; index++) {

        const [listType, name, time] = inputArr[index].split("_");
        let song = new Song(listType, name, time);
        songsArr.push(song);
    }

    for (const songData of songsArr) {

        if (songData.listType === searchListType || searchListType === "all") {
            console.log(songData.name);
        }
    }
}

songs([2,
    `like_Replay_3:15`,
    `ban_Photoshop_3:48`,
    `all`]
)