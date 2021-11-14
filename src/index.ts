import { Summary } from './Summary';
import { PostsReader } from './PostsReader';
import { CSVReport } from './report-targets/CSVReport';
import { JSONReport } from './report-targets/JSONReport';

const postsReader = PostsReader.fromCsv('posts.csv');

// const summaryCSV = Summary.postsAnalysisReport(new CSVReport());
// postsReader.load();
// summaryCSV.buildAndPrintReports(postsReader.posts);

const summaryJSON = Summary.postsAnalysisReport(new JSONReport());
postsReader.load();
summaryJSON.buildAndPrintReports(postsReader.posts);
