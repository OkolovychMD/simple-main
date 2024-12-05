"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  const router = useRouter();
  router.push("/404")
  return (
   <></>
  );
};

export default NotFoundPage;
