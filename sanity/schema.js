import { author } from "./schemas/author";
import { blockContent } from "./schemas/blockContent";
import { category } from "./schemas/category";
import { categoryBlog } from "./schemas/categoryBlog";
import { post } from "./schemas/post";
import { project } from "./schemas/project";

export const schema = {
  types: [post,category,blockContent,author,categoryBlog,project],
}
