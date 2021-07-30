const { createCipheriv, createHash } = require("crypto");
const { stdout } = require("process");

const makeHashValue = () => {
  const hash = createHash("sha256");
  const input = "test.js";
  console.log(hash.update(input).digest("base64"));
};

const makeAES = (plainText, key, iv) => {
  const AESChipher = createCipheriv("aes-256-cbc", key, iv);
  let encryptedData = AESChipher.update(plainText, "utf-8", "base64");
  encryptedData += AESChipher.final("base64");
  console.log(encryptedData);
};

makeHashValue();
makeAES(
  "!Kwic123테스트",
  "H3uVnnOnNIXXsH63CsgswUsmICSCdVsn",
  "dwUgwmwOndnJOmOX"
);
