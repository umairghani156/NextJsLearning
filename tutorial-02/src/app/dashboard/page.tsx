import DonutChart from "@/components/donut-chart";
import LineChart from "./line-chart";


export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* This is the dashboard page system */}
            <LineChart />
            <DonutChart/>
        </div>
    );
}