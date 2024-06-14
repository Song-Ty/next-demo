
import {redirect} from "next/navigation";
import {db} from "@/utils/db"

export default function SnippetsCreatePage() {


    async function CreateSnippets(formData: FormData) {
        "use server" // TODO 注释表示这个方法在进行服务器操作 访问db数据库
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;
        // 存储到数据库中
      const snippet= await db.snippet.create({
            data:{
                title,
                code
            }
        })
        redirect("/") // 服务端重定向路由跳转方法
    }
    return (
        <form action={CreateSnippets}>
            <h3 className={"font-bold m-3"}>Create Snippets</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">名称</label>
                    <input
                        type="text"
                        name="title"
                        className="border rounded p-2 w-full"
                        id="title"
                    />
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">代码片段</label>
                    <textarea
                        name="code"
                        className="border rounded p-2 w-full"
                        id="code"
                    />
                </div>
                <button
                    type={"submit"}
                    className={"rounded p-2 bg-blue-200"}>
                    创建
                </button>
            </div>
        </form>
    )
}
