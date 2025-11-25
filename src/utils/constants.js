export const names = ['Braavos', 'Reverlands', 'Westerlands', 'Crownlands'];
export const getRandomIndex = bound => Math.trunc(Math.random() * bound);
export const getBank = index => ({name: names[index]});