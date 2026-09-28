"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const OPERATIONAL_PATHS = new Set(["/privacy", "/terms"]);

type MaintenanceGateProps = {
  children: ReactNode;
  footer: ReactNode;
  header: ReactNode;
  maintenance: ReactNode;
};

export default function MaintenanceGate({
  children,
  footer,
  header,
  maintenance,
}: MaintenanceGateProps) {
  const pathname = usePathname();
  const normalizedPath = pathname?.replace(/\/$/, "") || "/";
  const isOperationalRoute = OPERATIONAL_PATHS.has(normalizedPath);

  if (!isOperationalRoute) {
    return maintenance;
  }

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
