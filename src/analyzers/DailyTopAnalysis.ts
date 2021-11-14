import { Analyzer } from '../Summary';

import { PostsData } from '../PostsData';

export class DailyTopAnalysis implements Analyzer {
  constructor() {
  }

  run(posts: PostsData[]): PostsData[] {
    return [posts.sort((first: PostsData, second: PostsData) => second[3] - first[3])[0]];
  }

  getName(): string {
    return 'daily_top_posts';
  }
}
