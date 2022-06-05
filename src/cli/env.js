process.env.RSS_car1 = 'Hyundai';
process.env.RSS_car2 = 'Kia';

function handleParsing(item) {
  console.log(`${Object.keys(item)[0]}=${Object.values(item)[0]};`);
}

export const parseEnv = () => {
  const array = Object.keys(process.env);

  let result = array.map((variable) => {
    if (variable.startsWith('RSS_')) {
      return { [variable]: process.env[variable] };
    }
  });
  result = result.filter((item) => item != null);
  result.forEach(handleParsing);
};

parseEnv();
