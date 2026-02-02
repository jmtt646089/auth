import { StackClientApp } from "@stackframe/react";
import { useNavigate } from "react-router-dom";

export const stackClientApp = new StackClientApp({
  // You should store these in environment variables
  projectId: "c87c47e4-653e-4304-a7c1-a366b5600ba2",
  publishableClientKey: "pck_z02hkdr8rb4p0xkhcr4jkjg53k0t48dpcpz9qhfec6zdg",
  tokenStore: "cookie",
  redirectMethod: {
    useNavigate,
  }
});
