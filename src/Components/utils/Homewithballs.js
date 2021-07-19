<Grid item lg={12} xs={12} className={classes.canvas}>
  <div style={{ width: "99vw", height: "45vh" }}>
    <Canvas
      gl={{
        alpha: false,
        antialias: false,
        logarithmicDepthBuffer: true,
      }}
      camera={{ fov: 75, position: [0, 0, 70] }}
      onCreated={({ gl }) => {
        gl.setClearColor("black");
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      <ambientLight intensity={1.1} />
      <pointLight position={[100, 100, 100]} intensity={2.2} />
      <pointLight position={[-100, -100, -100]} intensity={5} color="#00877d" />
      <Swarm mouse={mouse} count={150} />

      <Suspense fallback={null}>
        <Effects />
      </Suspense>
    </Canvas>
  </div>
</Grid>;
