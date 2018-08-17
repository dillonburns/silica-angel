<template>
  <div class="content">
    <img src="@/assets/silica_angel_logo.png">
    <div class="message">
      little winds blowing backwards into u over u out of u
    </div>
    <div class="click">
      thankful
    </div>
    <div class="contact">
      <a href="mailto:contact@silicaangel.rip">
        contact@silicaangel.rip
      </a>
    </div>
    <!--
    <audio ref="audio"
           loop
           :src="snippetSrc"
           class="audio"/>
    -->
  </div>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      snippetSrc: require('@/assets/snippet.mp3'),
      playing: false
    }
  },

  methods: {
    togglePlaying () {
      this.playing = !this.playing
    }
  },

  watch: {
    playing () {
      if (this.playing) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    }
  }
}
</script>

<style scoped lang="scss">
$color: #929292;
$fake-italic: skew(-10deg, 0);

.content {
  color: $color;
  text-align: center;
  font-style: italic;

  img {
    width: 400px;
    max-width: 55%;
    height: auto;
    margin: auto;
    margin-bottom: 36px;
  }

  .message {
    font-size: 2.75vmax;
    transform: $fake-italic;
  }

  .click {
    font-size: 3.2vmax;
    margin: 16px auto;
    transform: $fake-italic;
  }

  .contact {
    font-size: 2vmax;
    margin: 16px auto;
    transform: $fake-italic;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
