const stringLength = (string) => {
  if (string.length > 10 || string.length < 1) {
    throw new Error("string is not lenght permit");
  }
  return string.length;
}

//export default stringLength;
exports.stringLength = stringLength;