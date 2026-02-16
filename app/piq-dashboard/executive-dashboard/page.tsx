import { PackIQComplianceDashMatrCards } from "@/components/PackIQ-Data-Compliance-Dashboard-MetricCards";
import { GraphFour } from "@/components/packiq/graphFour";

export default function ExecutiveDashBoard(){

    return(

        <>
        <div className="p-10">
            <PackIQComplianceDashMatrCards/>
        <GraphFour/>
        </div>
        </>
    )
}

