"use client";
import React, { Suspense } from "react";
import { useState } from "react";

const getData = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 2000);
  });
};

const page = async () => {
  const data = await getData();

  return (
    <div>
      <h1>Posts Page</h1>
      <p>Posts content</p>
      <div>{data}</div>
    </div>
  );
};

export default page;
