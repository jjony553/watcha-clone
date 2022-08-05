<template>
    <div>
        <Header />
        <Nav />
        <slot />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'DefaultLayout',
    components: {
        Header,
        Nav,
        Footer
    },
}
</script>