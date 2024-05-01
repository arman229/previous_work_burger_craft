'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {certificates} from '@/app/data/data';
import './styles.css';
import { titleStyle } from "./titlestyle";

export default function MyCertificate() {

    const gridItemStyle = {
        textAlign: 'center',
        padding: '16px',


    };

    const paperStyle = {
        padding :"8px",
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

  return (
    <div style={{ backgroundColor: '#333', color: '#fff',   }}>      <section style={{
        padding: '32px 0',
        userSelect: "none" }}   sx={{ py: 4,}}>

  
    <Container   maxWidth="md" sx={{ py: 4 }}>
    <Typography variant="h4"  style={titleStyle as React.CSSProperties} gutterBottom>
                    Certificates
                </Typography>
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className={"flex justify-center"}
        // breakpoints={{
        //   992: { slidesPerView: 4 },
        //   630: { slidesPerView: 3 },
        //   500: { slidesPerView: 2 },
        //   400: { slidesPerView: 1 },
        // }}
      >
        {certificates.map((certificate:any, index) => (
          <SwiperSlide key={ index} className='' >
             
             <Paper style={paperStyle}>
                                    <Image src={certificate.image} alt={certificate.title} style={{ maxWidth: '100%' }} />
                                    <Typography variant="h6" gutterBottom>
                                        {certificate.title}
                                    </Typography>
                                    <Typography   color="textSecondary">
                                        Issued by {certificate.issuer}
                                    </Typography>
                                    <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                                        View Certificate
                                    </a>
                                </Paper>
            
          </SwiperSlide>
        ))}


      </Swiper>
      
    </Container>
    </section>
    </div>
  );
}
