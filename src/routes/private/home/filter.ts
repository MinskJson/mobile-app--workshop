import React, { useEffect, useState, useMemo } from "react";
import { PostItemType } from "../../../components/post/Post";

export const filtredProducts = (productsItems: PostItemType[], searchQuery: string) =>
  useMemo(() => {
    const s = searchQuery.toLowerCase();
    return searchQuery
      ? productsItems.filter(e => e.name.toLowerCase().includes(s))
      : productsItems;
  }, [searchQuery, productsItems]);

export const filtredProductsByCost = (productsItems: PostItemType[], cost: number) =>
  useMemo(() => {
    return cost
      ? productsItems.filter(e => {
          const q = cost * 10000;
          const isValid = e.prices.min <= q && e.prices.max >= q;
          return isValid;
        })
      : productsItems;
  }, [cost, productsItems]);
