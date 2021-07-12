import React, {
  Suspense,
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "react-three-fiber";
import Effects from "./utils/Effects";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Button } from "@material-ui/core";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "black",
  },
  loader: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  canvas: {
    marginTop: "50px",
    backgroundColor: "black",
    pointerEvents: "none",
    overflow: "hidden",
  },
  typography: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    color: "gray",
    fontFamily: "Amatic SC, cursive",
  },
  button: {
    marginTop: 100,
    color: "#fff",
    backgroundColor: "#143e55",
    "&:hover": {
      backgroundColor: "#97abb6",
    },
  },
}));

function Swarm({ count, mouse }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -20 + Math.random() * 40;
      const yFactor = -20 + Math.random() * 40;
      const zFactor = -20 + Math.random() * 40;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.max(1.5, Math.cos(t) * 5);
      particle.mx += (mouse.current[0] - particle.mx) * 0.02;
      particle.my += (-mouse.current[1] - particle.my) * 0.02;
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="#023b36" />
      </instancedMesh>
    </>
  );
}
function Home2() {
  //loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  const classes = useStyles();
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );
  return (
    <div onMouseMove={onMouseMove}>
      {loading ? (
        <div className={classes.loader}>
          <HashLoader color={"#143e55"} loading={loading} size={50} />
        </div>
      ) : (
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.root}
        >
          <Grid item lg={12} xs={12} className={classes.typography}>
            <motion.div
              initial={{ y: "-1000px" }}
              animate={{ y: "0px" }}
              transition={{
                type: "tween",

                duration: 2,
              }}
            >
              <Typography display="inline" variant="h3">
                Hi!
                <motion.div
                  initial={{ x: "-10px" }}
                  animate={{ x: "0px" }}
                  transition={{
                    type: "spring",
                    stiffness: 1000,
                    repeat: Infinity,
                    duration: 1,
                  }}
                >
                  👋
                </motion.div>{" "}
                I'm Panagiotis Mentzelopoulos,
                <Typewriter
                  options={{
                    strings: ["An IT Professional", "A Full-Stack developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </motion.div>
          </Grid>
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
                <pointLight
                  position={[-100, -100, -100]}
                  intensity={5}
                  color="#00ffeb"
                />
                <Swarm mouse={mouse} count={150} />

                <Suspense fallback={null}>
                  <Effects />
                </Suspense>
              </Canvas>
            </div>
          </Grid>

          <Grid item lg={6} xs={12} className={classes.typography}>
            <Typography display="inline" variant="h4">
              I hold a BSc in Computer Science, currently working as a Senior IT
              Support Engineer in Dublin. I am looking to make a career
              transition to a Software Engineering role as I've been building
              Full-Stack web applications while learning new technologies.
            </Typography>
          </Grid>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            href="/about"
          >
            Learn More
          </Button>
          <Footer />
        </Grid>
      )}
    </div>
  );
}

export default Home2;
