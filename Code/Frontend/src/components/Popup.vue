<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
        </div>
    </div>
</template>

<script setup>
props: ['togglePopup']
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup .popup-inner {
    box-shadow: inset;
    border: #000 2px solid;
    border-radius: 50px;
    background-color: #FFF;
    height: 80vh;
    width: 70vw;
}
</style>