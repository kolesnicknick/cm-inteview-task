import fs from 'fs';
import { OutputTarget } from '../Summary';
import { PostsData } from '../PostsData';

export class CSVReport implements OutputTarget {
  print(report: PostsData[], fileName?: string): void {
    const file: string = fileName ? `${process.cwd()}/reports/${fileName}.csv` : `${process.cwd()}/reports/report.csv`
    const csv: string = report.map(post => post.join(',')).join('\n')

    fs.writeFileSync(file, csv);
  }
}
