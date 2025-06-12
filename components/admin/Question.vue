<template>
    <form>
        <div class="button-wrapper">
            <button type="reset">초기화</button>
            <button type="submit">저장</button>
        </div>
        <div class="form-wrapper">
            <div class="form-line" v-for="(data, index) in questionList" :key="index">
                <label>
                    <span>{{index + 1}}번 질문</span>
                    <input 
                        type="text" 
                        placeholder="질문을 입력하세요" 
                        v-model="questionValues[index]"
                    >
                </label>
                <button 
                    type="button" 
                    class="delete-btn"
                    @click="$emit('remove', index)"
                >
                    <Icon name="heroicons:x-mark" class="delete-icon" />
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  questionList: {
    type: Array,
    required: true,
    default: () => []
  }
})

const questionValues = ref([])

// props.questionList가 변경될 때마다 questionValues 초기화
watch(() => props.questionList, (newList) => {
  questionValues.value = newList.map(q => q.question || '')
}, { immediate: true })
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.form-line {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.form-line label {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.form-line label span {
  min-width: 80px;
  font-weight: bold;
}

.form-line input {
  flex: 1;
  height: 40px;
  padding: 8px 40px 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.button-wrapper {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

button[type="reset"] {
  background-color: #dc3545;
  color: white;
}

button[type="reset"]:hover {
  background-color: #c82333;
}

button[type="submit"] {
  background-color: #28a745;
  color: white;
}

button[type="submit"]:hover {
  background-color: #218838;
}

.delete-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  width: 40px;
  height: 40px;
  padding: 0.25rem;
  color: #dc3545;
  opacity: 0.7;
}

.delete-btn:hover {
  opacity: 1;
  background: none;
}

.delete-icon {
  width: 20px;
  height: 20px;
}
</style>
