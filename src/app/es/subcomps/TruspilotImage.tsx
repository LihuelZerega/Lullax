import React from "react";
import Link from "next/link";
import Image from "next/image";
import LullaxTrustpilot from "@/images/LullaxTrustpilot.png";

function TruspilotImage() {
  return (
    <div className="flex flex-row items-center justify-center py-12">
      <hr />
      <Link href="https://es.trustpilot.com/review/lullax.com">
        <Image src={LullaxTrustpilot} alt="LullaxTrustpilot" />
      </Link>
      <hr />
    </div>
  );
}

export default TruspilotImage;
