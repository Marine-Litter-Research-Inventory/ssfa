// @ts-nocheck
import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from 'components/StyledComponents/Header';
import Body from 'components/StyledComponents/Body';

const logos = [
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/CIL-logo-new200px.png',
    alt: 'CIL logo',
    style: { width: '100%' },
  },
  // {
  //   src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/NUS.png',
  //   alt: 'NUS logo',
  //   style: { width: '100%' },
  // },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/TMSI.png',
    alt: 'TMSI logo',
    style: { width: '100%' },
  },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/cobsea-logo-coloured-270.png',
    alt: 'COBSEA logo',
    style: { width: '100%' },
  },
  // {
  //   src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/download.png',
  //   alt: 'UNEP logo',
  //   style: { width: '100%' },
  // },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/SEA-circular_RGB_badge-color-min1.png',
    alt: 'SeaCircular logo',
    style: { width: 'auto', height: 80 },
  },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/SJINML_Logo.png',
    alt: 'StJohn logo',
    grid: [11, 6, 6],
    style: { width: '100%' },
  },
]

// const Tile = ({ header, body }) => {

//   const TileHeader = styled("div")(({ theme }) => ({
//     backgroundColor: theme.palette.quaternary.main,
//     color: "white",
//     padding: "0.5rem",
//     borderRadius: "1rem 1rem 0 0",
//     fontWeight: "bold",
//   }))

//   const TileBody = styled("div")(({ theme }) => ({
//     backgroundColor: theme.palette.primary.main,
//     padding: "1rem",
//     borderRadius: "0 0 1rem 1rem",
//   }))

//   return (
//     <div>
//       <TileHeader>{header}</TileHeader>
//       <TileBody>
//         <ul style={{ listStyleType: "none" }}>
//           {body.map((contributor, idx) => (
//             <React.Fragment key={idx}>
//               <li style={{ margin: "0.5rem 0" }}>{contributor.name}</li>
//               {body.length - 1 !== idx ? <Divider /> : null}
//             </React.Fragment>
//           ))}
//         </ul>
//       </TileBody>
//     </div>
//   )
// }

export default function About() {

  return (
    <>
      <Header variant='h2' align='center'>
        About
      </Header>
      <Container maxWidth='md' sx={{ marginBottom: 5 }}>
        <Body variant='body1' align='justify'>
          The regional team involved in the development of the database was composed of more than 30 researchers from Southeast and East Asia.
          <br /><br />
          It has been coordinated by a multi-disciplinary core team from the National University of Singapore (NUS) with the Centre for International Law (CIL) as overall lead coordinator and the Tropical Marine Science Institute  (TMSI) as lead-controller of marine scientific data extraction. The NUS home team included regional researchers from Singapore, China, Indonesia, RO Korea and Vietnam. It was composed of Youna Lyons, Cheng Ling Lim, 刘雨露 (Yulu Liu), Bùi Quang Huy (Bui Quang Huy), Dennis Tan, Dita Liliansa, 정다운 (Dawoon Jung),  Sng Wen Xin, Vũ Hải Đăng (Vu Hai Dang) from CIL; Mei Lin Neo, Jenny Fong, Lee Hsien Rong Samuel and Theresa Su from TMSI.
          <br /><br />
          The extended region team, without whom the RRI 2.0 could not have been built, included Japareng Lalung and his team (Universiti Sains Malaysia, Malaysia), Changi Wong and Moritz Mueller (Swinburne Sarawak, Malaysia), Văn Phạm Đăng Trí (Van Pham Dang Tri) and Lê Hoàng Hải Anh (Le Hoang Hai Anh) (Can Tho University, Vietnam), Neil Angelo S. Abreo (University of the Philippines-Mindanao, the Philippines), Ronan Baculi and Deo Onda (Marine Science Institute, the Philippines), ชวลิต เจริญพงษ์ (Chawalit Net Charoenpong), ปิ่นมนัส บูชา (Pinamas Bucha), เพ็ญใจ สมพงษ์ชัยกุล (Penjai Sompongchaiyakul) and ราฮุล เมโรทรา (Rahul Mehrotra) (Chulalongkorn University, Thailand), Sulistiowati and Muhammad Reza Cordova (Indonesian Institute of Science (LIPI), Indonesia), သန္တာကိုကြီး (Thanda Ko Gyi) (Myanmar Ocean Project, Myanmar), 李道季 (Li Daoji) and 朱礼鑫 (Zhu Lixin) and their team (East China Normal University, China). Unfortunately, no Japanese researchers could join us. However, we will continue to extend the regional teams and contributing researchers, including from institutions in RO Korea and Japan.
          <br /><br />
          The team, RRI 2.0 and its visual displays and factsheets also benefited greatly from the external critical and constructive review of Karen Raubenheimer (ANCORS, University of Wollongong, Australia) and the provision of graphic-design content (including the dugong mascot) and batik colour scheme by Fanny Esquivel (https://www.fannyesquivel.net).
          <br /><br />
          Key institutional partners in the development projects have their logo below.
        </Body>
        <Grid
          container
          gap={5}
          justifyContent="center"
          alignItems='center'
          align='center'
        >
          {logos.map((logo, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={logo.grid ? logo.grid[0] : 5} sm={logo.grid ? logo.grid[1] : 3} md={logo.grid ? logo.grid[2] : 3} >
                <img src={logo.src + '?raw=true'} alt={logo.alt} style={logo.style} />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  )
}