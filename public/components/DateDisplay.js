import { formatDate } from 'src/utils/helpers'

export default function DateDisplay({ date }) {
  return <p>Formatted date: {formatDate(date)}</p>
}

