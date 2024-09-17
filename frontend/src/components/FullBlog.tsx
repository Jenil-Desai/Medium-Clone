import { Blog } from "../hooks";
import Avatar from "./Avatar";

export default function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
        <div className="col-span-8">
          <div className="text-5xl font-extrabold">{blog.title}</div>
          <div className="text-slate-500 pt-2">Posted On 9th November 2024</div>
          <div className="pt-4">{blog.content}</div>
        </div>
        <div className="col-span-4">
          <div className="text-slate-600 text-lg">Author</div>
          <div className="flex">
            <div className="pr-4 flex justify-center flex-col">
              <Avatar name={blog.author.name || "Anonymous User"} size={8} />
            </div>
            <div>
              <div className="text-xl font-bold">{blog.author.name || "Anonymous User"}</div>
              <div className="pt-2 text-slate-500">Random Catch Phrase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
