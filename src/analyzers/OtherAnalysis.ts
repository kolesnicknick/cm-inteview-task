import { Analyzer } from '../Summary';

import { PostsData } from '../PostsData';
import { PostsVisibility } from '../PostsVisibility';

export class OtherAnalysis implements Analyzer {
  constructor() {}

  run(posts: PostsData[]): PostsData[] {
    return posts.filter(post => !(post[5] > 10) || !(post[2] === PostsVisibility.Public) && !(post[1].length > 40));
  }

  getName(): string {
    return 'other_posts';
  }
}
