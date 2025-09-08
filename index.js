import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";
import gradient from "gradient-string";
import boxen from "boxen";
import dayjs from "dayjs";

const args = process.argv.slice(2);
let namaNim = args.length > 0 ? args.join(" ") : "Alda Aprisagita - F1D022032";

const now = dayjs().format("dddd, DD MMMM YYYY HH:mm:ss");

console.log(gradient.rainbow("=========================================="));
console.log(chalk.blue.bold("NAMA : ") + chalk.blue("Alda Dwi Aprisagita"));
console.log(chalk.cyan.bold("NIM  : ") + chalk.cyan("F1D022032"));
console.log(gradient.rainbow("=========================================="));

console.log(
  cowsay.say({
    text: "Believe you can and you're halfway there",
    f: "dragon",
  })
);

figlet("Alda Dwi Aprisagita", (err, data) => {
  console.log(gradient.pastel.multiline(data));
});

const box = boxen(`Tanggal & Waktu: ${now}`, {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  borderColor: "cyan",
});
console.log(box);
