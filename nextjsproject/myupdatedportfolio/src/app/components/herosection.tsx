"use client";
import { Box } from "@mui/system";
import { Avatar, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useEffect } from "react";
import myimage from "@/app/assets/myimage/myimage.jpg";
import AnimatedParticles from "@/app/components/animatedparticles"
import Image from "next/image";

import Typewriter from "typewriter-effect";

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    positon: "relative",
  },
  avatar: {
    textAlign: "center",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    width: "150px",
    height: "150px",
    margin: "8px",
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "column",
    textAlign: "center",
  },
};

const HeroSection = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typewriterRef.current) {
        typewriterRef.current
          .typeString("Frontend Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Backend Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Nextjs Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Fastapi Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Python Developer")
          .pauseFor(1000)
          .deleteAll()
          .start();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={"mycontainer"} id={"mainpage"} style={styles.container}>
      <AnimatedParticles/>
      <Box style={styles.typedContainer as React.CSSProperties}>
        <Grid>
          <Image style={styles.avatar as React.CSSProperties} src={myimage} alt="Not shows" />
        </Grid>
        <Typography style={styles.title} variant="h4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("ARMAN").start();
            }}
          />
        </Typography>

        <Typography style={styles.subtitle as React.CSSProperties} variant="h5">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriterRef.current = typewriter;
            }}
          />
        </Typography>
      </Box>
    </div>
  );
};

export default HeroSection;
