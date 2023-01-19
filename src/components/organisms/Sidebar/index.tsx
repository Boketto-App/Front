import { Dispatch, SetStateAction, useState } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import styles from './Sidebar.module.css'

const menuItems = [
  { item: "inicio", page: null },
  { item: "sobre nosotros", page: null },
  { item: "precios", page: null },
  { item: "contacto", page: null },
  { item: "blog", page: null },
  { item: "español", page: null },
  { item: "img apple store", page: null },
  { item: "img android", page: null },
  { item: "Iniciar sesion", page: null },
  { item: "Resgistrarse", page: null }
]

function Sidebar({ setIsSidebarOpen }: { setIsSidebarOpen: Dispatch<SetStateAction<boolean>> }) {
  const [selected, setSelected] = useState('inicio')

  return (
    <div className={styles.sidebar}>
      <AiOutlineMenu onClick={() => setIsSidebarOpen(false)} style={{ cursor: 'pointer' }} size={30} />

      <div className={styles.navigation}>
        {menuItems.map(item => <div className={item.item === selected ? styles.selected : undefined} onClick={() => setSelected(item.item)} key={item.item}>
          {item.item}
        </div>)}
      </div>
    </div>
  )
}

export default Sidebar