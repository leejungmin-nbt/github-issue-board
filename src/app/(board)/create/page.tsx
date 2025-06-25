// src/app/(board)/create/page.tsx
'use client'

import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

interface FormData {
  title: string
  body: string
}

export default function CreateIssuePage() {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch('/api/github/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!res.ok) throw new Error('Issue creation failed')
      return res.json()
    },
    onSuccess: () => reset()
  })

  const onSubmit = (data: FormData) => mutation.mutate(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='title' {...register('title')} required />
      <textarea placeholder='body' {...register('body')} />
      <button type='submit' disabled={mutation.isPending}>
        {mutation.isPending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}
