import { createFileRoute } from '@tanstack/react-router'
import mainPage from '@/pages/main'

export const Route = createFileRoute('/')({
  component: mainPage,
})
