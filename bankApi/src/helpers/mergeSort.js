const fs = require('fs');
const readline = require('readline');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);

const mergeSortAndWriteToFile = async (inputFilePath, outputFilePath) => {
  const data = await readCSVFile(inputFilePath);
  const sortedData = await mergeSortRecursive(data);
  await writeCSVFile(outputFilePath, sortedData);
  console.log('Sorting and writing to file completed successfully.');
};

const readCSVFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const data = [];
    const lineReader = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity
    });

    lineReader.on('line', (line) => {
      const [timestamp, bankName, bankEvent, description] = line.split(',');
      data.push({ timestamp, bankName, bankEvent, description });
    });

    lineReader.on('close', () => {
      resolve(data);
    });

    lineReader.on('error', (error) => {
      reject(error);
    });
  });
};

const mergeSortRecursive = async (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = await mergeSortRecursive(arr.slice(0, middle));
  const right = await mergeSortRecursive(arr.slice(middle));

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].timestamp < right[rightIndex].timestamp) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const writeCSVFile = async (filePath, data) => {
  const lines = data.map(({ timestamp, bankName, bankEvent, description }) =>
    `${timestamp},${bankName},${bankEvent},${description}`
  );
  const content = lines.join('\n');
  await writeFileAsync(filePath, content, 'utf8');
};

module.exports = { mergeSortAndWriteToFile }
