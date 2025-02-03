import AnalyticsCard from "./../../components/re-ui/AnalyticsCard";
import SalesCard from "./../../components/re-ui/SalesCard";

export default function Home() {
  return (
    <div className="p-8 flex gap-6 bg-gray-100 mt-20 fixed left-60 w-[calc(100%-14rem)] dark:bg-gray-900  dark:text-gray-500">
      {/* Website Analytics Card */}
      <AnalyticsCard
        title="Website Analytics"
        conversionRate="Total 28.5% Conversion Rate"
        stats={[
          { label: "Sessions", value: "28%" },
          { label: "Page Views", value: "3.1k" },
          { label: "Leads", value: "1.2k" },
          { label: "Conversions", value: "12%" },
        ]}
        imageUrl="https://i.postimg.cc/W1SKSnSx/sidebar-pic-2.png"
      />

      {/* Average Daily Sales Card */}
      <SalesCard
        title="Average Daily Sales"
        subtitle="Total Sales This Month"
        amount="$28,450"
        imageUrl="https://i.postimg.cc/cHHrr0L6/Chart.png"
      />

      {/* Sales Overview Card */}
      <SalesCard
        title="Sales Overview"
        amount="$42.5k"
        change="+18.2%"
        progress={{
          orderPercentage: "62.2%",
          orderValue: "6,440",
          visitPercentage: "25.5%",
          visitValue: "12,749",
        }}
      />
    </div>
  );
}
