<template>
  <div class="admin-layout">
    <header class="admin-header">
      <nav class="nav-buttons">
        <NuxtLink to="/" class="nav-button">메인 페이지</NuxtLink>
        <NuxtLink to="/admin" class="nav-button">관리자 페이지</NuxtLink>
      </nav>
    </header>
    <main class="admin-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
// 레이아웃 로직
</script>

<style>
@import '~/assets/css/layouts/administrator.css';
</style> 