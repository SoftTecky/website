<template>
  <div class="container">
    <div class="col-md-6 rounded mr-2">
      <div class="profile-card float-left">
        <!--  -->
        <div class="profile-header">
          <div class="d-flex align-items-center">
            <div class="profile-avatar bg-preload">
              <div class="into-preload"></div>
            </div>
            <div class="flex-column">
              <div class="col">
                <div class="profile-name bg-preload rounded">
                  <div class="into-preload"></div>
                </div>
              </div>
              <div class="col">
                <div class="profile-date bg-preload rounded">
                  <div class="into-preload"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="profile-body">
          <div class="profile-item bg-preload">
            <div class="into-preload"></div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VistaEsqueleto",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* * { border: red solid 0.5px; } */

.profile-card {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5vh;
  margin-top: 2vh;
  border-radius: 15px;
}

.profile-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d1d1d1;
  margin: 0 1vw 0 0vh;
}

.profile-name {
  width: 150px;
  height: 15px;
  background-color: #d1d1d1;
  margin: 0 0 1vh 0;
}

.profile-date {
  width: 100px;
  height: 15px;
  background-color: #d1d1d1;
}
.profile-item {
  width: 100%;
  height: 150px;
  background-color: #d1d1d1;
  margin-top: 20px;
  border-radius: 15px;
}

.bg-preload {
  position: relative;
  background-color: #ced4da;
  overflow: hidden;
} /* 
.preloadFalse {
  opacity: 0;
  height: 0;
} */

.into-preload {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  z-index: 1;
  width: 500%;
  margin-left: -250%;
  -webkit-animation: bgAnimation 0.8s linear infinite;
  animation: bgAnimation 0.8s linear infinite;
  background: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0) 46%,
      hsla(0, 0%, 100%, 0.35) 50%,
      hsla(0, 0%, 100%, 0) 54%
    )
    50% 50%;
}

@keyframes bgAnimation {
  0% {
    transform: translate3d(-30%, 0, 0);
  }
  to {
    transform: translate3d(30%, 0, 0);
  }
}
</style>
