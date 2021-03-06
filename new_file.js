//展开遮罩层的过渡动画
.cover-enter
    opacity 0 !important
    transform translate(0,-100%)
.cover-enter-active
    transition 0.8s all !important
.cover-enter-to
    opacity 1 !important
    transform translate(0,0)

.cover-leave-active
    transition 0.8s all !important
.cover-leave-to 
    opacity 0 !important
    transform translate(0,-100%)

//购物车控制组件的过渡动画
.remove-enter
    opacity 0 !important
    transform translate3d(44px,0,0) rotate(0deg) !important
.remove-enter-active
    transition 0.3s all !important
.remove-enter-to
    opacity 1 !important
    transform translate3d(0,0,0) rotate(-720deg) !important

.remove-leave-active
    transition 0.3s all !important
.remove-leave-to 
    opacity 0 !important
    transform translate3d(24px,0,0) rotate(0deg) !important

//展示商家图片的过渡动画
.showPics-enter
    opacity 0 !important
.showPics-enter-active
    transition .8s all !important
.showPics-enter-to
    opacity 1 !important

.showPics-leave-active
    transition .8s all !important
.showPics-leave-to 
    opacity 0 !important

//展示购物车的过渡动画
.list-enter
    opacity 0 !important
    transform translate3d(0,100%,0) rotate(0deg) !important
.list-enter-active
    transition .5s all !important
.list-enter-to 
    opacity 1 !important
    transform translate3d(0,0,0) rotate(0deg) !important

.list-leave-active
    transition .5s all !important
.list-leave-to
    opacity .8 !important
    transform translate3d(0,100%,0) rotate(0deg) !important

//购物车遮罩层渐变动画
.mask-enter
    opacity 0 !important
.mask-enter-active
    transition .8s all !important
.mask-enter-to
    opacity 1 !important

.mask-leave-active
    transition .8s all !important
.mask-leave-to 
    opacity 0 !important