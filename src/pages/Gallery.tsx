import { motion } from 'motion/react';

export default function Gallery() {
  const projects = [
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.29350-15/335791789_742977563898299_3419921342307258942_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzA1OTY5OTA5NzczNjEwMTIxNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=nFPzLL65sjwQ7kNvwGSgCds&_nc_oc=AdmNKO6sjSk5U2pVRPNjivuYFysdkMdvWMFi7A55fwjTTzDwwpO8ZqUZdpB5DwzR9bA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=5svuEUyOBayF4sP82Qea2A&_nc_ss=8&oh=00_AfzUt7QGK1oAYzF63YhaWwyxd77GAyJ11tVo1RYlsGmJ1A&oe=69BDE4BB', title: 'Premium Hardwood Deck', category: 'Deck Construction', span: 'md:col-span-8' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.29350-15/341601816_763689641950114_8309008987120544485_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzA4Mjc5ODE0MjgzMTExNDgyMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=8ueaAN0fAysQ7kNvwHozGuF&_nc_oc=AdkDKY13ZhJL8yjlKXVuspf0-iYzfqk9A1iS0I0ZYiGoEvGMFMTg7328FyCtzfhmLqg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=5svuEUyOBayF4sP82Qea2A&_nc_ss=8&oh=00_Afw-QXYPysLOh7H1u1Eopw1grgtLaHPdUeCfK7AZZW-hUg&oe=69BE052F', title: 'Outdoor Living Area', category: 'Patio Building', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.29350-15/418344099_747850473859663_7245520500762221704_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzI3Nzg2NDY0MTIzNTk4MjQzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=WeSENJKNtkAQ7kNvwE-OxpR&_nc_oc=AdnY7n3yiU7dGT9Qnm3O31djy2PvW9yZUonf6uCmaYD8_q4i_NbJBDlajDtdN541xpA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_Afw8iXokEqoT_9eVYWj9ytWu_UBHaDQiVHyMt-Lw4e1Dtw&oe=69BDFABD', title: 'Custom Timber Pergola', category: 'Custom Carpentry', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.29350-15/402759093_854940909661582_6146480410355841870_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzIzODYyNjM5MDIzNTI5NzcwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4ODEyLnNkci5kZWZhdWx0X2ltYWdlLkMzIn0%3D&_nc_ohc=TGMcS91KOeMQ7kNvwFlt3HP&_nc_oc=AdkEQJao5plXms1HO5MZY3cZZFTWJkmNJ4PqDo23sMQQYRjsEHop7N3A7XlHMuVLRfs&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_AfwH65IgX9NaUluVw6HNtmM0Er1tPjMuqbMj4buU33j5qw&oe=69BE0C9D', title: 'Elevated Decking', category: 'Deck Construction', span: 'md:col-span-8' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.29350-15/440891556_315946341550888_926588257166634938_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzM2OTA1NDQzMDgwNjQ1NzM5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=h2EP4qVLjo4Q7kNvwFCHNRN&_nc_oc=AdmMgd9q8enlDSag3Zt33uSFwtj1oB4U7lrUZ3-uTXJ775vxQbLQ4-Jk6np5MAeEnlc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_AfwkVjSTS5z31dMN8F6IHoQM9w4qUdKH2DM2T8iZSZvNmw&oe=69BDF931', title: 'Poolside Retreat', category: 'Outdoor Living', span: 'md:col-span-6' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.29350-15/448161812_466698139169327_230346062305775316_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzM4NzI4NTYxNzAwMzYxNDEwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=m7cTkBPrwKwQ7kNvwF6aSvQ&_nc_oc=Adl09Ar7D9zOIX2AcrHSgEf93-czuvxRv-yHw6M19XTKKlHmAvl78pEKvZJQ2IYuTMw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_AfweCvJUoQhHYRo2BBGJPpbFQ_csgvmusLg77FD2T2XEKg&oe=69BE004F', title: 'Modern Patio', category: 'Patio Building', span: 'md:col-span-6' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.29350-15/449146387_407716038420965_7914162675036257093_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzM5OTkxNzU0OTI5Mzk3NjYzNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=T6hhzsLj9fYQ7kNvwHS6f0Y&_nc_oc=AdmgncNtmokHOLnPFCmayE4wqklPJEIT9b4xOYYCp-OAJgRWTJ2jiJNjsK76NsDJ9d0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_AfzWyrNrplZjXlJVwrCQpEcatd8nTT8sOtDH-n32IRvV7g&oe=69BE092F', title: 'Architectural Timber Feature', category: 'Custom Carpentry', span: 'md:col-span-12' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/485705587_17950734167943403_1618327974011019643_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzU5MjY0ODE2Njc3ODY5NzExNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=0qjLUorHfRkQ7kNvwEn-NT7&_nc_oc=AdmH698iv-FlpIUErDnVEJg70ZkRHi26IZxGqnjUBXJ8W7P9H19ARcE7cI12DuOPlsA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_AfxiSXYh-hiu_YgCPr97V2Iw6YifloxCijt5pYYTpxkVEg&oe=69BDFF79', title: 'Backyard Transformation', category: 'Outdoor Living', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/487387691_17951656004943403_1364621089203031604_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzU5ODg3NDI0OTgwMjk0MDg3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=r9mQ1crCVf0Q7kNvwHjidXx&_nc_oc=Adn-YeoxjFLsSsQ7IhUkL92mQR8FgMduJHQn_OtA2lO76awFTeeaAP4KMpgzaFIM3nk&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_AfxBzcn60VwbWLt1ZCEk1hkXb8i1JQ26x96uj-QFdyHHbw&oe=69BDFD4E', title: 'Composite Decking', category: 'Deck Construction', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/488724713_17952012143943403_2427919710958936729_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=MzYwMTExMjAwMjM4MDg3ODU5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=POVnL6Gc4ioQ7kNvwFnHZpO&_nc_oc=AdnNoWPdFcL_H_7wfEyHxrotgoPU0n4t4AJh2xw6LFn32piJbtJL6npB2iIFYPrlETk&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_Afz0fG2t5Apt3THetbK9bntveSPfubQI9RPseQqyBYo-9g&oe=69BDD856', title: 'Timber Screening', category: 'Custom Carpentry', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t39.30808-6/489706305_122128202174625145_4831127677664957614_n.jpg?stp=c0.0.1080.1350a_cp6_dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzYwNzk0NTQ1NDkzNzYyNjYxNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=ntvEprzWz_4Q7kNvwEEIYME&_nc_oc=Adk3u3Uly9QXuKBdrFxHhsoFXI9MrrigUeq7ABxZc_WTmx1JwXFnFsi6NzvA1bwv3ZY&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BFHf5a05QDI0abbS3Gn_yw&_nc_ss=8&oh=00_AfyfiAuDZHfovgTOO6SMtw1jb0E73j45lehFpi8J7SDFwQ&oe=69BDECB3', title: 'Entertainment Area', category: 'Outdoor Living', span: 'md:col-span-8' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t39.30808-6/490663051_122128419980625145_8862823598475935248_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzYwODg2NTgzNDI4ODM5NTc1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=d_jrV3Hkv7EQ7kNvwHAz_KL&_nc_oc=AdnfXFIvbQLACfRXdnPYLlBsZKh7HPHSdzJXBG89hsMRE06Gi-cKjid8MbXWiTMUa50&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=ly_CLLXj-tMkLc90lLVT0w&_nc_ss=8&oh=00_AfychKILqZ9QAjYGVYPtCdC9BGthE3nzcEiAwv3LkvhUoA&oe=69BDE593', title: 'Custom Stairs', category: 'Deck Construction', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/496105513_17955846323943403_3736415212223550505_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzYyNjk0Njc1NDgxMTcxNDE4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=ub5FF8tkarEQ7kNvwE8PoiM&_nc_oc=Adl5jzWavJd7RuGq8VXhVPzd2DVX9ZEUe98EAWJVKWux2JpME9Fc3ct4DJNW8gCTSL0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=ly_CLLXj-tMkLc90lLVT0w&_nc_ss=8&oh=00_AfwTyFTdIgATOis8K6txGdB1-aFAykK5gPhuV16XByxY5Q&oe=69BE05B7', title: 'Covered Deck', category: 'Patio Building', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/498656933_17956999763943403_6681354863009649437_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzYzNDMyNTc1Nzc0MjczMjIwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=bi-x6YwnxD8Q7kNvwEGWsNC&_nc_oc=Adnc33Zk5m7USek10qpDZI7jYCC5w00-FMN9VZfBL5qyJ_HUsmnQbwEOzIFuWPIvYtI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=ly_CLLXj-tMkLc90lLVT0w&_nc_ss=8&oh=00_AfwLVTukMLBWDYpsjFCV_HuG6d9VAkwnieMSWekX46LOvw&oe=69BDF461', title: 'Outdoor Kitchen Setup', category: 'Outdoor Living', span: 'md:col-span-8' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/504268354_17959469642943403_8009026741582243412_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzY0OTMzNjQ4NzYxNzM3Njg5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=buG3_3PuO-QQ7kNvwFVtYw2&_nc_oc=Adko9Ck-Xrv6mC4Opx9KDRQtc_tj2vMevjWyzuizhyGCn_Oe4skE91KhyJFvP_i2XYg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=ly_CLLXj-tMkLc90lLVT0w&_nc_ss=8&oh=00_AfxKhXOztHs2nxz-8ECjcPoRIiHB9uyIZhnYfGBLdMlMsw&oe=69BDF127', title: 'Hardwood Flooring', category: 'Custom Carpentry', span: 'md:col-span-6' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t39.30808-6/507434932_122137379462625145_7995602816225879981_n.jpg?stp=c0.0.1080.1350a_cp6_dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzY1NTA3MDg0NjY2NzkzMTM3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=3lnMrAJ9DZgQ7kNvwGWly1I&_nc_oc=Adm7kK_WLcnM0qsZMw6lb8-jmhPuSxCevuTCAjoqHjQy3gJRKTs3g0DyC7YiSi1HWDY&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=ly_CLLXj-tMkLc90lLVT0w&_nc_ss=8&oh=00_AfxJON_aCuyhfb1xNTr2T0fWEWnr7aMC_oH-XbGtVSbxwA&oe=69BDE176', title: 'Alfresco Dining', category: 'Patio Building', span: 'md:col-span-6' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t39.30808-6/509958085_122137885262625145_7294134429809201777_n.jpg?stp=c0.0.1080.1350a_cp6_dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzY1Nzk1NDk4NTY4MzUzNzMxMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=7B2enIbJ1fwQ7kNvwHfMUOJ&_nc_oc=AdnTgrGzPi5e4Djr5w8QEdQoY1vLyqCnJYEVGklKxlHRctHmhQWCHaHfwotJrixoIMs&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=ly_CLLXj-tMkLc90lLVT0w&_nc_ss=8&oh=00_AfxCRpApbmnbBiifsY4meAZwrlRwwhrFfxoF5EGsaDyiNw&oe=69BDFDAF', title: 'Luxury Deck Extension', category: 'Deck Construction', span: 'md:col-span-12' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/515516893_17962201583943403_4205912635178698203_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzY2MzgwNTkxMTg0MTY3MjEzNDE3OTYyMjAxNTc3OTQzNDAz.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=LYXr9S0CZFkQ7kNvwHDdglG&_nc_oc=AdkfNVYgwakmvlQkEj_5Cu2W2X_e6heaZKppqPy2GgKIiPZ8PqoA71kX2sSJ4XEZIvo&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=ly_CLLXj-tMkLc90lLVT0w&_nc_ss=8&oh=00_AfxzwgynM-mF4q-K3IyRihr6_eyJICN4iUYKXIS-QAW59g&oe=69BDE7E3', title: 'Timber Balustrade', category: 'Custom Carpentry', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t39.30808-6/515437297_122139921842625145_8733756633791607518_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzY2OTgxMjc3OTIwNjczNjM4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=c5Thust7YY0Q7kNvwElHHkF&_nc_oc=AdkMOBweOM_VVGUStBOobW8O6IyNA2i5vQOeT39Wit3HvxCccqDEk3lRIP3_6mYNoRo&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=BKetZyUVmxy-cU-Dz9Ja-Q&_nc_ss=8&oh=00_AfzIpv49gLqJjypiRx5GtOB8H_vTSR2FNiCu01BuwailBw&oe=69BDD9BD', title: 'Garden Deck', category: 'Outdoor Living', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/515593721_17962492325943403_1724831463164777178_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=MzY2ODg4ODc3ODAwMzMwNzQyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=KhMy-QjmI98Q7kNvwHZVwaG&_nc_oc=AdlzwriCxaZ3f-rViCcYlrSju0pHdW7MwdXJtcvPTY2tTWRoMGNj-s3O-jfyBZvSZa8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=BKetZyUVmxy-cU-Dz9Ja-Q&_nc_ss=8&oh=00_Afx2AloTYK-6HrFHNAlmYABJc8j0pfumK5k3luYMolNBDg&oe=69BDD9F8', title: 'Sunken Lounge', category: 'Outdoor Living', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t39.30808-6/518270466_122141020610625145_8159964218591551132_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzY3Njc4NDE0Nzc2MzE4NTIxNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=ewDtLKMt3P8Q7kNvwET3rZD&_nc_oc=AdmqvKkbDaLRJXvJiDT32YeRavhkzZBvihx-ii9VD1gGkKVdHKqs42lAJ50JOEbl7Z4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=BKetZyUVmxy-cU-Dz9Ja-Q&_nc_ss=8&oh=00_AfyOnBxo6DgNzpO8vOBxsFaYwpiw-cr8T_21h8ZbroGuLQ&oe=69BDE0B6', title: 'Multi-level Deck', category: 'Deck Construction', span: 'md:col-span-8' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t39.30808-6/518270998_122141125736625145_4764767420616350896_n.jpg?stp=c0.0.1080.1350a_cp6_dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzY3NzE3MDQyMTYyOTU5NDg1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MS5zZHIuQzMifQ%3D%3D&_nc_ohc=PPply_gRuyoQ7kNvwHBTkvV&_nc_oc=AdlU9SM6QWaK3m_Cklipx2rVJi3N7WeJUH35lWWrgmfeN8cnU_H65_fEIFJ7iQBRzZU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BKetZyUVmxy-cU-Dz9Ja-Q&_nc_ss=8&oh=00_AfxGGTrr04otN2Dtwr9tHNDNycpDbY4uPvGtA0co7BsGsg&oe=69BDFEC9', title: 'Timber Framing', category: 'Custom Carpentry', span: 'md:col-span-4' },
    { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/521710089_17963949386943403_5239968186200384506_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzY3ODM4MDA0MzUxMDExMjMwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MTU3MS5zZHIuQzMifQ%3D%3D&_nc_ohc=T-mQjGsv4hAQ7kNvwE2yqPW&_nc_oc=AdkEFoXY8VFRLihd3gvMrjaP1JcwdLi-K-OwMWni-vSWEgkO9oFyw7MpE-bV7FizyjA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=BKetZyUVmxy-cU-Dz9Ja-Q&_nc_ss=8&oh=00_Afzwl4oAg2oQYi26lNtYcRHxhl5YG0YlTzxiSK-Gxwibcg&oe=69BDF182', title: 'Courtyard Renovation', category: 'Patio Building', span: 'md:col-span-6' },
    { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/525309886_17965342775943403_9033411845162527329_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=MzY4NzM0OTAxNTU1MDkyNjIwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=dprohbUsN1gQ7kNvwE2jo1i&_nc_oc=AdlWEu3qeo2GATLncQMHhuXapSvmxih-8E8Aen0Fr_N10UDT5AbUCTtQCba9tOcv5yQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=BKetZyUVmxy-cU-Dz9Ja-Q&_nc_ss=8&oh=00_Afzv1WUM9f9uXft8Q7Cualxv6i5hyQR2Idn6Elfcw_ASQg&oe=69BDF711', title: 'Bespoke Outdoor Space', category: 'Outdoor Living', span: 'md:col-span-6' },
  ];

  return (
    <div className="w-full pt-32 pb-16 bg-paper">
      
      {/* Header */}
      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10vw] md:text-[8vw] leading-[0.85] font-serif tracking-tighter uppercase mb-8"
          >
            Selected <span className="italic text-wood">Works.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full h-[1px] bg-ink/10 mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-ink/70 max-w-2xl text-balance"
          >
            A curated collection of our finest outdoor living spaces, showcasing our commitment to architectural elegance and enduring quality.
          </motion.p>
        </div>
      </section>

      {/* Editorial Gallery Grid */}
      <section className="px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 lg:gap-12 space-y-8 lg:space-y-12">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="break-inside-avoid group cursor-pointer"
              >
                <motion.div 
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  className="overflow-hidden mb-6 rounded-sm bg-ink/5"
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="flex justify-between items-start border-t border-ink/10 pt-4">
                  <div>
                    <h3 className="text-2xl font-serif text-ink mb-1">{project.title}</h3>
                    <p className="text-ink/50 font-light text-sm">{project.category}</p>
                  </div>
                  <span className="text-xs font-mono text-wood opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
