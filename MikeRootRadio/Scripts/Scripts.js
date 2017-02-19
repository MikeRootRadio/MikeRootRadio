$(document).ready(function () {

    var categories = [
        ["All",[]],
        ["Electronic",
            [
                ["Corrupted Signals", "corrupted-signals.mp3"],
                ["Battleground", "battleground.mp3"],
                ["Cruise Control", "cruise-control.mp3"],
                ["Asynchronous", "asynchronous.mp3"],
                ["Skyline", "skyline.mp3"],
                ["Artifical Arpeggio", "artificial-arpeggio.mp3"],
                ["Bit Stream", "bit-stream.mp3"],
                ["Fall of an Empire", "fall-of-an-empire.mp3"],
                ["Digital Night", "digital-night.mp3"],
                ["A.I.", "ai.mp3"],
                ["A Place in the Sky", "a-place-in-the-sky.mp3"],
                ["Struck Down", "struck-down.mp3"],
                ["Stack Overflow", "stack-overflow.mp3"],
                ["Voices", "voices.mp3"],
                ["Keys in Motion", "keys-in-motion.mp3"],
                ["Should Have Known", "should-have-known.mp3"],
                ["Club Midnight", "club-midnight.mp3"],
                ["Piano Beat", "piano-beat.mp3"],
                ["Flight to Feren", "flight-to-feren.mp3"]
            ]
        ],
        ["Soundtrack",

        ],
        ["Piano",

        ]

    ];

    var i = 0,
        len = categories.length,
        categoryList = $("#CategoryList");

    for (; i < len; i++) {
        var li = document.createElement("LI");
        li.className = "category";
        li.id = "Category" + i;
        li.innerHTML = categories[i][0];;
        categoryList.append(li);
    }

    $(".category").click(function () {
        var id = $(this).attr("id");
        $(".category").css("color", "white");
        $(this).css("color", "deepskyblue");
        var number = id.replace("Category", "");
        var position = parseInt((number * 36) - 8);
        $("#CategoryPointer").css("top", position + "px");

        var songArray = categories[number][1],
            ii = 0,
            songLen = categories[number][1].length,
            songList = $("#SongList");

        for (; ii < songLen; ii++) {
            var li = document.createElement("LI");
            li.className = "song";
            li.id = songArray[ii][1];
            li.innerHTML = songArray[ii][0];
            li.onclick = function () {
                $("#NowPlaying").css("visibility", "visible");
                $(".song").css("color", "white");
                event.target.style.color = "deepskyblue";
                document.getElementById("NowPlaying").src = "../../Content/Music/" + event.target.id;
                document.getElementById("NowPlaying").play();
            };
            songList.append(li);
        }

    });

});