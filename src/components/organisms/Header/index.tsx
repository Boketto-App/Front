import { Dispatch, SetStateAction, useContext } from 'react';

import Image from 'next/image'
import styles from './Header.module.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { SidebarContext } from '@/components/templates/Navigation';

const Header = () => {
  const { setIsSidebarOpen } = useContext(SidebarContext)

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="Boketto Logo"
          width={30}
          height={30}
          style={{ marginRight: 16 }}
          priority
        />
        <div>boketto</div>
      </div>

      <AiOutlineMenu onClick={() => setIsSidebarOpen(true)} style={{ cursor: 'pointer' }} size={30} />
    </div>
  )
}

export default Header