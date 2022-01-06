<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand col col-2"
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
          <li class="nav-item navigate">
            <router-link :to="{ hash: 'home' }">
              <a class="nav-link" aria-current="page">
                Home
              </a>
            </router-link>
          </li>
          <li class="nav-item navigate">
            <router-link :to="{ hash: 'tentang' }">
              <a class="nav-link">Tentang</a>
            </router-link>
          </li>
          <li class="nav-item navigate">
            <router-link :to="{ hash: 'agenda' }">
              <a class="nav-link">Agenda</a>
            </router-link>
          </li>
          <li class="nav-item navigate">
            <router-link :to="{ hash: 'mentor' }">
              <a class="nav-link">Pengurus</a>
            </router-link>
          </li>
          <li class="nav-item navigate">
            <router-link :to="{ hash: 'dokumentasi' }">
              <a class="nav-link">Dokumentasi</a>
            </router-link>
          </li>
          <!-- <li class="nav-item dropdown">
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
          </li> -->
        </ul>
      </div>
      <div class="kontak">
        <button class="btn btn-kontak">Hubungi Kami</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  // data() {
  //   return {
  //     hover: false,
  //   }
  // },
  // methods: {
  //   mouseover: function (event) {
  //     event.target.classList.toggle('aktif')
  //     // let links = document.querySelectorAll('nav-link')
  //     // // let data =
  //     // for (let i = 0; i < links.length; i++) {
  //     //   if (links[i].event.parentElement.classList.contains('active')) {
  //     //     links[i].event.target.parentElement.classList.remove('active')
  //     //   }
  //     //   links[i].style.opacity = '0.25'
  //     // }

  //     // this.event.target.parentElement.classList.add('active')
  //     // this.style.opacity = '1'
  //     // if (event) {
  //     //   console.log(event.target.parentElement)
  //     // }
  //     // for (let i = 0; i < links.length; i++) {
  //     //   if (links[i].parentNode..contains('active')) {
  //     //     links[i].parentNode.classList.remove('active')
  //     //   }
  //     //   links[i].style.opacity = '0.25'
  //     // }

  //     // this.parentNode.classList.add('active')
  //     // this.style.opacity = '1'
  //   },
  //   mouseleave: function (event) {
  //     event.target.classList.remove('aktif')
  //   },
  // },
}
</script>

<style scoped>
.navbar {
  background-color: #ef3e38 !important;
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  /* position: absolute; */
  z-index: 9999999999;
}
.navbar .container-fluid {
  display: flex !important;
  justify-content: space-around !important;
}

.navbar .navbar-brand {
  font-weight: bold;
}
.nav-item {
  padding: 3px;
}
.nav-item:hover {
  border-bottom: 2px solid #14a6a0;
  transition: all 0.35s ease-in-out;
  opacity: 1 !important;
  color: white !important;
}

.navbar .navbar-nav .active {
  font-weight: bold;
}

.nav-item.navigate {
  opacity: 0.5;
}

.navbar a,
span {
  display: inline-block;
  color: white !important;
}
#navbarNav {
  margin-left: 100px;
}
.navbar span {
  cursor: pointer;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.btn-kontak {
  width: 150px;
  height: 40px;
  background-color: #14a6a0;
  border-radius: 30px;
  left: -50px !important;
  color: white;
  font-family: 'Lato', sans-serif;
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
