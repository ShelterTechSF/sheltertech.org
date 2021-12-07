const path = require("path");

/** Create paginated blog post index pages, filtered by topic.
 *
 * `topic` should be a BlogPostTopic uid, or null for the case where we list all
 * posts regardless of topic.
 */
const createBlogIndexPagesForTopic = async ({ topic, graphql, actions }) => {
  const { createPage } = actions;

  const POSTS_PER_PAGE = 5;

  const topicFilter = topic ? { data: { topic: { uid: { eq: topic } } } } : {};
  const queryData = await graphql(
    `
      query BlogIndexPages($topicFilter: PrismicBlogPostFilterInput) {
        allPrismicBlogPost(filter: $topicFilter) {
          nodes {
            id
          }
        }
      }
    `,
    { topicFilter }
  );

  const posts = queryData.data.allPrismicBlogPost.nodes;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const basePageURL = topic ? `/blog/${topic}` : "/blog";

  for (let i = 0; i < totalPages; i += 1) {
    const url = i === 0 ? basePageURL : `${basePageURL}/${i + 1}`;
    createPage({
      path: url,
      component: path.resolve(
        __dirname,
        "src/templates/BlogIndexTemplate/blogIndexTemplate.tsx"
      ),
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        currentPage: i,
        totalPages,
        basePageURL,
        filter: topicFilter,
        topic,
      },
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const blogIndex = createBlogIndexPagesForTopic({
    topic: null,
    graphql,
    actions,
  });

  const blogPostTopics = await graphql(`
    query BlogIndexPages {
      allPrismicBlogPostTopic {
        nodes {
          uid
        }
      }
    }
  `);
  const blogTopicIndexes =
    blogPostTopics.data.allPrismicBlogPostTopic.nodes.map((topic) =>
      createBlogIndexPagesForTopic({ topic: topic.uid, graphql, actions })
    );

  // Even though we don't explicitly do anything with the results of the async
  // function calls, this await will cause any exceptions encountered in the
  // async calls to be thrown here. This is important in order to avoid silently
  // dropping exceptions.
  await Promise.all([blogIndex, ...blogTopicIndexes]);
};
