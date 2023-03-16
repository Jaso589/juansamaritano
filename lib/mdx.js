import fs from "fs";
import path from 'path';
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import mdxPrism from "mdx-prism";
import remarkCodeTitles from "remark-code-titles"

const root = process.cwd();

export const getFiles = async (type) => fs.readdirSync(path.join(root, 'data', type));

export const getFileBySlug = async (type, slug) => {
  const mdxSource = slug
  ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
  : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

const { data, content } = await matter(mdxSource);
    const source = await serialize(content,{
      mdxOptions: {
        remarkPlugins: [remarkCodeTitles, remarkGfm],
        rehypePlugins: [mdxPrism],
      },
    });

    return{
        source,
        frontmatter: {
            slug: slug || null,
            ...data,
        },
    };
};


export const getAllFilesMetadata =  async (type) =>{
    const files = fs.readdirSync(path.join(root, 'data', type));

    return files.reduce((allPosts, postSlug) => {

        const mdxSource = fs.readFileSync(path.join(root, "data",type, postSlug), 'utf-8')
        const { data } = matter(mdxSource);

        return [{...data, slug: postSlug.replace('.mdx', '')}, ...allPosts]
    },[])
};

