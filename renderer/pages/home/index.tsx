import React, { useEffect, useState, useRef } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import { useEntryApi } from "@/hooks/@queries/useEntryApi";
import { PostEntryRequest } from "@/types/ApiRequest";
import { clearInterval, setInterval, setTimeout } from "timers";

export default function HomePage() {
  const [reservationQR, setReservationQR] = useState<PostEntryRequest | null>(
    null
  );
  const [inputValue, setInputValue] = useState<string>("");
  const { mutation } = useEntryApi();
  const inputRef = useRef(null);

  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    focusInput();

    const focusInterval = setInterval(focusInput, 1000);
    return () => clearInterval(focusInterval);
  }, []);

  useEffect(() => {
    if (reservationQR && !mutation.isPending) {
      mutation.mutate(reservationQR);
    }
  }, [reservationQR]);

  const handleQRInput = (value: string) => {
    if (!value.trim()) {
      return;
    }

    try {
      const parsed = JSON.parse(value);
      setReservationQR(parsed);
    } catch (error) {
      console.error("QR 파싱 실패:", error);
    }
  };

  return (
    <>
      <DefaultLayout
        title="QR 코드를 스캔해주세요"
        subTitle={`POPI 앱의 티켓을 확인해주세요 \n 앱 > MY > 내 예약`}
        imageSource="/images/camera.webp"
      />

      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        disabled={mutation.isPending}
        style={{
          opacity: 0,
          height: 0,
          width: 0,
          position: "absolute",
          top: -9999,
          left: -9999,
        }}
        autoFocus
        onBlur={() => {
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }, 100);
        }}
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleQRInput(inputValue);
            setInputValue("");
          }
        }}
      />
    </>
  );
}
