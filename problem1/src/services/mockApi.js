import { mockUsers, mockTrendingPosts, mockFeed } from "./mockData";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async getUsers() {
    await delay(800);
    return mockUsers;
  },

  async getTrendingPosts() {
    await delay(600);
    return mockTrendingPosts;
  },

  async getFeed() {
    await delay(400);
    return mockFeed;
  },
};
