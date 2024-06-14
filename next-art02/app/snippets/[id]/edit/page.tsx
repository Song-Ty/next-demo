
type EditPageProps = {
    params: {
        id:string
    }

}
// todo 作为动态路由组件的子路由 是可以通过 porps 获取到文件定义的[id]

export default function EditPage({params}:EditPageProps) {

console.log("%c🍍🍍🍍[ EditPage ] >>>","background:pink;color: red; font-weight: bold;",params);

    return (
        <div>
            <h1>
                EditPage{params.id}
            </h1>
        </div>
    )
}
