'use server' //TODO: 服务器操作与数据库进行交互
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { db } from '@/utils/db'

// 创建数据
export const CreateSnippets = async (
  formState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get('title')
    const code = formData.get('code')

    if (typeof title !== 'string' || !title.trim()) {
      return {
        message: 'title 不能为空t',
      }
    }
    if (typeof code !== 'string' || !code.trim()) {
      return {
        message: 'code 不能为空t',
      }
    }

    // 存储到数据库中
    await db.snippet.create({
      data: {
        title,
        code,
      },
    })
    // throw Error('创建失败')
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      }
    }
  }
  revalidatePath(`/`) // TODO： 当数据发生改变时，更新缓存机制的一种方式
  redirect('/') // 服务端重定向路由跳转方法
}

//  更新数据
export const updateSnippt = async (id: number, code: string) => {
  await db.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  })

  redirect(`/snippets/${id}`)
}

// 删除数据
export const deleteSnippt = async (id: number) => {
  await db.snippet.delete({ where: { id } })

  revalidatePath(`/`)
  redirect(`/`)
}
