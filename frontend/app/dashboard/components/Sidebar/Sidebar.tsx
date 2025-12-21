'use client'

import type { FC } from 'react'
import { memo, useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import styles from './Sidebar.module.css'
import ExpandButton from '../ExpandButton/ExpandButton'

interface NavItem {
  key: string
  icon: string
  alt: string
  label: string
  className: string
}

const NAV_ITEMS: NavItem[] = [
  { key: 'main', icon: '/main-icon.png', alt: 'Main', label: 'Əsas səhifə', className: styles.main },
  { key: 'guests', icon: '/guests-icon.png', alt: 'Guests', label: 'Qonaqlar', className: styles.guests },
  { key: 'workers', icon: '/workers-icon.png', alt: 'Workers', label: 'İşçi heyəti', className: styles.guests },
  { key: 'report', icon: '/report-icon.png', alt: 'Report', label: 'Hesabat', className: styles.report },
  { key: 'tables', icon: '/tables-icon.png', alt: 'Tables', label: 'Stollar', className: styles.tables },
  { key: 'settings', icon: '/settings-icon.png', alt: 'Settings', label: 'Ayarlar', className: styles.tables },
]

const LOGO_PROPS = {
  src: '/kultura-logo.png',
  alt: 'Kultura Logo',
  width: 38,
  height: 38,
}

const Sidebar: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleSidebar = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  const navItems = useMemo(() => NAV_ITEMS, [])

  const containerClassName = isExpanded ? styles.property1openedReport : styles.property1closedMain
  const backgroundClassName = isExpanded ? styles.property1openedReportChild : styles.property1closedMainChild
  const logoClassName = isExpanded ? styles.property1openedReportInner : styles.property1closedMainInner
  const navClassName = `${styles.nav} ${!isExpanded ? styles.collapsed : ''}`

  return (
    <div className={containerClassName}>
      <div className={backgroundClassName} />

      <div className={styles.tabs}>
        <div className={navClassName}>
          {navItems.map((item) => (
            <div key={item.key} className={item.className}>
              <Image className={styles.icon2} src={item.icon} width={41} height={41} alt={item.alt} />
              <div className={styles.sasShif}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <ExpandButton onClick={toggleSidebar} isExpanded={isExpanded} />

      <Image className={logoClassName} {...LOGO_PROPS} />
    </div>
  )
}

export default memo(Sidebar)
