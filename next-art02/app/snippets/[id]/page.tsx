import { notFound } from 'next/navigation'
import { db } from '@/utils/db'
import Link from 'next/link'
import * as action from '@/actions'

// TODO: 动态路由组件 文件名称用[id]命名

type SnippetsEditPageProps = {
  params: {
    id: string
  }
}

export default async function SnippetsEditPage({
  params,
}: SnippetsEditPageProps) {
  await new Promise((r) => setTimeout(r, 2000))

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id) },
  })
  if (!snippet) {
    return notFound()
  }

  const handleDle = action.deleteSnippt.bind(null, snippet.id)

  return (
    <div>
      <div className={'flex justify-between items-center m-20'}>
        <h3 className={'font-bold text-xl'}>{snippet.title}</h3>
        <div className={'flex gap-4'}>
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className={'p-2 border rounded'}
          >
            编辑
          </Link>
          <form action={handleDle}>
            <button type="submit" className={'p-2 border rounded'}>
              删除
            </button>
          </form>
        </div>
      </div>
      <pre className={'p-4 border rounded bg-gray-200 border-gray-200'}>
        <code> {snippet.code}</code>
      </pre>
    </div>
  )
}

export async function generateStaticParams() {
  const snippet = await db.snippet.findMany()

  return snippet.map((snippet) => ({
    id: snippet.id.toString,
  }))
}
