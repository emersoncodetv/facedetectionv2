const video = document.getElementById("video");

// video.setAttribute("autoplay", "");
// video.setAttribute("muted", "");
// video.setAttribute("playsinline", "");

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("./models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
  faceapi.nets.faceExpressionNet.loadFromUri("./models")
]).then(startVideo);

function startVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(stream => {
      this.video.srcObject = stream;
      /* use the stream */
    })
    .catch(function(err) {
      console.error(err);
      /* handle the error */
    });
}

function handleFloat(number) {
  floatNumber = Number(number)
    .toFixed(4)
    .replace(/\.?0+$/, "");

  intNumber = Math.round(Number.parseFloat(floatNumber) * 1000);

  return intNumber.toString();
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    let expressionsToSave = [];

    detections.forEach(value => {
      expressionsToSave = expressionsToSave.concat([
        { key: "neutral", value: handleFloat(value.expressions.neutral) },
        { key: "happy", value: handleFloat(value.expressions.happy) },
        { key: "sad", value: handleFloat(value.expressions.sad) },
        { key: "angry", value: handleFloat(value.expressions.angry) },
        { key: "fearful", value: handleFloat(value.expressions.fearful) },
        { key: "disgusted", value: handleFloat(value.expressions.disgusted) },
        { key: "surprised", value: handleFloat(value.expressions.surprised) }
      ]);
    });
    // console.log(JSON.stringify(expressionsToSave));
    fetch("http://129.146.143.38/insert", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(expressionsToSave)
    });
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 5000);
});

// H7EskEQ:{9sbN{JnE2#M
