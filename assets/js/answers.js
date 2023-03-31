

//1) 
import songs from '/assets/js/songs.js'
console.log('Ex 1.', songs)

//2. 
const upperTitles = songs.map(song => song.title.toUpperCase());
console.log('Ex 2.', upperTitles)

//3. 
const oldSongs = songs.filter(song => song.year < 1975);
console.log('Ex 3.', oldSongs)

//4. 
const [{title: firstTitle}] = songs;
console.log('Ex 4.', firstTitle)

//5. 
const hotelCalifornia = songs.find(song => song.title === 'Hotel California');
console.log('Ex 5.', hotelCalifornia)

//6. 
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
console.log('Ex 6.', sum(1,2))

//7. 
const songInfo = songs.map(song => `${song.title} - ${song.artist} (${song.year})`);
console.log('Ex 7.', songInfo)

//8. 
const beatlesTitles = songs.filter(({artist}) => artist === 'The Beatles').map(({title}) => title);
console.log('Ex 8.', beatlesTitles)

//9. 
const totalYears = songs.reduce((acc, curr) => acc + curr.year, 0);
console.log('Ex 9.', totalYears)

// //10. 
// // In a separate module file called utils.js
// export const averageYear = songs => songs.reduce((acc, curr) => acc + curr.year, 0) / songs.length;

// // In the main file
// import {averageYear} from './utils.js';
// const avgYear = averageYear(songs);
// console.log('Ex 10.', avgYear)

//11. 
const longestTitleSong = songs.find(song => song.title.length === Math.max(...songs.map(({title}) => title.length)));
console.log('Ex 11.', longestTitleSong)

//12. 
const { title, artist, year } = songs[0];
console.log('Ex 12.', `${title} by ${artist} was released in ${year}`);

//13. 
const [, ...remainingSongs] = songs;
console.log('Ex 13.', remainingSongs)

// //14. 
// // utils.js
// export const filter = (array, callback) => array.filter(callback);

// // main.js
// import { filter } from './utils.js';
// const loveSongs = filter(songs, ({title}) => title.includes("Love"));
// console.log('Ex 14.', loveSongs)

//15. 
const allTitlesAreLongEnough = songs.every(({title}) => title.length >= 5);
console.log('Ex 15.', allTitlesAreLongEnough)

//16. 
const hasEightiesSong = songs.some(({year}) => year >= 1980 && year < 1990);
console.log('Ex 16.', hasEightiesSong)

//17. 
const letItBe = songs.find(({title}) => title === "Let It Be");
const releaseString = `${letItBe.artist} released ${letItBe.title} in ${letItBe.year}.`;
console.log('Ex 17.', releaseString)

//18. 
const artistNames = songs.map(({artist}) => artist);
console.log('Ex 18.', artistNames)
