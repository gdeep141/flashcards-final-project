const cards = [1, 2, 3, 4, 5, 6, 7];
let splitCards = [];
const rowSize = 3;
for (let i = 0; i < cards.length; i += rowSize) {
  let row = cards.slice(i, i + rowSize);
  if (row.length < rowSize) {
    row = row.concat(Array(rowSize - row.length).fill());
  }
  splitCards.push([row]);
}

splitCards.forEach((row) => {
  row.forEach((col) => {
    console.log(`col`, col);
  });
});
