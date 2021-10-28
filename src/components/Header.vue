<template>
  <div class="container">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand col col-4" href="#">
          Mandhala Senom
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tentang</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Agenda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mentor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Dokumentasi</a>
            </li>
            <li class="nav-item d-lg-none">
              <div class="d-grid">
                <Button msg="Login/SignUp" />
              </div>
            </li>
          </ul>
        </div>
        <div class="button d-none d-lg-block">
          <Button msg="Login/SignUp" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'Header',
  components: { Button },
}
</script>
