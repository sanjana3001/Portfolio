<template>
  <div class="dashboard">
    <!-- Header with Profile Photo -->
    <header class="header">
      <div class="profile-section">
        <div class="profile-photo-container">
          <img src="./assets/Me.png" alt="Profile Photo" class="profile-photo">
        </div>
        <div class="profile-info">
          <h1 class="name">Sanjana Shivadathathri</h1>
          <p class="title">Software Engineer</p>
          <p class="contact">sanjanas.3001@gmail.com | +49 17644462962</p>
          <p class="location">
            Heilbronn, 74074 |
            <a href="https://www.linkedin.com/in/sanjana30" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </p>
        </div>
      </div>
    </header>

    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-container">
        <ul class="nav-list">
          <li>
            <router-link to="/about" class="nav-link" active-class="active">
              <i class="fas fa-user"></i> About
            </router-link>
          </li>
          <li>
            <router-link to="/experience" class="nav-link" active-class="active">
              <i class="fas fa-briefcase"></i> Experience
            </router-link>
          </li>
          <li>
            <router-link to="/education" class="nav-link" active-class="active">
              <i class="fas fa-graduation-cap"></i> Education
            </router-link>
          </li>
          <li>
            <router-link to="/skills" class="nav-link" active-class="active">
              <i class="fas fa-code"></i> Skills
            </router-link> 
          </li>
          <li>
            <router-link to="/projects" class="nav-link" active-class="active">
              <i class="fas fa-project-diagram"></i> Projects
            </router-link>
          </li>
          <li>
            <router-link to="/awards" class="nav-link" active-class="active">
              <i class="fas fa-trophy"></i> Awards
            </router-link>
          </li>
          <li>
            <router-link to="/hobbies" class="nav-link" active-class="active">
              <i class="fas fa-heart"></i> Hobbies
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-link" active-class="active">
              <i class="fas fa-envelope"></i> Contact
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <main >
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.social-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #0077b5;
}
</style>