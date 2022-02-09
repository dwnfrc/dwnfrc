import { VFC, ElementType } from 'react'
type Props = {
  as?: ElementType
  className?: string
}
export const Logo: VFC<Props> = (props) => {
  const { as = 'h1', className = '' } = props

  const Tag = as
  const defautlStyle = ['text-3xl']
  const style = [...defautlStyle, ...className.split(' ')].join(' ')

  return <Tag className={style}>downforce</Tag>
}
