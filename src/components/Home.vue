<template>
  <div class="content">
    <img src="@/assets/silica_angel_logo.png"
         @mouseover="toggleLinkVisibility">
    <div class="links"
         :class="{ 'visible': linkVisiblity }">
      <div>
        eponymous single out now:
        <span class="link">
          <a :href="socials.bandcamp" target="_blank">
            bandcamp
          </a>
        </span>
        <span class="pipe">|</span>
        <span class="link">
          <a :href="socials.soundcloud" target="_blank">
            soundcloud
          </a>
        </span>
        <span class="pipe">|</span>
        <span class="link">
          <a :href="socials.facebook" target="_blank">
            facebook
          </a>
        </span>
        <span class="pipe">|</span>
        <span class="link">
          <a :href="socials.twitter" target="_blank">
            twitter
          </a>
        </span>
      </div>
    </div>
    <div class="message">
      <span>little winds blowing backwards into u over u out of u</span>
    </div>
    <div class="click">
      <a><span @click="toggleSnippetPlaying">thankful</span></a>
    </div>
    <div class="contact">
      <a href="mailto:contact@silicaangel.rip">
        <span>contact@silicaangel.rip</span>
      </a>
    </div>
    <audio ref="audio"
           loop
           :src="snippetSrc"
           class="audio"/>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      snippetPlaying: false,
      linkVisiblity: false,
      snippetSrc: require('@/assets/snippet.mp3'),
      socials: {
        twitter: 'https://twitter.com/silicaangels',
        bandcamp: 'https://silicaangel.bandcamp.com/',
        soundcloud: 'https://soundcloud.com/silicaangel',
        facebook: 'https://www.facebook.com/silicaangels'
      }
    }
  },

  methods: {
    toggleSnippetPlaying () {
      this.snippetPlaying = !this.snippetPlaying
    },
    toggleLinkVisibility () {
      this.linkVisiblity = !this.linkVisiblity
    }
  },

  watch: {
    snippetPlaying () {
      if (this.snippetPlaying) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
        this.$refs.audio.currentTime = 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
$color: #929292;
$fake-italic: skew(-10deg, 0);
$spacing: 16px auto;

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

  .message,
  .click,
  .contact,
  .links {
    span {
      transform: $fake-italic;
    }

    &:not(.message) {
      margin: $spacing;

      a{
        position: relative;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 2px;
          border-bottom: 2px dotted $color;
        }
      }
    }
  }

  .message {
    font-size: 2.75vmax;
  }

  .click {
    font-size: 3.2vmax;

    span, a {
      cursor: pointer;
    }
  }

  .links {
    font-size: 2vmax;
    margin: $spacing;
    opacity: 0;
    pointer-events: none;
    transition: all 200ms;

    span {
      display: inline-block;
    }

    @media (max-width: 992px) {
      font-size: 3vmax;
      margin-bottom: 32px !important;

      span {
        display: block;
        margin: $spacing;
      }
      .pipe {
        display: none;
      }
    }

    &.visible {
      pointer-events: all;
      opacity: 1;
    }
  }

  .contact {
    font-size: 2vmax;

    span {
      &:after {
        bottom: -1px !important;
      }
    }
  }
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: inherit;
  }
}
</style>
