import { createContext, useContext } from "react";

// 클라이언트 환경: null
// 서버 환경: { done: false, promise: [] }
const PreloadContext = createContext(null);


