import React from 'react';
import { motion } from 'framer-motion';
import ThreeDMarquee from './components/ui/3d-marquee';

const _baseImages = [
  '/image/group/thumb/1341CC6C-8660-4B04-ACEE-FC6BF39F6C7D_1_105_c.jpeg',
  '/image/group/thumb/1904BD72-F4F5-45CB-9BC7-F2A5DFE2365B_4_5005_c.jpeg',
  '/image/group/thumb/42B5A4A1-B58E-4460-B006-7D8F27E267FF_1_105_c.jpeg',
  '/image/group/thumb/592DD97F-E393-46BA-83AF-9BF1AFC39491_1_105_c.jpeg',
  '/image/group/thumb/6BD23F60-D494-4C3E-A3B5-A7B49E8AAC6F_1_105_c.jpeg',
  '/image/group/thumb/729A2C52-BDF1-4E09-9ABD-35889AE34110_1_105_c.jpeg',
  '/image/group/thumb/93CD1948-2525-4204-BBAE-8C3DEA9B01E8_1_105_c.jpeg',
  '/image/group/thumb/9D988DC9-8BCF-4B23-959D-050803C58C50_1_105_c.jpeg',
  '/image/group/thumb/C1AB61FC-7598-43A2-9D07-83DF961EA4D9_1_105_c.jpeg',
  '/image/group/thumb/CCD6B35A-5BED-4BC6-86B0-763F1BAFFD87_1_105_c.jpeg',
  '/image/group/thumb/D0043677-6AAD-4DF4-BB5B-2F30F1BC4FB0_1_105_c.jpeg',
  '/image/group/thumb/D08896B6-1489-40EC-B660-62E309390BFF_1_105_c.jpeg',
  '/image/group/thumb/DDF9AD11-32DF-4D83-B8F5-AD7BA092B19A_1_105_c.jpeg',
  '/image/group/thumb/EE36863B-C8DE-4208-AE51-E8F31CAB1299_1_105_c.jpeg',
];
const groupThumbImages = Array.from({ length: Math.max(35, _baseImages.length) }, (_, i) => _baseImages[i % _baseImages.length]);

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SlideIn = ({ children, delay = 0, from = 'left', className = '' }: { children: React.ReactNode, delay?: number, from?: 'left' | 'right', className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: from === 'left' ? -60 : 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* 슬라이드 래퍼 — 각 단위가 화면 높이를 채우고 스냅 */
const Slide = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`min-h-[100svh] snap-start flex flex-col items-center justify-center px-6 py-16 ${className}`}>
    {children}
  </section>
);

const chapters = [
  { title: "지피터스", desc: "AI를 공부하다 서로가 더 신기해진", img: "/image/IMG_7505.png" },
  { title: "와인바", desc: "재즈가 흘렀고, 와인이 흘렀고, 시간도 흘렀다", img: "/image/IMG_2316.png" },
  { title: "야구장", desc: "같은 팀을 응원하면 마음도 같아진다", img: "/image/43D545D0-CC04-4B05-8A48-7DC82A53C0CE_1_105_c.jpeg" },
  { title: "마냥 즐거운 일만 있진 않았다", desc: "우린 같이 이겨내는 법을 배웠다", img: "/image/hospital.png", pos: "top" },
  { title: "극복", desc: "부서진 자리마다 금을 입히듯 더 단단해졌다", img: "/image/62DDE8B9-3F28-4A7E-81A9-AEE3C29C1B0D_1_105_c.jpeg" },
  { title: "이사", desc: "같은 지붕 아래, 첫 발을 내딛다", img: "/image/4B53D5B4-07FF-4B5F-8382-D648E5C75672_1_105_c.jpeg" },
  { title: "해커톤", desc: "우승보다 빛났던 건 옆에 있던 사람", img: "/image/IMG_2797.PNG" },
  { title: "보라카이 · 코타키나발루", desc: "어디든 좋았다, 네가 있어서", img: "/image/9459A91E-06FD-48C8-A223-E008100B11FE_1_105_c.jpeg" },
  { title: "웨딩 사진 촬영", desc: "우리의 가장 아름다운 순간을 담다", img: "/image/B7AA0088-EBF0-45E8-B1AD-919817535A74_1_105_c.jpeg" },
];

const App = () => {
  return (
    <div className="h-[100svh] overflow-y-auto snap-y snap-mandatory bg-[#f5f0eb] text-[#2c2825] font-sans selection:bg-[#2c2825] selection:text-[#f5f0eb]">

      {/* ═══════════ HERO ═══════════ */}
      <section
        className="min-h-[100svh] snap-start flex flex-col items-center justify-center text-center px-6 relative"
        style={{ backgroundImage: 'url(/image/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p className="text-white/60 text-sm tracking-[0.4em] uppercase font-sans mb-8">A Story of Two Families</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-wider font-light">
            Nuri
            <span className="text-white/40 mx-3 md:mx-6 font-extralight">&</span>
            Injun
          </h1>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-white/30" />
            <p className="text-white/70 font-serif italic text-lg md:text-xl">두 별이 같은 하늘 아래 섰습니다</p>
            <div className="w-16 h-px bg-white/30" />
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="w-px h-12 bg-white/30 mx-auto mb-2" />
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-sans">Scroll</span>
        </motion.div>
      </section>

      {/* ═══════════ 누리 가족 ═══════════ */}
      <Slide>
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-[#2c2825]/40 font-sans">Our Roots</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 font-light text-[#2c2825]">
                우리를 이 자리까지 키워준 사람들
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
            <SlideIn delay={0.1} from="left" className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src="/image/KakaoTalk_Photo_2026-03-11-22-52-11.jpeg" alt="누리 가족" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </SlideIn>
            <SlideIn delay={0.3} from="right" className="md:col-span-5 md:pl-4">
              <span className="text-xs tracking-[0.3em] uppercase text-[#2c2825]/40 font-sans">Nuri's Family</span>
              <h3 className="font-serif text-3xl md:text-4xl mt-3 mb-6 font-light">누리 가족</h3>
              <div className="w-10 h-px bg-[#2c2825]/20 mb-6" />
              <p className="text-[#2c2825]/60 font-sans text-sm leading-relaxed mb-4">엄마, 아빠, 여동생 아람</p>
              <p className="font-serif italic text-xl text-[#2c2825]/80 leading-relaxed">"사랑이 뭔지 처음 가르쳐준 사람들"</p>
            </SlideIn>
          </div>
        </div>
      </Slide>

      {/* ═══════════ 인준 가족 ═══════════ */}
      <Slide>
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
            <SlideIn delay={0.1} from="left" className="md:col-span-5 md:pr-4 order-2 md:order-1">
              <span className="text-xs tracking-[0.3em] uppercase text-[#2c2825]/40 font-sans">Injun's Family</span>
              <h3 className="font-serif text-3xl md:text-4xl mt-3 mb-6 font-light">인준 가족</h3>
              <div className="w-10 h-px bg-[#2c2825]/20 mb-6" />
              <p className="text-[#2c2825]/60 font-sans text-sm leading-relaxed mb-4">할머니, 엄마, 남동생 인성</p>
              <p className="font-serif italic text-xl text-[#2c2825]/80 leading-relaxed">"단단함이 뭔지 처음 보여준 사람들"</p>
            </SlideIn>
            <SlideIn delay={0.3} from="right" className="md:col-span-7 order-1 md:order-2">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src="/image/IMG_2798_fixed.png" alt="인준 가족" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </SlideIn>
          </div>
        </div>
      </Slide>

      {/* ═══════════ 첫 만남 ═══════════ */}
      <Slide className="bg-[#2c2825] text-[#f5f0eb]">
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-[#f5f0eb]/40 font-sans">How We Met</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 font-light">봄날, 텐트 하나 사이에서</h2>
            </div>
            <p className="text-center font-serif italic text-lg md:text-xl text-[#f5f0eb]/60 mb-16 max-w-xl mx-auto leading-relaxed">
              "자라섬 풀밭에서 양말을 나눠주다가<br />마음도 나눠주게 됐습니다"
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            <FadeIn delay={0.15}>
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src="/image/IMG_1061.JPG" alt="만남 1" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000 opacity-90 hover:opacity-100" referrerPolicy="no-referrer" />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="aspect-[4/3] overflow-hidden rounded-sm md:mt-16">
                <img src="/image/IMG_0976.JPG" alt="만남 2" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000 opacity-90 hover:opacity-100" referrerPolicy="no-referrer" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* ═══════════ 3D Marquee ═══════════ */}
      <Slide className="overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <ThreeDMarquee images={groupThumbImages} />
          </FadeIn>
        </div>
      </Slide>

      {/* ═══════════ 함께한 순간들 — 섹션 타이틀 ═══════════ */}
      <Slide>
        <FadeIn>
          <div className="text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-[#2c2825]/40 font-sans">Our Chapters</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 font-light">우리가 함께 써 내려간 목차들</h2>
          </div>
        </FadeIn>
      </Slide>

      {/* ═══════════ 함께한 순간들 — 각 챕터 ═══════════ */}
      {chapters.map((item, idx) => (
        <Slide key={idx}>
          <div className="max-w-6xl mx-auto w-full">
            <FadeIn delay={0.1}>
              <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center">
                {idx % 2 === 0 ? (
                  <>
                    <div className="md:col-span-7">
                      <div className="aspect-[4/3] overflow-hidden rounded-sm relative">
                        <div className="absolute inset-0 bg-[#2c2825]/10 hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000"
                          style={item.pos ? { objectPosition: item.pos } : undefined}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-5 md:pl-4">
                      <span className="text-xs tracking-[0.3em] uppercase text-[#2c2825]/40 font-sans">Chapter {String(idx + 1).padStart(2, '0')}</span>
                      <h3 className="font-serif text-3xl md:text-4xl mt-3 mb-6 font-light">{item.title}</h3>
                      <div className="w-10 h-px bg-[#2c2825]/20 mb-6" />
                      <p className="font-serif italic text-xl text-[#2c2825]/70 leading-relaxed">"{item.desc}"</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-5 md:pr-4 order-2 md:order-1">
                      <span className="text-xs tracking-[0.3em] uppercase text-[#2c2825]/40 font-sans">Chapter {String(idx + 1).padStart(2, '0')}</span>
                      <h3 className="font-serif text-3xl md:text-4xl mt-3 mb-6 font-light">{item.title}</h3>
                      <div className="w-10 h-px bg-[#2c2825]/20 mb-6" />
                      <p className="font-serif italic text-xl text-[#2c2825]/70 leading-relaxed">"{item.desc}"</p>
                    </div>
                    <div className="md:col-span-7 order-1 md:order-2">
                      <div className="aspect-[4/3] overflow-hidden rounded-sm relative">
                        <div className="absolute inset-0 bg-[#2c2825]/10 hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000"
                          style={item.pos ? { objectPosition: item.pos } : undefined}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </Slide>
      ))}

      {/* ═══════════ 확신의 순간 — 누리 → 인준 ═══════════ */}
      <Slide className="bg-[#eae4dc]">
        <div className="max-w-5xl mx-auto w-full">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-[#2c2825]/40 font-sans">The Moment</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 font-light">아, 이 사람이구나</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center max-w-3xl mx-auto">
              <div className="md:col-span-7">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img src="/image/E1B205A8-5451-4657-A79A-A2134017C40B_1_105_c.jpeg" alt="누리" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="md:col-span-5 md:pl-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-2xl font-light">누리</span>
                  <span className="text-[#2c2825]/30">&#8594;</span>
                  <span className="font-serif text-2xl font-light">인준</span>
                </div>
                <div className="flex gap-2 mb-6">
                  <span className="text-xs text-[#2c2825]/40 border border-[#2c2825]/15 px-3 py-1 rounded-full font-sans">#다리수술</span>
                  <span className="text-xs text-[#2c2825]/40 border border-[#2c2825]/15 px-3 py-1 rounded-full font-sans">#든든한조력자</span>
                </div>
                <blockquote className="font-serif italic text-xl text-[#2c2825]/70 leading-relaxed border-l-2 border-[#2c2825]/15 pl-6">
                  "나의 남편이자 보호자가 이 사람이다"
                </blockquote>
              </div>
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ═══════════ 확신의 순간 — 인준 → 누리 ═══════════ */}
      <Slide className="bg-[#eae4dc]">
        <div className="max-w-5xl mx-auto w-full">
          <FadeIn delay={0.15}>
            <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-center max-w-3xl mx-auto">
              <div className="md:col-span-5 md:pr-4 order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-2xl font-light">인준</span>
                  <span className="text-[#2c2825]/30">&#8594;</span>
                  <span className="font-serif text-2xl font-light">누리</span>
                </div>
                <div className="flex gap-2 mb-6">
                  <span className="text-xs text-[#2c2825]/40 border border-[#2c2825]/15 px-3 py-1 rounded-full font-sans">#내집</span>
                  <span className="text-xs text-[#2c2825]/40 border border-[#2c2825]/15 px-3 py-1 rounded-full font-sans">#빛누리</span>
                </div>
                <blockquote className="font-serif italic text-xl text-[#2c2825]/70 leading-relaxed border-l-2 border-[#2c2825]/15 pl-6">
                  "누리는 내 집이다"
                </blockquote>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img src="/image/15EECDB8-B358-4CF1-BC38-9A1D57BAE8AA_1_105_c.jpeg" alt="인준" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ═══════════ 누리의 역할 ═══════════ */}
      <Slide>
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-[#2c2825]/40 font-sans">Our Blueprint</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 font-light">우리가 설계한 작고 완벽한 세계</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-10">
                <h3 className="font-serif text-3xl font-light mb-2">누리의 역할</h3>
                <p className="text-[#2c2825]/40 font-serif italic">"집을 굴리는 힘"</p>
              </div>
              <ul className="space-y-8 inline-block text-center">
                {[
                  { title: "경제 관리자", desc: "수학 꽤나 하던 실력으로 잘 관리할게" },
                  { title: "헬스 담당자", desc: "사랑한다면 오늘도 운동해" },
                  { title: "독서 감독관", desc: "네가 산 책, 네가 읽어야지" },
                  { title: "요리사", desc: "맛은 없어도 인준이가 맛있게 먹어줘" },
                  { title: "전속 개그맨", desc: "웃음은 무제한 제공, 퀄리티는 보장 못 함" },
                ].map((role, idx) => (
                  <li key={idx} className="group flex flex-col items-center gap-1">
                    <span className="text-[#2c2825]/20 font-sans text-sm tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                    <h4 className="font-sans font-medium text-lg md:text-xl mb-1">{role.title}</h4>
                    <p className="text-[#2c2825]/50 text-base md:text-lg leading-relaxed">{role.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ═══════════ 인준의 역할 ═══════════ */}
      <Slide>
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn delay={0.15}>
            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-10">
                <h3 className="font-serif text-3xl font-light mb-2">인준의 역할</h3>
                <p className="text-[#2c2825]/40 font-serif italic">"집을 따뜻하게 하는 힘"</p>
              </div>
              <ul className="space-y-8 inline-block text-center">
                {[
                  { title: "AI 선생님", desc: "세상이 바뀌어도, 네 옆에서 같이 배운다" },
                  { title: "화장실 청소 담당", desc: "가장 빛나지 않는 곳을 맡는 사람" },
                  { title: "마사지 담당", desc: "고된 하루의 마침표는 내 손으로" },
                  { title: "멘탈 관리자", desc: "흔들릴 때 잡아주는 사람" },
                  { title: "고양이 헤어 디자이너", desc: "고양이도 예뻐야 집이 행복하다" },
                ].map((role, idx) => (
                  <li key={idx} className="group flex flex-col items-center gap-1">
                    <span className="text-[#2c2825]/20 font-sans text-sm tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                    <h4 className="font-sans font-medium text-lg md:text-xl mb-1">{role.title}</h4>
                    <p className="text-[#2c2825]/50 text-base md:text-lg leading-relaxed">{role.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ═══════════ 감사 인사 — 누리 올림 ═══════════ */}
      <Slide className="bg-[#2c2825] text-[#f5f0eb]">
        <div className="max-w-5xl mx-auto w-full">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-[#f5f0eb]/30 font-sans">Gratitude</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 font-light">이 봄이 당신들 덕분입니다</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid md:grid-cols-12 gap-8 items-center max-w-3xl mx-auto">
              <div className="md:col-span-6">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img src="/image/IMG_2256.jpg" alt="인준 가족" className="w-full h-full object-cover opacity-85" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="md:col-span-6">
                <span className="text-[#f5f0eb]/30 text-xs tracking-[0.3em] uppercase font-sans">누리 올림</span>
                <h3 className="font-serif text-3xl font-light mt-3 mb-6">어머니, 할머니, 인성</h3>
                <div className="w-10 h-px bg-[#f5f0eb]/15 mb-6" />
                <p className="font-serif italic text-xl text-[#f5f0eb]/60 leading-relaxed">"귀한 사람을 이렇게 키워주셔서 감사합니다"</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ═══════════ 감사 인사 — 인준 올림 ═══════════ */}
      <Slide className="bg-[#2c2825] text-[#f5f0eb]">
        <div className="max-w-5xl mx-auto w-full">
          <FadeIn delay={0.15}>
            <div className="grid md:grid-cols-12 gap-8 items-center max-w-3xl mx-auto">
              <div className="md:col-span-6 md:order-2">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img src="/image/KakaoTalk_Photo_2026-03-11-22-52-15.jpeg" alt="누리 가족" className="w-full h-full object-cover opacity-85" style={{ objectPosition: '20% center' }} referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="md:col-span-6 md:order-1">
                <span className="text-[#f5f0eb]/30 text-xs tracking-[0.3em] uppercase font-sans">인준 올림</span>
                <h3 className="font-serif text-3xl font-light mt-3 mb-6">아버지, 어머니, 아람</h3>
                <div className="w-10 h-px bg-[#f5f0eb]/15 mb-6" />
                <p className="font-serif italic text-xl text-[#f5f0eb]/60 leading-relaxed">"귀한 사람을 이렇게 키워주셔서 감사합니다"</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Slide>

      {/* ═══════════ 마지막 멘트 ═══════════ */}
      <Slide className="bg-[#2c2825] text-[#f5f0eb]">
        <FadeIn>
          <div className="text-center">
            <p className="font-serif text-2xl md:text-3xl text-[#f5f0eb]/80 font-light leading-relaxed tracking-wide">
              "이제 서로 없어서는 절대 안 되는 존재가 되어버렸어요.<br />저희 정말 행복하게 잘 살게요."
            </p>
          </div>
        </FadeIn>
      </Slide>

    </div>
  );
}

export default App;
