import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter({
  selectId: (post) => post.id,
});

const initialState = postsAdapter.getInitialState({
  selectedPlatform: "All",
});

const postsSlice = createSlice({
  name: "posts",

  initialState,

  reducers: {
    addPost: {
      reducer(state, action) {
        postsAdapter.addOne(state, action);
      },

      prepare(content, platform) {
        return {
          payload: {
            id: Date.now().toString(),
            content,
            platform,
            status: "draft",
            createdAt: new Date().toISOString(),
          },
        };
      },
    },

    publishPost(state, action) {
      const post = state.entities[action.payload];

      if (post) {
        post.status = "published";
      }
    },

    deletePost(state, action) {
      postsAdapter.removeOne(state, action.payload);
    },

    updatePost(state, action) {
      postsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          content: action.payload.content,
          platform: action.payload.platform,
        },
      });
    },

    setSelectedPlatform(state, action) {
      state.selectedPlatform = action.payload;
    },
  },
});

export const {
  addPost,
  publishPost,
  deletePost,
  updatePost,
  setSelectedPlatform,
} = postsSlice.actions;

export { postsAdapter };

export default postsSlice.reducer;