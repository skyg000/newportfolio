"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import swSt from '../pages/work/work.module.scss';
import '../pages/work/style.module.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function App() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <>
        <h1 className={swSt.title}> PROJECT </h1>
            <Swiper
                pagination={pagination}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={150}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1.5,
                    slideShadows: false,
                }}
                loop='true'
                modules={[EffectCoverflow, Pagination]}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                    },
                    780: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                    1600: {
                        slidesPerView: 1,
                    },
                }}
                className={swSt.mySwiper}
            >
                <SwiperSlide className={swSt.slide}>
                    <div className={swSt.worktitle}>
                        <b>포트폴리오 </b>
                        <p className={swSt.workskilltxt}> HTML / SCSS / NEXT.JS </p>
                    </div>
                    <div className={swSt.progroup}>
                        <Link href="https://github.com/skyg000/portfolio" target="_blank">
                            <img src="../img/work/portfolio/main.png" className={swSt.img}/>
                        </Link>
                        <div className={swSt.worktext}>
                            <p className={swSt.produce}>제작 : 2023. 11월</p>   
                            <p className={swSt.workskill}> 주요 기술 </p>
                            <hr/>
                            <p className={swSt.workskilltxt}> HTML / SCSS / NEXT.JS </p>
                            <p className={swSt.workplan}> 기획 의도 </p>
                            <hr/>
                            <p className={swSt.workplantxt}>
                                포트폴리오 제작
                            </p>
                            <p className={swSt.workres}> 담당업무 </p>
                            <hr/>
                            <p className={swSt.workplanrestxt}> 기획 / 디자인 / 전체 페이지 제작</p>
                        <div className={swSt.link}>
                            <p className={swSt.gitlink}> <Link href="https://github.com/skyg000/portfolio" target="_blank">
                                GitHub 링크 <br/> https://github.com/skyg000/portfolio</Link> 
                            </p>
                            <p className={swSt.workurl}> <Link href="https://hshportfolio.netlify.app/" target="_blank">
                                배포 링크 <br/> https://hshportfolio.netlify.app/</Link> 
                            </p>
                        </div>
                        </div>
                    </div>
                        <p className={swSt.workplantxt}>포트폴리오 제작 </p>
                </SwiperSlide>
                <SwiperSlide className={swSt.slide}>
                <div className={swSt.worktitle}>
                        <b> 별별연인 </b>
                        <p className={swSt.workskilltxt}> HTML / SCSS / NEXT.Js / MySql / MariaDB  </p>
                </div>
                    <div className={swSt.progroup}>
                        <Link href="https://b3o2.vercel.app/" target="_blank">
                            <img src="../img/work/b3o2/main.png" className={swSt.img}/>
                        </Link>
                        <div className={swSt.worktext}>
                            <p className={swSt.produce}>제작 : 2023. 10월</p>   
                            <p className={swSt.workskill}> 주요 기술 </p>
                            <hr/>
                            <p className={swSt.workskilltxt}> HTML / SCSS / NEXT.Js / MySql / MariaDB </p>
                            <p className={swSt.workplan}> 기획 의도 </p>
                            <hr/>
                            <p className={swSt.workplantxt}>
                            기존 웹/앱들은 한가지 컨텐츠만 제공(사주보기 or 소개팅) 하는데 
                            사주보기 + 소개팅 두가지를 합쳐서 사주를 통해 나에게 부족한 부분을 
                            채워 줄 수 있는 상대방의 사주를 소개하고 서로 마음이 맞는다면 소개팅까지 연결하는 서비스 입니다 .
                            </p>
                            <p className={swSt.workres}> 담당업무 </p>
                            <hr/>
                            <p className={swSt.workplanrestxt}> 기획 / 로그인 페이지 / 회원가입 페이지 / 서버 구축</p>
                        <div className={swSt.link}>
                            <p className={swSt.gitlink}> <Link href="https://github.com/skyg000/b3o2" target="_blank">
                                GitHub 링크 <br/> https://github.com/skyg000/b3o2</Link> 
                            </p>
                            <p className={swSt.workurl}> <Link href="https://b3o2.vercel.app/" target="_blank">
                                배포 링크 <br/> https://b3o2.vercel.app/</Link> 
                            </p>
                        </div>
                        </div>
                    </div>
                        <p className={swSt.workplantxt}> 사주를 통한 소개팅 앱 </p>
                </SwiperSlide>
                <SwiperSlide className={swSt.slide}>
                <div className={swSt.worktitle}>
                        <b> 나의하루 </b>
                        <p className={swSt.workskilltxt}> HTML / SCSS / REACT / PWA</p>
                    </div>
                    <div className={swSt.progroup}>
                        <Link href="https://skyg000.github.io/react-calendar/" target="_blank">
                            <img src="../img/work/calendar/calendar.png" className={swSt.img} />
                        </Link>
                        <div className={swSt.worktext}>
                            <p className={swSt.produce}>제작 : 2023. 09월</p>   
                            <p className={swSt.workskill}> 주요 기술 </p>
                            <hr/>
                            <p className={swSt.workskilltxt}> HTML / SCSS / REACT / PWA</p>
                            <p className={swSt.workplan}> 기획 의도 </p>
                            <hr/>
                            <p className={swSt.workplantxt}>
                            캘린더를 기반으로 개인 일정 정리가 가능하며, 
                            다이어리 형식으로 하루를 기록해 관리 합니다.
                            </p>
                            <p className={swSt.workres}> 담당업무 </p>
                            <hr/>
                            <p className={swSt.workplanrestxt}> 기획 / 디자인 / 전체 페이지 제작</p>
                        <div className={swSt.link}>
                            <p className={swSt.gitlink}> <Link href="https://github.com/skyg000/react-calendar" target="_blank">
                                GitHub 링크 <br/> https://github.com/skyg000/react-calendar</Link> 
                            </p>
                            <p className={swSt.workurl}> <Link href="https://skyg000.github.io/react-calendar/" target="_blank">
                                배포 링크 <br/> https://skyg000.github.io/react-calendar/</Link> 
                            </p>
                        </div>
                        </div>
                    </div>
                        <p className={swSt.workplantxt}>일정관리 </p>
                </SwiperSlide>
                <SwiperSlide className={swSt.slide}>
                <div className={swSt.worktitle}>
                        <b> To Eat </b>
                        <p className={swSt.workskilltxt}> HTML / SCSS / SCRIPT </p>
                    </div>
                    <div className={swSt.progroup}>
                        <Link href="https://skyg000.github.io/ToEat/" target="_blank">
                            <img src="../img/work/toeat/toeat.png" className={swSt.img}/>
                        </Link>
                        <div className={swSt.worktext}>
                            <p className={swSt.produce}>제작 : 2023. 07월</p>   
                            <p className={swSt.workskill}> 주요 기술 </p>
                            <hr/>
                            <p className={swSt.workskilltxt}> HTML / SCSS / SCRIPT </p>
                            <p className={swSt.workplan}> 기획 의도 </p>
                            <hr/>
                            <p className={swSt.workplantxt}>
                            포털 검색을 이용하면서 여러 블로그를 찾아 보고
                            맛집이라고 소개된 곳에 가면 소개된 내용과 다른 적이 있습니다.
                            사용자의 불편함을 해소 하고 사용자가 원하는 맛집을 찾을 수 있도록
                            믿을 만한 데이터를 제공 하고자 선정 하였습니다.
                            </p>
                            <p className={swSt.workres}> 담당업무 </p>
                            <hr/>
                            <p className={swSt.workplanrestxt}> 기획 / 관심목록 / 상세보기 </p>
                        <div className={swSt.link}>
                            <p className={swSt.gitlink}> <Link href="https://github.com/skyg000/ToEat" target="_blank">
                                GitHub 링크 <br/> https://github.com/skyg000/ToEat</Link> 
                            </p>
                            <p className={swSt.workurl}> <Link href="https://skyg000.github.io/ToEat/" target="_blank">
                                배포 링크 <br/>https://skyg000.github.io/ToEat/</Link> 
                            </p>
                        </div>
                        </div>
                    </div>
                        <p className={swSt.workplantxt}>서울 맛집지도 </p>
                </SwiperSlide>
                <SwiperSlide className={swSt.slide}>
                <div className={swSt.worktitle}>
                        <b> MOVIE </b>
                        <p className={swSt.workskilltxt}> HTML / SCSS / SCRIPT / REACT</p>
                    </div>
                    <div className={swSt.progroup}>
                        <Link href="https://r-movie.vercel.app/" target="_blank">
                            <img src="../img/work/movie/main.png" className={swSt.img}/>
                        </Link>
                        <div className={swSt.worktext}>
                            <p className={swSt.produce}>제작 : 2023. 08월</p>   
                            <p className={swSt.workskill}> 주요 기술 </p>
                            <hr/>
                            <p className={swSt.workskilltxt}>HTML / SCSS / SCRIPT / REACT </p>
                            <p className={swSt.workplan}> 기획 의도 </p>
                            <hr/>
                            <p className={swSt.workplantxt}>
                            외부 API를 통해 영화 및 TV프로그램 정보 사이트.
                            </p>
                            <p className={swSt.workres}> 담당업무 </p>
                            <hr/>
                            <p className={swSt.workplanrestxt}>  전체 페이지 제작</p>
                        <div className={swSt.link}>
                            <p className={swSt.gitlink}> <Link href="https://github.com/skyg000/r-movie.git" target="_blank">
                                GitHub 링크 <br/> https://github.com/skyg000/r-movie.git</Link> 
                            </p>
                            <p className={swSt.workurl}> <Link href="https://r-movie.vercel.app/" target="_blank">
                                배포 링크 <br/> https://r-movie.vercel.app/</Link> 
                            </p>
                        </div>
                        </div>
                    </div>
                        <p className={swSt.workplantxt}>외부 API를 통해 영화 및 TV프로그램 정보 사이트</p>
                </SwiperSlide>
                <SwiperSlide className={swSt.slide}>
                <div className={swSt.worktitle}>
                        <b> 안테나 뮤직 </b>
                        <p className={swSt.workskilltxt}> HTML / SCSS / SCRIPT </p>
                    </div>
                    <div className={swSt.progroup}>
                        <Link href="https://skyg000.github.io/git_project/clone_p/" target="_blank">
                            <img src="../img/work/clone/main.png" className={swSt.img}/>
                        </Link>
                        <div className={swSt.worktext}>
                            <p className={swSt.produce}>제작 : 2023. 06월</p>   
                            <p className={swSt.workskill}> 주요 기술 </p>
                            <hr/>
                            <p className={swSt.workskilltxt}> HTML / SCSS / SCRIPT</p>
                            <p className={swSt.workplan}> 기획 의도 </p>
                            <hr/>
                            <p className={swSt.workplantxt}>
                            기존 사이트를 유사한 기술(스택)들로 구현해본 프로젝트 입니다.
                            </p>
                            <p className={swSt.workres}> 담당업무 </p>
                            <hr/>
                            <p className={swSt.workplanrestxt}> 전체 페이지 제작</p>
                        <div className={swSt.link}>
                            <p className={swSt.gitlink}> <Link href="https://github.com/skyg000/git_project.git" target="_blank">
                                GitHub 링크 <br/> https://github.com/skyg000/git_project.git</Link> 
                            </p>
                            <p className={swSt.workurl}> <Link href="https://skyg000.github.io/git_project/clone_p/" target="_blank">
                                배포 링크 <br/> https://skyg000.github.io/git_project/clone_p/</Link> 
                            </p>
                        </div>
                        </div>
                    </div>
                        <p className={swSt.workplantxt}>기존 사이트를 유사한 기술(스택)들로 구현해본 프로젝트 입니다. </p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
