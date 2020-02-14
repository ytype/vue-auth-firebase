<template>
  <div>
    <div class="columns is-vertical-center">
      <div class="column is-8">
        <p class="bd-notification is-primary">
          First column
        </p>
      </div>
      <div class="column">
        <p class="bd-notification is-primary">
          Second column with more content. This is so you can see the vertical alignment.
        </p>
      </div>
    </div>
  </div>
</template>

<style scope>
.is-vertical-center {
  display: flex;
  align-items: center;
}
</style>
