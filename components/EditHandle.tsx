"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { useEffect, useState } from "react";

export default function EditHandle() {
  const session = useSession();

  const username = session.data?.user?.email;

  return (
    <div>
      <div>hello</div>
    </div>
  );
}
