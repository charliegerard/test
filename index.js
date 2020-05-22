module.exports = {
  onBuild: () => {
    console.log("onBuild: I run while build commands are being executed ⚙️");
  },
  onPostBuild: () => {
    console.log("onPostBuild: I run _after_ build commands are executed ✅");
  },
  onSuccess: () => {
    if (process.env.NODE_ENV === "staging") {
      console.log("i get staging!!");
    }
    if (process.env.CONTEXT) {
      console.log(process.env.CONTEXT);
    }
    console.log("onSuccess: I run on build success 🎉");
  },
  onError: () => {
    console.log("onError: I run on build error 🚒");
  },
  onEnd: () => {
    console.log(
      "onEnd: I run on build error or success when the build process ends 🎬"
    );
  },
};
