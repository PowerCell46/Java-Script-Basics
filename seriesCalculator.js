function series(input) {

let nameOfTheSeries = input[0];
let numberOfSeasons = Number(input[1]);
let numberOfEpisodes = Number(input[2]);
let timeForOneEpisode = Number(input[3]);
let adsTime = (timeForOneEpisode/100) * 20;
let totalTimeForOneEp = timeForOneEpisode + adsTime;
let totalTimeFor1Season = totalTimeForOneEp * numberOfEpisodes;
let totalTime = (numberOfSeasons * totalTimeFor1Season) + (10 * numberOfSeasons);


console.log("Total time needed to watch the " + nameOfTheSeries + " series is " + Math.floor(totalTime) + " minutes.");
}
series(["Riverdale",

"3",

"21",

"45"])