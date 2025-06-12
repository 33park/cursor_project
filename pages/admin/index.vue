<template>
  <NuxtLayout name="administrator">
    <section class="admin-page">
      <h2>관리자 대시보드</h2>
      <div class="admin-content">
        <p>관리자 페이지에 오신 것을 환영합니다.</p>
      </div>
            <div class="form-line add-question">
            <label>
                <input type="text" placeholder="질문을 입력하세요">
            </label>
                <button type="button">추가</button>
            </div>
      <AdminQuestion :questionList="questions"/>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import questionsData from '~/data.json'

const questions = ref([])

// 초기 데이터 로드
onMounted(() => {
  questions.value = [...questionsData.questions]
  // 최소 4개의 질문이 있도록 보장
  while (questions.value.length < 4) {
    questions.value.push({ question: '', image: '' })
  }
})

// 질문 추가
const addQuestion = () => {
  questions.value.push({ question: '', image: '' })
}

// 질문 삭제
const removeQuestion = (index) => {
  if (questions.value.length > 4) {
    questions.value.splice(index, 1)
  } else {
    alert('최소 4개의 질문이 필요합니다.')
  }
}

// 질문 저장
const saveQuestions = () => {
  // 빈 질문 필터링
  const validQuestions = questions.value.filter(q => q.question.trim() !== '')
  
  if (validQuestions.length < 4) {
    alert('최소 4개의 질문이 필요합니다.')
    return
  }

  // TODO: 서버에 저장하는 로직 구현
  console.log('저장된 질문:', validQuestions)
}

definePageMeta({
  layout: 'administrator'
})
</script>

<style>
@import '~/assets/css/pages/admin/index.css';
</style>
