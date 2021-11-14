import fs from 'fs';
import { OutputTarget } from '../Summary';
import { PostsData } from '../PostsData';

export class JSONReport implements OutputTarget {
  print(report: PostsData[], fileName?: string): void {
    const file: string = fileName ? `${process.cwd()}/reports/${fileName}.json` : `${process.cwd()}/reports/report.json`;

    const json: string = JSON.stringify(report.map(item => {
      return {
        id: item[0],
        title: item[1],
        privacy: item[2],
        likes: item[3],
        views: item[4],
        comments: item[5],
        timestamp: item[6],
      };
    }));

    fs.writeFileSync(file, json);
  }
}
