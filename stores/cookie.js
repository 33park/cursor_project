import { defineStore } from 'pinia'

export const useCookieStore = defineStore('cookie', {
  state: () => ({
    totalValue: 0
  }),
  
  actions: {
    updateData(value) {
      this.totalValue += value
      this.setCookie('totalValue', this.totalValue)
    },
    
    setCookie(name, value) {
      const date = new Date()
      date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)) // 7일
      const expires = `expires=${date.toUTCString()}`
      document.cookie = `${name}=${JSON.stringify(value)};${expires};path=/`
    },
    
    getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) {
        return JSON.parse(parts.pop().split(';').shift())
      }
      return null
    },
    
    initFromCookies() {
      this.totalValue = this.getCookie('totalValue')
    }
  }
}) 