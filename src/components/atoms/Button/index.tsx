import styles from './Buton.module.css'
import Link from 'next/link'

type Props = {
  href: string
  text: string
  size: 'small' | 'large'
}

const Button = ({ text, size, href }: Props) => {
  return (
    <Link className={styles.button + ' ' + styles[size]} href={href}>{text}</Link>
  )
}

export default Button