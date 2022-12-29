import { signInWithPopup, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'

import { UID } from './UID'

import { auth, provider } from 'conf/firebase'

const useGoogleAuth = () => {
  const [uid, setUID] = useState<UID>(null)
  const [isInitializeAuth, setIsInitializeAuth] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUID(user.uid)
      }
      setIsInitializeAuth(true)
    })
  }, [])
  const login = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        setUID(auth?.currentUser?.uid || null)
      })
      .catch(() => {
        window.alert(
          '正常にログインできませんでした。時間をおいてお試しください。',
        )
      })
  }
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUID(auth?.currentUser?.uid || null)
      })
      .catch(() => {
        window.alert(
          '正常にログアウトできませんでした。時間をおいてお試しください。',
        )
      })
  }
  return { uid, isInitializeAuth, login, logout }
}

export default useGoogleAuth
