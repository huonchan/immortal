/* 加工 */

const greatArray = greatData
  .trim()
  .split('\n')
  .map(line => {
    const [name, value] = line.split(',');
    return {
      name: name.trim(),
      value: Number(value.trim())
    };
  });
