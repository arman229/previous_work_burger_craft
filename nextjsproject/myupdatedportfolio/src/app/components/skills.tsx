'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {skillsdata} from '@/app/data/data';
import './styles.css';
import { titleStyle } from "./titlestyle";

export default function MyFavSkills() {

  const rootStyle = {
    backgroundColor: '#000000',
    userSelect: "none",
    color:"white"

};
  const skillItemStyle = {
    paddingBottom: "10px",
    paddingTop: "60px",
    textAlign: "center",
    width: "205px",
  };
  const skillImageStyle = {
    height: "70px",
    padding: "10px",
  };

  return (
    <div style={rootStyle as React.CSSProperties}>

  
    <Container   maxWidth="md" sx={{ py: 4 }}>
    <Typography variant="h4"  style={titleStyle as React.CSSProperties} gutterBottom>
                    Skills
                </Typography>
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className={"flex justify-center"}
        breakpoints={{
          892: { slidesPerView: 4 },
          630: { slidesPerView: 3 },
          500: { slidesPerView: 2 },
          400: { slidesPerView: 1 },
        }}
      >
        {skillsdata.map((item:any) => (
          <SwiperSlide key={item.id} className='rounded-md' >
             
              <Paper className='  py-5     ' style={{boxShadow:'none'}}   >
                <Image src={item.image} alt={item.name}  style={skillImageStyle} />
                <Typography variant="h6" gutterBottom>
                  {item.name} 
                </Typography>
              </Paper>
              
          </SwiperSlide>
        ))}


      </Swiper>
      
    </Container>
    </div>
  );
}
