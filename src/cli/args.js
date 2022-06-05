import { argv } from 'process';
export const parseArgs = () => {
  const array = argv.slice(2, argv.length);
  const newArray = argv.slice(2, argv.length);
  array.forEach((item, index) => {
    if (item.startsWith('--')) {
      let nextItem = newArray[index + 1];
      console.log(`${item.replace('--', '')} is ${nextItem}`);
    }
  });
};
parseArgs();
