
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><b-icon-house font-scale="1.5"/> Home</router-link> 
      <router-link to="/about"><b-icon-info-circle font-scale="1.5"/> About</router-link> 
      <router-link to="/contact"><b-icon-telephone font-scale="1.5"/> Contact</router-link> 
      <router-link to="/calendar"><b-icon-calendar-2-date font-scale="1.5"/> Calendar</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(207,191,171,1) 0%, rgba(212,186,159,1) 37%, rgba(191,208,212,1) 100%);
  height: 3000px;
}
#nav {
  padding: 30px;
}  
a {
  font-weight: bold;
  font-size: 1.3rem;
  color: #2c3e50;
  margin-right: 30px;
  text-decoration: none;
}  
.router-link-exact-active {
    opacity: 0.3;
}
</style>
