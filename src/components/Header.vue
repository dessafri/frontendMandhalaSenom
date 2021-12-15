<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div
      class="container-fluid"
      style="display: flex; justify-content: space-between;"
    >
      <router-link
        to="/"
        class="navbar-brand col col-4"
        style="text-decoration: none;"
      >
        <a href="#" style="text-decoration: none;">
          Mandhala Senom
        </a>
      </router-link>
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
            <a class="nav-link" aria-current="page">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Tentang</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Agenda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Mentor</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Dokumentasi</a>
          </li>
          <li class="nav-item dropdown">
            <span class="nav-link">Kontak</span>
            <div class="dropdown-content">
              <div class="whatsapp">
                <img
                  src="@/assets/whatsapp.png"
                  alt="icon wa"
                  width="20"
                  height="20"
                />
                <a
                  href="https://api.whatsapp.com/send?phone=6282233111310&text=Halo Mandhala Senom"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </div>
              <div class="instagram">
                <img
                  src="@/assets/ig_icon.png"
                  alt="icon ig"
                  width="20"
                  height="20"
                />
                <a
                  href="https://www.instagram.com/mandhalasenom/"
                  target="_blank"
                >
                  Mandhala Senom
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 12px 16px;
}
.dropdown-content a {
  text-decoration: none;
  margin-left: 5px;
}
.dropdown-content .whatsapp {
  margin-left: -50px;
}
.dropdown-content a img {
  padding-bottom: 5px;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
