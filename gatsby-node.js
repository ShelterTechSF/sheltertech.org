const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create paginated blog index pages

  const POSTS_PER_PAGE = 5;

  const queryData = await graphql(`
    query BlogIndexPages {
      allPrismicBlogPost {
        nodes {
          id
        }
      }
    }
  `);

  const posts = queryData.data.allPrismicBlogPost.nodes;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const basePageURL = "/blog";

  for (let i = 0; i < totalPages; i += 1) {
    const url = i === 0 ? basePageURL : `${basePageURL}/${i + 1}`;
    createPage({
      path: url,
      component: path.resolve(
        __dirname,
        "src/pages/blog/BlogIndexTemplate/blogIndexTemplate.tsx"
      ),
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        currentPage: i,
        totalPages,
        basePageURL,
      },
    });
  }
};
