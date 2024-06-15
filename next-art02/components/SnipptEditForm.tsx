// 'use client';
// export const SnipptEditForm = (params: any) => {};
// export default SnipptEditForm;

'use client' //? 客户端组件
import type { Snippet } from '@prisma/client'
import { Editor } from '@monaco-editor/react'
import { useState } from 'react'
import * as actions from '@/actions'

type SnippitEditFormProps = {
  snippt: Snippet
}

export default function SnipptEditForm({ snippt }: SnippitEditFormProps) {
  const [code, setCode] = useState(snippt.code)
  const handleEditChange = (value: string = '') => {
    setCode(value)
  }
  //TODO: 客户端与服务器交互方式
  // 第一种
  const handleUpdateSnippt = actions.updateSnippt.bind(null, snippt.id, code)

  // const handleUpdateSnippt = () => {
  //   actions.updateSnippt(snippt.id, code)
  // }

  return (
    <div>
      <Editor
        height={'40vh'}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippt.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditChange}
      />
      {/* 第一种 */}
      <form action={handleUpdateSnippt}>
        <button type="submit" className="p-2 border rounded">
          更新
        </button>
      </form>

      {/* <button onClick={handleUpdateSnippt}>更新</button> */}
    </div>
  )
}
