import {db} from "@/utils/db"
import Link from "next/link";

export default async function  Home() {
const snippets = await db.snippet.findMany()
  // console.log("%c🍍🍍🍍[ snippets ] >>>","background:pink;color: red; font-weight: bold;",snippets);
  //todo -> 获取数据 map遍历处理
  const renderedSnippets = snippets.map((snippet) => {
    return(
        <Link key={snippet.id}  href={`/snippets/${snippet.id}`} className={" border p-2 flex justify-between items-center"}>
        <div>{snippet.title}</div>
        <div>View</div>
        </Link>
    )
  })
  return (
   <div className={"mt-10"}>
     <div className={"flex justify-between  m-2"}>
         <h3 className={"font-bold text-xl"}>Create Snippets</h3>
         <Link href={"/snippets/create"} className={"border  p-2"}>新增</Link>
     </div>
     <div className={"flex flex-col gap-2"}>{renderedSnippets}</div>

   </div>
  );
}
