<template>
    <div>
        <Navigation/>
        <nuxt />
    </div>
</template>

<script>
export default{
    middleware: 'log'
}
</script>