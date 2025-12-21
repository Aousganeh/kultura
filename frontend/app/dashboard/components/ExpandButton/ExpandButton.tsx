'use client'

import type { FC } from 'react'
import { memo } from 'react'
import Image from 'next/image'
import styles from './ExpandButton.module.css'

interface ExpandButtonProps {
  onClick: () => void
  isExpanded: boolean
}

const ExpandButton: FC<ExpandButtonProps> = ({ onClick, isExpanded }) => {
  const containerClassName = `${styles.frame28} ${isExpanded ? styles.expanded : ''}`
  const iconClassName = `${styles.arrowIcon} ${isExpanded ? styles.arrowRotated : ''}`

  return (
    <div className={containerClassName} onClick={onClick} role="button" aria-pressed={isExpanded}>
      <Image className={iconClassName} src="/arrow-icon.png" width={16} height={16} alt={isExpanded ? 'Collapse' : 'Expand'} />
    </div>
  )
}

export default memo(ExpandButton)

