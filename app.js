// // const simpleGit = require("simple-git");
// // simpleGit().clean(simpleGit.CleanOptions.FORCE);
// // const git = simpleGit();
const exec = require("child_process").exec;
const axios = require("axios");

// exec("git init", (e, stdout, stderr) => {
//   if (e instanceof Error) {
//     console.log(e);
//     throw e;
//   }

//   console.log("standard output", stdout);
//   console.log("Standard error", stderr);
// });

// exec("git add ./index.html", (e, stdout, stderr) => {
//   if (e instanceof Error) {
//     console.log(e);
//     throw e;
//   }

//   console.log("standard output", stdout);
//   console.log("Standard error", stderr);
// });

// exec("git status", (e, stdout, stderr) => {
//   if (e instanceof Error) {
//     console.log(e);
//     throw e;
//   }

//   console.log("standard output", stdout);
//   console.log("Standard error", stderr);
// });

exec(
  "git add remote new https://github.com/valorant-dhruv/testing",
  (e, stdout, stderr) => {
    if (e instanceof Error) {
      console.log(e);
      throw e;
    }

    console.log("standard output", stdout);
    console.log("Standard error", stderr);
  }
);

// const dotenv = require("dotenv").config();

// let pat = process.env.PAT;

// // // console.log("Is this even working");

// // // // The git clone basically clones the given
// // // git.clone("https://github.com/valorant-dhruv/Timed-Quiz-App-Javascript");

// // // console.log("It is cloned to the mentioned directory");

// // //Now let us work with some more features such as git push and git pull
// const git = require("simple-git")();
// const fs = require("fs");
// const url = require("url");

// async function clonerepo(urlpassed) {
//   this.gitURL = urlpassed;
//   const localURL = url.parse(this.gitURL);

//   console.log(localURL, "This is the local url");
//   // const localURL = urlpassed;

//   //This is the name of the local repository
//   const localRepoName = (localURL.hostname + localURL.path)
//     .replace("com", "")
//     .replace("/", "")
//     .replace("/", ".")
//     .replace(".git", "");

//   this.localPath = `./${localRepoName}`;
//   this.options = ["--depth", "1"];
//   this.callback = () => {
//     console.log("DONE");
//   };

//   if (fs.existsSync(this.localPath)) {
//   } else {
//     git
//       .outputHandler((command, stdout, stderr) => {
//         stdout.pipe(process.stdout);
//         stderr.pipe(process.stderr);

//         stdout.on("data", (data) => {
//           // Print data
//           console.log(data.toString("utf8"));
//         });
//       })
//       .clone(this.gitURL, this.localPath, this.options, this.callback);
//   }
// }

// // async function adding() {
// //   // await git.init();
// //   // console.log("The init commnand has been performed");

// //   //   await git.add("README.md");

// //   // await git.addRemote(
// //   //   "upstream",
// //   //   "https://github.com/valorant-dhruv/testing.git"
// //   // );

// //   // await git.commit();
// //   // await git.commit("This is the first commit");

// //   await git.push(["upstream"]);
// // }

// // adding();

// // "https://github.com/valorant-dhruv/Timed-Quiz-App-Javascript"

// //We need a url for fetching the data
// // let url = "https://api.github.com/search/repositories?q=stars:>100000";

// // let url = "https://github.com/valorant-dhruv/Timed-Quiz-App-Javascript.git";

// let url1 =
//   "https://api.github.com/search/repositories?q=repo:valorant-dhruv/Timed-Quiz-App-Javascript";

// let urltemp;

// async function fetching() {
//   await axios.get(url1).then((response) => {
//     console.log(response.data);
//     console.log(response.data.items[0].clone_url);

//     urltemp = response.data.items[0].clone_url;

//     //Ok so we have got the url for the repository the next step is to clone this repo
//   });

//   await clonerepo(urltemp);
// }

// fetching();
