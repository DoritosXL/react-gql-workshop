import { createSchema } from 'graphql-yoga';
import { users, posts, comments } from './data.js';
import type { User, Post, Comment } from './data.js';

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      users: [User!]!
      user(id: ID!): User
      posts: [Post!]!
      post(id: ID!): Post
      postsByAuthor(authorId: ID!): [Post!]!
      postsByTag(tag: String!): [Post!]!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      role: Role!
      posts: [Post!]!
      comments: [Comment!]!
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
      tags: [String!]!
      author: User!
      comments: [Comment!]!
    }

    type Comment {
      id: ID!
      text: String!
      author: User!
      post: Post!
    }

    enum Role {
      ADMIN
      EDITOR
      VIEWER
    }
  `,
  resolvers: {
    Query: {
      users: () => users,
      user: (_: unknown, { id }: { id: string }) =>
        users.find((u) => u.id === id) ?? null,
      posts: () => posts.filter((p) => p.published),
      post: (_: unknown, { id }: { id: string }) =>
        posts.find((p) => p.id === id) ?? null,
      postsByAuthor: (_: unknown, { authorId }: { authorId: string }) =>
        posts.filter((p) => p.authorId === authorId && p.published),
      postsByTag: (_: unknown, { tag }: { tag: string }) =>
        posts.filter((p) => p.tags.includes(tag) && p.published),
    },
    User: {
      posts: (user: User) =>
        posts.filter((p) => p.authorId === user.id && p.published),
      comments: (user: User) =>
        comments.filter((c) => c.authorId === user.id),
    },
    Post: {
      author: (post: Post) => users.find((u) => u.id === post.authorId)!,
      comments: (post: Post) =>
        comments.filter((c) => c.postId === post.id),
    },
    Comment: {
      author: (comment: Comment) =>
        users.find((u) => u.id === comment.authorId)!,
      post: (comment: Comment) =>
        posts.find((p) => p.id === comment.postId)!,
    },
  },
});
