import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {
  }

  read(): void {
    const data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map(
      (row: string): string[] => {
        return row.split(',');
      }
    );
    data.shift();
    this.data = data;
  }
}
