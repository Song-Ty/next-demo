export default function DashboardPage(params:any) {
console.log("%c🍍🍍🍍[ DashboardParams ] >>>","background:pink;color: red; font-weight: bold;",params);
    return (
        <div className={"container flex justify-center items-center h-screen"}>
            <h1 className={"text-3xl font-bold"}>
                DashboardPage
            </h1>
        </div>
    )
}
