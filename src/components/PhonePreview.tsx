"use client";

import { CaseColor } from "@prisma/client";
import { useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";

const PhonePreview = ({ croppedImageUrl, color }: { croppedImageUrl: string, color: CaseColor }) => {

    const [renderedDimensions, setRenderedDimensions] = useState({
        height: 0, width: 0
    })

    const ref = useRef<HTMLDivElement>(null)


    let caseBackgroundColor = "bg-zinc-950"
    if(color === "blue") caseBackgroundColor = "bg-blue-950"
    if(color === "rose") caseBackgroundColor = "bg-blue-950"


  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
        <div className="absolute z-20 scale-[1.0352]" style={{ 
            left: renderedDimensions.width / 2 - renderedDimensions.width / (1216 / 121),
            top: renderedDimensions.height / 6.22
            }}>
                <img src={croppedImageUrl} width={renderedDimensions.width / (3000 / 637)} alt="phone image" 
                className={cn("phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]", caseBackgroundColor)} />
            </div>

            <div className="relative h-full w-full z-40">
                <img src="/clearphone.png" alt="phone" className="pointer-events-none size-full antialiased rounded-md" />
            </div>

    </AspectRatio>
  )
}

export default PhonePreview