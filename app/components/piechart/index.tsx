"use client";

import { useEffect, useRef, useState } from "react";
import Chart, { ChartOptions } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

type HoveredSection =
  | {
      type: "inner";
      index: number;
      label: string;
      value: number;
      color: string;
      unlockingDetail: string;
      percentage: string;
    }
  | {
      type: "outer";
      index: number;
      label: string;
      value: number;
      color: string;
      percentage: string;
    }
  | null;

const SafariQTokenomicsChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredSection, setHoveredSection] = useState<HoveredSection>(null);

  // Tokenomics data with unlocking details
  const tokenomicsData = {
    inner: {
      labels: [
        "Community Rewards & Campaigns",
        "Founders & Core Team",
        "Ecosystem Reserve Fund",
        "Operations, Treasury & Burns",
        "Partnerships & Strategic Growth",
        "Liquidity & Exchange Integration",
      ],
      values: [1100, 380, 160, 140, 120, 100],
      colors: [
        "#059669",
        "#1e40af",
        "#06b6d4",
        "#d97706",
        "#7c3aed",
        "#dc2626",
      ],
      unlockingDetails: [
        "Locked through reward logic smart contract 4Y-curved vesting.",
        "1Y Cliff, 3Y linear vesting",
        "Release in annual tranches of 25%, over 4 years",
        "20% unlocked upfront; remaining 80% vested linearly over 3 years.",
        "Quarterly unlocks over 4 years",
        "Fully unlocked upfront",
      ],
    },
    outer: {
      labels: [
        "Community Airdrops",
        "Referrals",
        "NFT Rewards",
        "Loyalty & Campaign Incentives",
        "Reserved",
        "Travel-to-Earn (Users+Resellers)",
      ],
      values: [3, 7, 55, 20, 15, 1000],
      colors: [
        "#86efac",
        "#4ade80",
        "#22c55e",
        "#16a34a",
        "#15803d",
        "#14532d",
      ],
    },
  };

  const totalSupply = tokenomicsData.inner.values.reduce((a, b) => a + b, 0);
  const totalCommunity = tokenomicsData.outer.values.reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const options: ChartOptions<"doughnut"> = {
      responsive: true,
      onHover: (event, elements) => {
        if (elements.length > 0) {
          const element = elements[0];
          const datasetIndex = element.datasetIndex;
          const index = element.index;

          if (datasetIndex === 0) {
            setHoveredSection({
              type: "inner",
              index,
              label: tokenomicsData.inner.labels[index],
              value: tokenomicsData.inner.values[index],
              color: tokenomicsData.inner.colors[index],
              unlockingDetail: tokenomicsData.inner.unlockingDetails[index],
              percentage: (
                (tokenomicsData.inner.values[index] / totalSupply) *
                100
              ).toFixed(2),
            });
          } else if (
            datasetIndex === 1 &&
            index >= tokenomicsData.inner.values.length
          ) {
            const outerIndex = index - tokenomicsData.inner.values.length;
            setHoveredSection({
              type: "outer",
              index: outerIndex,
              label: tokenomicsData.outer.labels[outerIndex],
              value: tokenomicsData.outer.values[outerIndex],
              color: tokenomicsData.outer.colors[outerIndex],
              percentage: (
                (tokenomicsData.outer.values[outerIndex] / totalCommunity) *
                100
              ).toFixed(2),
            });
          }
        } else {
          setHoveredSection(null);
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          position: "nearest",
          xAlign: "center",
          yAlign: "top",
          caretPadding: 10,
          cornerRadius: 8,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleColor: "#fff",
          bodyColor: "#fff",
          borderColor: "rgba(255, 255, 255, 0.2)",
          borderWidth: 1,
          bodyFont: {
            size: 12,
          },
          titleFont: {
            size: 13,
            weight: "bold",
          },
          padding: 12,
          callbacks: {
            label: (ctx) => {
              if (ctx.datasetIndex === 0) {
                const pct = (
                  ((ctx.parsed as number) / totalSupply) *
                  100
                ).toFixed(2);
                const unlockingDetail =
                  tokenomicsData.inner.unlockingDetails[ctx.dataIndex];

                const wrapText = (text: string, maxLength = 40): string[] => {
                  if (text.length <= maxLength) return [text];
                  const words: string[] = text.split(" ");
                  const lines: string[] = [];
                  let currentLine = "";

                  words.forEach((word: string) => {
                    if ((currentLine + word).length <= maxLength) {
                      currentLine += (currentLine ? " " : "") + word;
                    } else {
                      if (currentLine) lines.push(currentLine);
                      currentLine = word;
                    }
                  });

                  if (currentLine) lines.push(currentLine);
                  return lines;
                };

                const wrappedUnlocking = wrapText(unlockingDetail);
                const result = [`${ctx.label}: ${ctx.parsed}M (${pct}%)`];

                wrappedUnlocking.forEach((line, index) => {
                  result.push(index === 0 ? `Unlocking: ${line}` : `  ${line}`);
                });

                return result;
              } else {
                const pct = (
                  ((ctx.parsed as number) / totalCommunity) *
                  100
                ).toFixed(2);
                return `${ctx.label}: ${ctx.parsed}M (${pct}%)`;
              }
            },
          },
        },
        datalabels: {
          color: "#fff",
          font: { weight: "bold", size: 11 },
          formatter: (val: number, ctx) => {
            if (ctx.datasetIndex === 0) {
              const pct = ((val / totalSupply) * 100).toFixed(1);
              return val > 0 ? pct + "%" : "";
            }
            return "";
          },
        },
      },
      elements: {
        arc: { borderWidth: 0 },
      },
      cutout: 0,
    };

    chartInstance.current = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: tokenomicsData.inner.labels.concat(tokenomicsData.outer.labels),
        datasets: [
          {
            label: "Inner Main Allocation",
            data: tokenomicsData.inner.values,
            backgroundColor: tokenomicsData.inner.colors,
            borderColor: "#374151",
            borderWidth: 1,
            circumference: 360,
            rotation: 0,
          },
          {
            label: "Outer Community Breakdown",
            data: Array(tokenomicsData.inner.values.length)
              .fill(0)
              .concat(tokenomicsData.outer.values),
            backgroundColor: Array(tokenomicsData.inner.values.length)
              .fill("transparent")
              .concat(tokenomicsData.outer.colors),
            borderColor: "#374151",
            borderWidth: 0,
            circumference: 360,
            rotation: 270,
          },
        ],
      },
      options,
      plugins: [ChartDataLabels],
    });

    return () => {
      chartInstance.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-white flex flex-col items-center justify-center font-sans md:p-4">
      <div className="rounded-2xl md:p-5 w-full max-w-[950px]">
        <canvas
          ref={chartRef}
          className="w-full max-h-[520px]"
          id="tokenomicsChart"
        />
        <div className="mt-6 space-y-3">
          {/* Large screens: Show full legend */}
          <div className="hidden lg:block">
            <div className="text-xs space-y-3">
              <div className="flex flex-wrap gap-2">
                {tokenomicsData.inner.labels.map((label, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div
                      className="w-2 h-2 rounded"
                      style={{
                        backgroundColor: tokenomicsData.inner.colors[index],
                      }}
                    ></div>
                    <span>
                      {label}: {tokenomicsData.inner.values[index]}M (
                      {(
                        (tokenomicsData.inner.values[index] / totalSupply) *
                        100
                      ).toFixed(2)}
                      %)
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {tokenomicsData.outer.labels.map((label, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div
                      className="w-2 h-2 rounded"
                      style={{
                        backgroundColor: tokenomicsData.outer.colors[index],
                      }}
                    ></div>
                    {index === tokenomicsData.outer.labels.length - 1 ? (
                      <div className="flex flex-col">
                        <span>Travel-to-Earn</span>
                        <span>(Users+Resellers)</span>
                      </div>
                    ) : (
                      <span>{label}</span>
                    )}
                    <span>
                      : {tokenomicsData.outer.values[index]}M (
                      {(
                        (tokenomicsData.outer.values[index] / totalCommunity) *
                        100
                      ).toFixed(2)}
                      %)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Small to medium screens: Simplified view */}
          <div className="lg:hidden">
            <div className="text-xs space-y-2">
              <div className="text-center text-sm font-semibold mb-3">
                Hover over chart sections for details
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tokenomicsData.inner.labels.map((label, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 rounded "
                  >
                    <div
                      className="w-3 h-3 rounded"
                      style={{
                        backgroundColor: tokenomicsData.inner.colors[index],
                      }}
                    ></div>
                    <div className="flex-1">
                      <div className="font-medium text-xs">{label}</div>
                      <div className="text-xs text-gray-300">
                        {tokenomicsData.inner.values[index]}M (
                        {(
                          (tokenomicsData.inner.values[index] / totalSupply) *
                          100
                        ).toFixed(1)}
                        %)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariQTokenomicsChart;
