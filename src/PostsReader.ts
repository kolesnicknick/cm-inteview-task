import { CsvFileReader } from './CsvFileReader';
import { PostsData } from './PostsData';
import { dateStringToDate } from './utils';
import { PostsVisibility } from './PostsVisibility';

interface DataReader {
  read(): void;
  data: string[][];
}

export class PostsReader {
  static fromCsv(filename: string): PostsReader {
    return new PostsReader(new CsvFileReader(filename));
  }

  posts: PostsData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.posts = this.reader.data.map(
      (row: string[]): PostsData => {
        return [
          parseInt(row[0]),
          row[1],
          row[2] as PostsVisibility,
          parseInt(row[3]),
          parseInt(row[4]),
          parseInt(row[5]),
          dateStringToDate(row[6]),
        ];
      }
    );
  }
}
