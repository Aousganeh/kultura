"use client"

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import styles from './Content.module.css'

type Category = {
  id: string
  name: string
  description?: string | null
  imageUrl?: string | null
  sortOrder?: number | null
}

type Food = {
  id: string
  categoryId: string
  name: string
  description?: string | null
  price: number
  currency: string
  available: boolean
  imageUrl?: string | null
  sortOrder?: number | null
}

interface CategoryCardProps {
  category: Category
  isActive: boolean
  onSelect: (categoryId: string) => void
}

const CategoryCard = ({ category, isActive, onSelect }: CategoryCardProps): JSX.Element => (
  <button
    type="button"
    onClick={() => onSelect(category.id)}
    className={styles.block}
    style={{
      backgroundColor: isActive ? '#141B34' : undefined,
      color: isActive ? '#E8AEFF' : undefined,
      borderColor: isActive ? '#E8AEFF' : undefined,
    }}
  >
    <div className={styles.shrYemyiParent}>
      <div className={styles.shrYemyi} style={{ color: isActive ? '#E8AEFF' : undefined }}>
        {category.name}
      </div>
      <div className={styles.eid} style={{ color: isActive ? '#E8AEFF' : undefined }}>
        {category.description ?? ''}
      </div>
    </div>
    <div className={styles.blockChild}>
      <Image
        className={styles.blockChildImage}
        src={category.imageUrl || '/category-placeholder.png'}
        width={40}
        height={40}
        sizes="100vw"
        alt={category.name}
        style={{
          filter: isActive
            ? 'brightness(0) saturate(100%) invert(81%) sepia(12%) saturate(2170%) hue-rotate(239deg) brightness(104%) contrast(102%)'
            : undefined,
        }}
      />
    </div>
  </button>
)

interface ItemCardProps {
  item: Food
}

const ItemCard = ({ item }: ItemCardProps): JSX.Element => (
  <div className={styles.item} style={{ opacity: item.available ? 1 : 0.6 }}>
    <div className={styles.itemChild} />
    <Image className={styles.adddefaultIcon} src="/add-icon.png" width={25} height={25} sizes="100vw" alt="Add" />
    <Image
      className={styles.imageIcon}
      src={item.imageUrl || '/item-placeholder.png'}
      width={139}
      height={81}
      sizes="100vw"
      alt={item.name}
    />
    <div className={styles.rqsayaBadmcan}>{item.name}</div>
    <div className={styles.azn}>
      {item.price.toFixed(2)}
      {item.currency}
    </div>
  </div>
)

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080'

const Content = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([])
  const [foods, setFoods] = useState<Food[]>([])
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)
  const [loadingCategories, setLoadingCategories] = useState(false)
  const [loadingFoods, setLoadingFoods] = useState(false)

  const fetchCategories = useCallback(async () => {
    setLoadingCategories(true)
    try {
      const res = await fetch(`${API_BASE}/api/categories`, { cache: 'no-store' })
      if (!res.ok) throw new Error(`Failed to load categories (${res.status})`)
      const data: Category[] = await res.json()
      setCategories(data)
      if (data.length > 0) {
        setActiveCategoryId((prev) => prev ?? data[0].id)
      }
    } catch (error) {
      console.error(error)
      setCategories([])
    } finally {
      setLoadingCategories(false)
    }
  }, [])

  const fetchFoods = useCallback(async (categoryId: string) => {
    setLoadingFoods(true)
    try {
      const res = await fetch(`${API_BASE}/api/categories/${categoryId}/foods`, { cache: 'no-store' })
      if (!res.ok) throw new Error(`Failed to load foods (${res.status})`)
      const data: Food[] = await res.json()
      setFoods(data)
    } catch (error) {
      console.error(error)
      setFoods([])
    } finally {
      setLoadingFoods(false)
    }
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  useEffect(() => {
    if (activeCategoryId) {
      fetchFoods(activeCategoryId)
    } else {
      setFoods([])
    }
  }, [activeCategoryId, fetchFoods])

  const itemsToShow = useMemo(() => foods, [foods])

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.search}>
          <div className={styles.searchParent}>
            <Image className={styles.searchIcon} src="/search-icon.png" width={24} height={24} sizes="100vw" alt="Search" />
            <div className={styles.axtar}>Axtar</div>
          </div>
        </div>
        <div className={styles.topActions}>
          <div className={styles.button}>
            <div className={styles.daxilOl}>Rezervasiya</div>
          </div>
          <div className={styles.smallButton}>
            <Image className={styles.refreshIcon} src="/refresh-icon.png" width={24} height={24} sizes="100vw" alt="Refresh" />
          </div>
          <div className={styles.notification}>
            <Image className={styles.notificationIcon} src="/notification-icon.png" width={24} height={24} sizes="100vw" alt="Notifications" />
          </div>
          <div className={styles.smallButton}>
            <Image className={styles.refreshIcon} src="/wifi-icon.png" width={24} height={24} sizes="100vw" alt="WiFi" />
          </div>
        </div>
      </div>

      <div className={styles.categories}>
        <div className={styles.top}>
          {loadingCategories && <div className={styles.loading}>Yüklənir...</div>}
          {!loadingCategories &&
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} isActive={category.id === activeCategoryId} onSelect={setActiveCategoryId} />
            ))}
        </div>
      </div>

      <div className={styles.contentChild} />

      <div className={styles.items}>
        <div className={styles.top}>
          {loadingFoods && <div className={styles.loading}>Məhsullar yüklənir...</div>}
          {!loadingFoods && itemsToShow.map((item) => <ItemCard key={item.id} item={item} />)}
          {!loadingFoods && itemsToShow.length === 0 && <div className={styles.empty}>Bu kateqoriya üçün məhsul yoxdur</div>}
        </div>
      </div>
    </div>
  )
}

export default Content

