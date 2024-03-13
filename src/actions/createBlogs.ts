import { Blog } from "@/types";
// step-2
export const createBlog = async (data: Blog) => {
  const res = fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const blogInfo = (await res).json();

  return blogInfo;
};
