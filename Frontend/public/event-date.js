function getStringDate() {
  const capturedAtDate = new Date();
  const year = capturedAtDate.getFullYear();
  const monthRaw = capturedAtDate.getMonth();
  const month =
    monthRaw + 1 < 10
      ? String.prototype.concat("0", (monthRaw + 1).toString())
      : (monthRaw + 1).toString();
  const dayRaw = capturedAtDate.getDate();
  const day = dayRaw < 10 ? String.prototype.concat("0", dayRaw.toString()) : dayRaw.toString();
  const hoursRaw = capturedAtDate.getHours();
  const hours =
    hoursRaw < 10 ? String.prototype.concat("0", hoursRaw.toString()) : hoursRaw.toString();
  const minutesRaw = capturedAtDate.getMinutes();
  const minutes =
    minutesRaw < 10
      ? String.prototype.concat("0", minutesRaw.toString())
      : minutesRaw.toString();
  const secondsRaw = capturedAtDate.getSeconds();
  const seconds =
    secondsRaw < 10
      ? String.prototype.concat("0", secondsRaw.toString())
      : secondsRaw.toString();
  const millisecondsRaw = capturedAtDate.getMilliseconds();
  // const milliseconds =
  //   millisecondsRaw < 10
  //     ? String.prototype.concat("00", millisecondsRaw.toString())
  //     : millisecondsRaw < 100
  //     ? String.prototype.concat("0", millisecondsRaw.toString())
  //     : millisecondsRaw.toString();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
