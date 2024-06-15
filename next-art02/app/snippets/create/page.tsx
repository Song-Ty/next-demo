'use client'

import * as actions from '@/actions'
import { useFormState } from 'react-dom' // react hook的使用

export default function SnippetsCreatePage() {
  //   const handleCreateSnippets = actions.CreateSnippets.bind(null)
  const [formState, action] = useFormState(actions.CreateSnippets, {
    message: '',
  })

  return (
    <form action={action}>
      <h3 className={'font-bold m-3'}>Create Snippets</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            名称
          </label>
          <input
            type="text"
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            代码片段
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        {formState.message ? (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        ) : null}
        <button type={'submit'} className={'rounded p-2 bg-blue-200'}>
          创建
        </button>
      </div>
    </form>
  )
}
