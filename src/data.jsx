import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Changing Winds",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/312458b974ab45c795d75ec3f0259caa3989103a-1024x1024.jpg",
      artist: "knowmadic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41654",
      color: ["#F7BF75", "#B15353"],
      id: uuidv4(),
      active: true,
    },
    {
        name: "Oh Lets Ride",
        cover:
          "https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg",
        artist: "Taddy Ropin",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=45229",
        color: ["#E5C386", "#6C4F3D"],
        id: uuidv4(),
        active: false,
      },
    {
      name: "Flux",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-300x300.jpg",
      artist: "Sebastian Kamae, Dayle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16207",
      color: ["#FCB38A", "#892D42"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-300x300.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#F8C2B4", "#6D5CA6"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-300x300.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#7A407C", "#C2487B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-300x300.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#FC989E", "#75AAC3"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-300x300.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#E1B270", "#153E44"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
