import form from '@/components/form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/form')({
  component: form,
})
