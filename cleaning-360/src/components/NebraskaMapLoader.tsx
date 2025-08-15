"use client";

import dynamic from "next/dynamic";

const DynamicNebraskaMap = dynamic(() => import("./NebraskaMap"), { ssr: false });

export default function NebraskaMapLoader() {
	return <DynamicNebraskaMap />;
}