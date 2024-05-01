import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import DataCard from '@/app/data/data'
import Link from "next/link";
 
 
import { titleStyle } from "./titlestyle";


export default function MyProjects() {
  return (<>
    <div style={{ backgroundColor: "#333", color: "#fff" }}>                        
      <Container data-aos="fade-left" sx={{ py: 4 }} maxWidth="md">
        <Typography style={titleStyle as React.CSSProperties} variant="h4" gutterBottom >
          Projects
        </Typography>
        <Grid container spacing={4}>
          {DataCard.map((item:any) => (
            <Grid item key={item.id} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                 
                  <Image
                    src={item.image}
                 
                    alt="not shows"
                  />
                 
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.heading}
                  </Typography>
                  <Typography>{item.detail}</Typography>
                </CardContent>
                <CardActions>
                  <Link href={item.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="small" variant="contained"  className="bg-blue-400">
                      Live Demo
                    </Button>
                  </Link>
                 
                  <Link
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="small" className="hover:underline">Source Code</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
    </>
  );
}
