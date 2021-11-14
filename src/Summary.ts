import { PostsData } from './PostsData';
import { DailyTopAnalysis } from './analyzers/DailyTopAnalysis';
import { TopAnalysis } from './analyzers/TopAnalysis';
import { OtherAnalysis } from './analyzers/OtherAnalysis';

export interface Analyzer {
  getName(): string;
  run(posts: PostsData[]): PostsData[];
}

export interface OutputTarget {
  print(report: PostsData[], outputName: string): void;
}

export class Summary {
  static postsAnalysisReport(outputTarget: OutputTarget): Summary {
    return new Summary([new TopAnalysis(), new DailyTopAnalysis(), new OtherAnalysis()], outputTarget);
  }

  constructor(public analyzers: Analyzer[], public outputTarget: OutputTarget) {}

  private buildAndPrintReport(posts: PostsData[], analyzer: Analyzer): void {
    const output = analyzer.run(posts);
    this.outputTarget.print(output, analyzer.getName());
  }

  public buildAndPrintReports(posts: PostsData[]){
    this.analyzers.forEach(analyzer => this.buildAndPrintReport(posts, analyzer));
  }
}
