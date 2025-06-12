<template>
  <div class="default-layout">
    <header class="default-header">
      <nav class="nav-buttons">
        <NuxtLink to="/" class="nav-button">메인 페이지</NuxtLink>
        <NuxtLink to="/admin" class="nav-button">관리자 페이지</NuxtLink>
      </nav>
    </header>
    <main class="default-content">
      <slot />
    </main>
  </div>
</template>

<style>
@import '~/assets/css/layouts/default.css';
</style> 