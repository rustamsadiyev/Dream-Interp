import { createFileRoute } from '@tanstack/react-router'
import DreamDetails from '@/pages/details'

export const Route = createFileRoute('/details/$id')({
  component: DreamDetails,
})
