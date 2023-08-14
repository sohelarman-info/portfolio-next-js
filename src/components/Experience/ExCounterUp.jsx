import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function ExMemberCounterUp({ number, title }) {
  return (
    <motion.div className="ex-count">
      <h2>
        <CountUp duration={2} end={number > 30 ? 30 : number} />
        {number > 30 ? "+" : ""}
      </h2>
      <p className={DmSans.className}>{title}</p>
    </motion.div>
  );
}

export function ExProjectCounterUp({ number, title }) {
  return (
    <motion.div className="ex-count">
      <h2>
        <CountUp duration={2} end={number} />
      </h2>
      <p className={DmSans.className}>{title}</p>
    </motion.div>
  );
}

export function ExClientCounterUp({ number, title }) {
  return (
    <motion.div className="ex-count">
      <h2>
        <CountUp duration={2} end={number > 50 ? 50 : number} />
        {number > 50 ? "+" : ""}
      </h2>
      <p className={DmSans.className}>{title}</p>
    </motion.div>
  );
}
