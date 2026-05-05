export type Role = 'ADMIN' | 'EDITOR' | 'VIEWER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  published: boolean;
  tags: string[];
  authorId: string;
}

export interface Comment {
  id: string;
  text: string;
  authorId: string;
  postId: string;
}

export const users: User[] = [
  {
    id: '1',
    name: 'Alice Admin',
    email: 'alice@example.com',
    role: 'ADMIN',
  },
  {
    id: '2',
    name: 'Bob Editor',
    email: 'bob@example.com',
    role: 'EDITOR',
  },
  {
    id: '3',
    name: 'Carol Viewer',
    email: 'carol@example.com',
    role: 'VIEWER',
  },
  {
    id: '4',
    name: 'Dave Editor',
    email: 'dave@example.com',
    role: 'EDITOR',
  },
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with GraphQL',
    body: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It provides a complete and understandable description of the data in your API.',
    published: true,
    tags: ['graphql', 'api', 'tutorial'],
    authorId: '2',
  },
  {
    id: '2',
    title: 'React Hooks Deep Dive',
    body: 'React Hooks allow you to use state and other React features without writing a class component. This post covers useState, useEffect, useContext, and custom hooks.',
    published: true,
    tags: ['react', 'hooks', 'javascript'],
    authorId: '2',
  },
  {
    id: '3',
    title: 'TypeScript Best Practices',
    body: 'TypeScript adds optional static typing and class-based object-oriented programming to JavaScript. Here are some best practices for writing clean, maintainable TypeScript code.',
    published: true,
    tags: ['typescript', 'javascript', 'best-practices'],
    authorId: '4',
  },
  {
    id: '4',
    title: 'Building a GraphQL API with Yoga',
    body: 'GraphQL Yoga is a batteries-included cross-platform GraphQL over HTTP spec-compliant server. This post shows you how to scaffold a production-ready API in minutes.',
    published: true,
    tags: ['graphql', 'yoga', 'api', 'tutorial'],
    authorId: '4',
  },
  {
    id: '5',
    title: 'Draft: Advanced Schema Design',
    body: 'This post is still being written. It will cover advanced schema design patterns including unions, interfaces, and custom scalars.',
    published: false,
    tags: ['graphql', 'schema', 'advanced'],
    authorId: '2',
  },
];

export const comments: Comment[] = [
  {
    id: '1',
    text: 'Great introduction! This really helped me understand GraphQL.',
    authorId: '3',
    postId: '1',
  },
  {
    id: '2',
    text: 'Could you cover subscriptions in a follow-up post?',
    authorId: '4',
    postId: '1',
  },
  {
    id: '3',
    text: 'The useEffect examples are really clear, thanks!',
    authorId: '3',
    postId: '2',
  },
  {
    id: '4',
    text: 'I wish I had found this article earlier. Saved me so much time!',
    authorId: '1',
    postId: '3',
  },
  {
    id: '5',
    text: 'GraphQL Yoga is my go-to now. Fantastic DX.',
    authorId: '1',
    postId: '4',
  },
  {
    id: '6',
    text: 'Does this work with Vercel out of the box?',
    authorId: '3',
    postId: '4',
  },
  {
    id: '7',
    text: 'Yes! Check the Vercel adapter docs.',
    authorId: '4',
    postId: '4',
  },
];
