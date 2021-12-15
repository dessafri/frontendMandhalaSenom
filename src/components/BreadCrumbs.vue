<template>
  <div class="container">
    <div
      aria-label="breadcrumb"
      style="
        margin-top: 50px;
        font-size: 18px;
        font-family: 'Lato', sans-serif;
      "
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" style="text-decoration: none; color: #1c2e60 !important;">
            Home
          </a>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
          style="font-weight: bold; color: #1c2e60 !important;"
        >
          {{ msg }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: { msg: String },
}
</script>
