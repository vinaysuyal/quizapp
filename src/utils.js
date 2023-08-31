export function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}
export function convertSecondsToMinutesAndSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes} minutes and ${remainingSeconds} seconds`;
}
export function decodeHTMLEntities(encodedText) {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(encodedText, "text/html").body
    .textContent;
  return decodedString;
}
