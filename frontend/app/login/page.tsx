'use client'

import type { ChangeEvent } from 'react'
import { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

interface FormState {
  email: string
  password: string
}

interface StaticImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className: string
  priority?: boolean
}

const BACK_ARROW_IMAGE: StaticImageProps = {
  src: '/back-arrow.png',
  alt: 'Go back',
  width: 35,
  height: 23,
  className: styles.backArrowIcon,
}

const LOGO_IMAGE: StaticImageProps = {
  src: '/kultura-logo.png',
  alt: 'Kultura Logo',
  width: 68,
  height: 68,
  className: styles.logo,
  priority: true,
}

const INTERIOR_IMAGE: Pick<StaticImageProps, 'src' | 'alt' | 'className'> = {
  src: '/login-interior.png',
  alt: 'Interior',
  className: styles.interiorImage,
}

const LoginPage = (): JSX.Element => {
  const router = useRouter()
  const [formState, setFormState] = useState<FormState>({ email: '', password: '' })

  const handleEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, email: event.target.value }))
  }, [])

  const handlePasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, password: event.target.value }))
  }, [])

  const handleLogin = useCallback(() => {
    router.push('/dashboard')
  }, [router])

  const handleBack = useCallback(() => {
    router.back()
  }, [router])

  const fields = useMemo(
    () => [
      {
        id: 'email',
        type: 'email',
        label: 'Email',
        value: formState.email,
        onChange: handleEmailChange,
      },
      {
        id: 'password',
        type: 'password',
        label: 'Şifrə',
        value: formState.password,
        onChange: handlePasswordChange,
      },
    ],
    [formState.email, formState.password, handleEmailChange, handlePasswordChange],
  )

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSide}>
        <button className={styles.backButton} onClick={handleBack} aria-label="Go back">
          <Image {...BACK_ARROW_IMAGE} />
        </button>

        <div className={styles.logoContainer}>
          <Image {...LOGO_IMAGE} />
        </div>

        <div className={styles.loginForm}>
          <h1 className={styles.loginTitle}>Daxil ol</h1>

          <div className={styles.fields}>
            {fields.map(({ id, type, label, value, onChange }) => (
              <div key={id} className={styles.inputWrapper}>
              <div className={styles.inputContainer}>
                <input
                    id={id}
                    type={type}
                  className={styles.input}
                    value={value}
                    onChange={onChange}
                  placeholder=" "
                    autoComplete={type === 'password' ? 'current-password' : 'email'}
                />
                  <label className={styles.inputLabel} htmlFor={id}>
                    {label}
                </label>
              </div>
              </div>
            ))}
          </div>

          <div className={styles.forgotPasswordContainer}>
            <span className={styles.forgotPasswordText}>Şifrəni unutmusuz? </span>
            <Link href="/forgot-password" className={styles.forgotPasswordLink}>
              Bərpa et
            </Link>
          </div>

          <button className={styles.loginButton} onClick={handleLogin}>
            Daxil ol
          </button>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.imageWrapper}>
          <img {...INTERIOR_IMAGE} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage

