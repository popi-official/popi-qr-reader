import { ipcMain } from "electron";
import axios from "axios";

interface PostEntryData {
  memberReservationId: number;
  reservationId: number;
  popupId: number;
  age: string;
  gender: string;
  reservationDate: string;
  reservationTime: string;
}

// IPC 핸들러 등록
export function registerHomeHandlers() {
  ipcMain.handle("post-entry", async (event, data: PostEntryData) => {
    try {
      const response = await axios.post(
        "https://dev-api.popi.today/reservations/entrance?popupId=1",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            // 필요한 헤더들 추가
          },
        }
      );

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  });
}
