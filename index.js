const YoutubeMp3Downloader = require("youtube-mp3-downloader");

//Configure YoutubeMp3Downloader with your settings
const ytDown = new YoutubeMp3Downloader({
  outputPath: "./", // Output file location (default: the home directory)
  youtubeVideoQuality: "highestaudio", // Desired video quality (default: highestaudio)
  queueParallelism: 2, // Download parallelism (default: 1)
  progressTimeout: 2000, // Interval in ms for the progress reports (default: 1000)
});

// Download video and save as MP3 file
ytDown.download("qGYbann2XCw");

ytDown.on("progress", (data) => {
  console.log(`${data.progress.percentage.toFixed(2)}%`);
});

ytDown.on("error", (error) => console.log(error));

ytDown.on("finished", (err, data) => console.log("Done!"));
