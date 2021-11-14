import { OutputTarget } from '../Summary';
import { PostsData } from '../PostsData';

export class ConsoleReport implements OutputTarget {
  print(report: PostsData[]): void {
    console.log(report);
  }
}
