"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register the plugin
Chart.register(ChartDataLabels);

const SafariQTokenomicsChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // INNER RING = main allocation (smaller radius, center) - Mix of dark and light colors
    const innerLabels = [
      "Community Rewards & Campaigns",
      "Founders & Core Team",
      "Ecosystem Reserve Fund",
      "Operations, Treasury & Burns",
      "Partnerships & Strategic Growth",
      "Liquidity & Exchange Integration",
    ];
    const innerValues = [1100, 380, 160, 140, 120, 100];
    const innerColors = [
      "#06b6d4",
      "#1e40af",
      "#059669",
      "#d97706",
      "#7c3aed",
      "#dc2626",
    ]; // Cyan, Blue, Green, Orange, Purple, Red mix
    const totalSupply = innerValues.reduce((a, b) => a + b, 0);

    // OUTER RING = Community Rewards breakdown - Gradient from dark to light blues/cyans
    const outerLabels = [
      "Airdrops",
      "Referral Rewards",
      "Campaigns",
      "Travel Streaks",
      "Gamification",
    ];
    const outerValues = [33, 77, 605, 220, 165];
    const outerColors = ["#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"]; // Dark to light cyan gradient
    const totalCommunity = outerValues.reduce((a, b) => a + b, 0);

    chartInstance.current = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: innerLabels.concat(outerLabels),
        datasets: [
          {
            label: "Inner Main Allocation",
            data: innerValues,
            backgroundColor: innerColors,
            borderColor: "#3741510",
            borderWidth: 5,
            circumference: 360,
            rotation: 0,
          },
          {
            label: "Outer Community Breakdown",
            data: Array(innerValues.length).fill(0).concat(outerValues),
            backgroundColor: Array(innerValues.length)
              .fill("transparent")
              .concat(outerColors),
            borderColor: "#3741510",
            borderWidth: 5,
            circumference: 360,
            rotation: 270, // largest slice (Campaigns 605M) at bottom
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                if (ctx.datasetIndex === 0) {
                  const pct = ((ctx.parsed / totalSupply) * 100).toFixed(2);
                  return `${ctx.label}: ${ctx.parsed}M (${pct}%)`;
                } else {
                  const pct = ((ctx.parsed / totalCommunity) * 100).toFixed(2);
                  return `${ctx.label}: ${ctx.parsed}M (${pct}%)`;
                }
              },
            },
          },
          datalabels: {
            color: "#fff",
            font: { weight: "bold", size: 11 },
            formatter: (val, ctx) => {
              if (ctx.datasetIndex === 0) {
                const pct = ((val / totalSupply) * 100).toFixed(1);
                return val > 0 ? pct + "%" : "";
              } else {
                const pct = ((val / totalCommunity) * 100).toFixed(1);
                return val > 0 ? pct + "%" : "";
              }
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className=" text-white flex items-center justify-center  font-sans">
      <div className=" rounded-2xl p-5 w-[100%] max-w-[950px] ">
        <canvas
          ref={chartRef}
          className="w-full max-h-[520px]"
          id="tokenomicsChart"
        />
      </div>
    </div>
  );
};

export default SafariQTokenomicsChart;
