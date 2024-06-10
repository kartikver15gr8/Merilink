import EditHandle from "@/components/EditHandle";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  return <EditHandle />;
}
