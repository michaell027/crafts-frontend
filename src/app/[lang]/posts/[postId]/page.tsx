"use client";
import { useEffect } from "react";

export default function Page({ params }: { params: { postId: number } }) {
  useEffect(() => {
    // Log page views to an analytics service
    console.log("Post viewed:", params.postId);
  }, [params.postId]);
  return <div>My Post: {params.postId}</div>;
}
