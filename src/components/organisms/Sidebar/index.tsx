import { useState, useContext } from 'react'
import { SidebarContext } from '@/components/templates/Navigation';

import { AiOutlineClose } from 'react-icons/ai'
import styles from './Sidebar.module.css'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import SidebarPortal from '@/HOC/SidebarPortal';

const menuItems = [
  { item: "inicio", page: null },
  { item: "sobre nosotros", page: null },
  { item: "precios", page: null },
  { item: "contacto", page: null },
  { item: "blog", page: null },
  { item: "español", page: null },
  { item: "apple google stores", component: <Image width={200} height={130} src="/landing/appleGoogleStores.png" alt="Placeholder for apple and google store buttons" />, page: null },
  { item: "iniciar sesion", component: <Button href='' size='small' text='Iniciar Sesion' key='iniciarSesion' />, page: null },
  { item: "Resgistrarse", component: <Button href='' size='small' text='Registrarse' key='registro' />, page: null }
]

function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext)
  const [selected, setSelected] = useState('inicio')

  return (
    <SidebarPortal>
      <div className={styles.sidebar}>
        <AiOutlineClose style={{ cursor: 'pointer' }} onClick={() => setIsSidebarOpen(!isSidebarOpen)} size={30} />

        <div className={styles.navigation}>
          {menuItems.map(item => <div className={item.item === selected ? styles.selected : undefined} onClick={() => setSelected(item.item)} key={item.item}>
            {item.component || item.item}
          </div>)}
        </div>
      </div>
    </SidebarPortal>
  )
}

export default Sidebar