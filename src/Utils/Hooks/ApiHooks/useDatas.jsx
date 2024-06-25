import { useQueries } from "@tanstack/react-query";
import React from "react";
import api from "../../Api/api";

const fetchs = {
  categories: async () => {
    const r = await api.get("/category");
    const d = r.data;
    return d;
  },

  courses: async () => {
    const r = await api.get("/courses");
    const d = r.data;
    return d;
  },

  articles: async () => {
    const r = await api.get("/articles");
    const d = r.data;
    return d;
  },

  tickets: async () => {
    const r = await api.get("/tickets");
    const d = r.data;
    return d;
  },

  menus: async () => {
    const r = await api.get("/menus");
    const d = r.data;
    return d;
  },

  comments: async () => {
    const r = await api.get("/comments");
    const d = r.data;
    return d;
  },
  offs: async () => {
    const r = await api.get("/offs");
    const d = r.data;
    return d;
  },
  users: async () => {
    const r = await api.get("/users");
    const d = r.data;
    return d;
  },
};

export const { users, articles, categories, comments, courses, menus, offs, tickets } =
  fetchs;

const useDatas = () => {
  return useQueries({
    queries: [
      {
        queryKey: ["courses"],
        queryFn: courses,
        staleTime: Infinity
      },
      {
        queryKey: ["users"],
        queryFn: users,
        staleTime: Infinity,
      },
      {
        queryKey: ["categories"],
        queryFn: categories,
        staleTime: Infinity,
      },
      {
        queryKey: ["articles"],
        queryFn: articles,
        staleTime: Infinity,
      },
      {
        queryKey: ["comments"],
        queryFn: comments,
        staleTime: Infinity,
      },
      {
        queryKey: ["menus"],
        queryFn: menus,
        staleTime: Infinity,
      },
      {
        queryKey: ["tickets"],
        queryFn: tickets,
        staleTime: Infinity,
      },
    ],
    combine: results => {
      return {
        data: results.map((result) => result.data),
        pending: results.map((result) => result.isPending)
      }
    }
  });
};

export default useDatas;
