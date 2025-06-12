<template>
  <NuxtLayout>
    <div class="index-page">
      <h1>성격 유형 테스트</h1>
      <DataDisplay 
        :questions="questions" 
        @update-data="handleDataUpdate"
      />
      <div v-if="cookieStore.totalValue !== 0" class="cookie-data">
        <h2>현재 점수</h2>
        <p>{{ cookieStore.totalValue }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useCookieStore } from '~/stores/cookie'
import questionsData from '~/data.json'

const questions = questionsData.questions
const cookieStore = useCookieStore()

// 페이지 로드 시 쿠키에서 데이터 복원
onMounted(() => {
  const savedValue = cookieStore.getCookie('totalValue')
  if (savedValue !== null) {
    cookieStore.totalValue = savedValue
  }
})

const handleDataUpdate = (data) => {
  cookieStore.updateData(data.data)
}
</script>

<style>
@import '~/assets/css/pages/index.css';
</style>
