(function() {
  var mount = document.getElementById("module-mount-point");
  mount.innerHTML = `
    <!-- Tempel kode HTML simulasi & materi dari postingan Blogger di sini -->
    <div class="physics-sim-wrapper" id="sim-wrapper-17">
      <div class="control-panel">
        <h3>PARAMETER REAKTOR</h3>
        <!-- Slider & kontrol kamu -->
      </div>
      <div class="visualization-panel">
        <div id="canvas-3d-17" style="width:100%;height:460px;"></div>
      </div>
    </div>
    <h2>Landasan Teori</h2>
    <p>Persamaan sudut kerucut Cherenkov: $\\cos\\theta = \\frac{1}{\\beta n}$</p>
  `;

  // Tempel kode Three.js / Fisika3DLazyEngine.register(...) di bawah ini
  Fisika3DLazyEngine.register("canvas-3d-17", function(container, isVisible) {
    // Logika Three.js kamu...
  });
})();