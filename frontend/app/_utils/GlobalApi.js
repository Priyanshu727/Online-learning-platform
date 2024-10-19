import { request } from 'graphql-request';
const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/' + process.env.NEXT_PUBLIC_HYGRAPH_PROJECT_ID + '/master';

// Function to fetch all courses
const getAllCourseList = async () => {

    const query = `
        query MyQuery {
  courseList(where: {}) {
    author
    name
    id
    free
    description
    demoUrl
    banner {
      url
      bannerSideBanner {
        url
      }
    }
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    totalChapter
    sourceCode
    tag
  }
}
    `;

    try {
        // Make the GraphQL request to Hygraph API
        const result = await request(MASTER_URL, query);
        console.log(result); // Log the result
        return result; // Return the fetched course list
    } catch (error) {
        // Catch and log any error that occurs
        console.error("Error fetching course list:", error);
        throw error; // Re-throw the error for further handling
    }
};

// Export the function directly
export default {
    getAllCourseList
};
