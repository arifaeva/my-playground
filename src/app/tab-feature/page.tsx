import { TabComponent } from "@/components/tab";
import React from "react";

const datas = [
  { title: "Tab 1", content: "Content tab 1" },
  { title: "Tab 2", content: "Content tab 2" },
  { title: "Tab 3", content: "Content tab 3" },
];

export default function TabFeature() {
  return (
    <main className="bg-white rounded-lg mx-4 p-4">
      <h1>Tabs page</h1>
      <br />

      {/* Tabs Component */}
      <TabComponent datas={datas} />
    </main>
  );
}
