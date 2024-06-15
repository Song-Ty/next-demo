import { notFound } from 'next/navigation'
import { db } from '@/utils/db'
import SnipptEditForm from '@/components/SnipptEditForm'

type EditPageProps = {
  params: {
    id: string
  }
}

// todo 作为动态路由组件的子路由 是可以通过 porps 获取到文件定义的[id]

export default async function EditPage({ params }: EditPageProps) {
  const id = parseInt(params.id)
  const snippet = await db.snippet.findFirst({
    where: { id },
  })
  if (!snippet) return notFound()

  return (
    <div>
      <h1>EditPage</h1>
      <SnipptEditForm snippt={snippet} />
    </div>
  )
}
