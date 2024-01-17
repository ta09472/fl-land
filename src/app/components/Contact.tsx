"use client";

import { useEffect } from "react";

const API_KEY = "e9635fbfde509e1c6ec7a1510fcee63e";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const latitude = 35.8804791;
        const longitude = 127.099722;

        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        // 추가적인 맵 설정 및 이벤트는 여기에 작성합니다.

        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <section
      id="contact"
      className=" drop-shadow-sm flex items-center justify-center min-h-screen text-center text-black relative bg-slate-50 py-52 max-md:pb-16 max-md:pt-48 overflow-hidden lqd-is-in-view"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="block text-[2rem] font-extrabold ">찾아오시는 길</p>
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <p className="block">주소 : 전북 전주시 덕진구 전미중앙로 21</p>
          </div>

          <div id="map" className="w-[30rem] h-[30rem]" />
        </div>
      </div>
    </section>
  );
}
