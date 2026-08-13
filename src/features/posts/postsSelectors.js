import { createSelector } from "@reduxjs/toolkit";
import { postsAdapter } from "./postsSlice";

// Get normalized data from Redux state
const adapterSelectors = postsAdapter.getSelectors(
  (state) => state.posts
);

// Get all posts
export const selectAllPosts = adapterSelectors.selectAll;

// Get posts by ID
export const selectPostEntities =
  adapterSelectors.selectEntities;

// Get selected platform
export const selectSelectedPlatform = (state) =>
  state.posts.selectedPlatform;

// Get draft posts
export const selectDraftPosts = createSelector(
  [selectAllPosts],
  (posts) =>
    posts.filter((post) => post.status === "draft")
);

// Get published posts
export const selectPublishedPosts = createSelector(
  [selectAllPosts],
  (posts) =>
    posts.filter((post) => post.status === "published")
);

// Get total number of posts
export const selectPostCount = createSelector(
  [selectAllPosts],
  (posts) => posts.length
);

// Get number of drafts
export const selectDraftCount = createSelector(
  [selectDraftPosts],
  (posts) => posts.length
);

// Get number of published posts
export const selectPublishedCount = createSelector(
  [selectPublishedPosts],
  (posts) => posts.length
);

// Get posts according to selected platform
export const selectPostsByPlatform = createSelector(
  [selectAllPosts, selectSelectedPlatform],
  (posts, platform) => {
    if (platform === "All") {
      return posts;
    }

    return posts.filter(
      (post) => post.platform === platform
    );
  }
);