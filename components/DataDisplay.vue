<template>
  <div class="data-display">
    <template v-for="(question, index) in questions" :key="index">
      <div v-if="question.image" class="image-container">
        <img :src="question.image" :alt="question.question" class="display-image" />
      </div>
      <div class="question-container">
        <p class="question-text">{{ question.question }}</p>
        <div class="button-container">
          <button 
            type="button"
            @click="handleAnswer(-2)" 
            class="data-button"
          >
            매우 그렇지 않다
          </button>
          <button 
            type="button"
            @click="handleAnswer(-1)" 
            class="data-button"
          >
            그렇지 않다
          </button>
          <button 
            type="button"
            @click="handleAnswer(0)" 
            class="data-button"
          >
            보통이다
          </button>
          <button 
            type="button"
            @click="handleAnswer(1)" 
            class="data-button"
          >
            그렇다
          </button>
          <button 
            type="button"
            @click="handleAnswer(2)" 
            class="data-button"
          >
            매우 그렇다
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  questions: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['update-data'])

const handleAnswer = (value) => {
  emit('update-data', { data: value })
}
</script>

<style>
@import '~/assets/css/components/DataDisplay.css';
</style> 